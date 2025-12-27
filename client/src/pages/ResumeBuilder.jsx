import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { dummyResume } from "../assets/assests";
import { ArrowLeftIcon, Briefcase, ChevronLeft, ChevronRight, FileText, Folder, GraduationCap, Sparkle, User } from "lucide-react";

const ResumeBuilder = () => {
  const { resumeId } = useParams();
  
  const [resumeData, setResumeData] = useState({
    _id: "",
    title: "",
    personal_info: {},
    professional_summary: "",
    experience: [],
    education: [],
    project: [],
    skills: [],
    template: "classic",
    accent_color: "#3B82F6",
    public: false,
  });
  const [activeSectionIndex,setActiveSectionIndex]=useState(0)
  const [removeBackground,setRemoveBackground]=useState(false)

  


  const sections=[
    {id:"personal",name:"Personal info",icon:User},
    {id:"summary",name:"Summary",icon:FileText},
    {id:"education",name:"Education info",icon:GraduationCap},
    {id:"experience",name:"Experience",icon:Briefcase},
    {id:"projects",name:"Projects",icon:Folder},
    {id:"skills",name:"Skills",icon:Sparkle}

  ]

  const activeSections=sections[activeSectionIndex]

  // get the resume data from the resume id and get resume id from the url parameter
  const loadExistingResume = async () => {
    const resume = dummyResume.find((resume) => resume._id === resumeId);
    if (resume) {
      setResumeData(resume);
      document.title = resume.title; //for updating the browser title
    }
  };

  useEffect(() => {
    if (resumeId) {
      loadExistingResume();
    }
  }, [resumeId]);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link
          to={"/app"}
          className="inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all"
        >
          <ArrowLeftIcon className="size-4" /> Back to Dashboard
        </Link>
        {/*when back icon is clicked will travel back to the dashboard */}
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* left-pannel - form */}
          <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
              <div className="bg-white rounded-lg shadow-sm border border-grey-200 p-6 pt-1">
                {/* progress bar - uses activeSectionIndex */}
                <hr className="absolute top-0 left-0 right-0 border-2 border-grey-200"/>
                <hr className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-500 to-green-600 border-none transition-all duration-2000" style={{width:`${activeSectionIndex * 100/(sections.length-1)}%`}}/>

                {/* section navigation */}
                <div className="flex justify-between items-center mb-6 border-b border-grey-300 py-1">
                  <div></div>
                  <div className="flex items-center">
                  {/* if true then we have to display the previous button */}
                    {activeSectionIndex!==0 &&(
                      <button className="flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all" disabled={activeSectionIndex===0} onClick={()=>setActiveSectionIndex((prevIndex)=>{Math.max(prevIndex-1,0)})}>
                        <ChevronLeft className="size-4"/>Previous
                      </button>
                    )}

                    <button className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all ${activeSectionIndex === sections.length-1 && 'opacity-50'}` } disabled={activeSectionIndex === sections.length-1} onClick={()=>setActiveSectionIndex((prevIndex)=>{Math.min(prevIndex+1,sections.length-1)})}>
                    Next <ChevronRight className="size-4"/>
                      </button>

                  </div>

                </div>
              </div>
          </div>
          {/* right pannel - resume preview */}
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
