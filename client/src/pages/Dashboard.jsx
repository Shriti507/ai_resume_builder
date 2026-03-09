import React, { useEffect, useState } from "react";
import {
  FilePenIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UploadCloud,
  UploadCloudIcon,
  XIcon,
  FileText,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { dummyResume } from "../assets/assests";

const Dashboard = () => {
  const navigate = useNavigate();
  const colors = ["#356859", "#5177ca", "#59bd9f", "#8B5E34"];

  const [allResumes, setAllResumes] = useState([]);
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState(null);
  const [editResumeId, setEditResumeId] = useState("");

  const now = new Date();
  const greeting = now.getHours() < 12 ? "Good morning" : now.getHours() < 18 ? "Good afternoon" : "Good evening";

  const loadAllResumes = () => {
    setAllResumes(dummyResume);
  };

  const createResume = async (event) => {
    event.preventDefault();
    setShowCreateResume(false);
    navigate(`/app/builder/res123`);
  };

  const uploadResume = async (event) => {
    event.preventDefault();
    setShowUploadResume(false);
    navigate(`/app/builder/res123`);
  };

  const editTitle = async (event) => {
    event.preventDefault();
    console.log("Updated title:", title);
    setEditResumeId("");
    setTitle("");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      loadAllResumes();
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const ModalWrapper = ({ onClose, children }) => (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-10 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 animate-fade-in-up"
      >
        {children}
        <button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors" onClick={onClose}>
          <XIcon size={18} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Welcome header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-800">{greeting}, Will 👋</h1>
        <p className="text-slate-500 text-sm mt-1">
          {allResumes.length > 0
            ? `You have ${allResumes.length} resume${allResumes.length > 1 ? "s" : ""}. Keep building!`
            : "Start by creating your first resume."}
        </p>
      </div>

      {/* Action cards */}
      <div className="flex gap-4 flex-wrap">
        <button
          onClick={() => setShowCreateResume(true)}
          className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-xl gap-3 text-slate-600 border-2 border-dashed border-slate-200 group hover:border-[#8B5E34] hover:shadow-lg hover:shadow-[#8B5E34]/10 transition-all duration-300 cursor-pointer"
        >
          <div className="size-12 rounded-full bg-gradient-to-br from-[#59bd9f] to-[#356859] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <PlusIcon className="size-6 text-white" />
          </div>
          <p className="text-sm font-medium group-hover:text-[#8B5E34] transition-colors duration-300">
            Create Resume
          </p>
        </button>

        <button
          onClick={() => setShowUploadResume(true)}
          className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-xl gap-3 text-slate-600 border-2 border-dashed border-slate-200 group hover:border-[#5177ca] hover:shadow-lg hover:shadow-[#5177ca]/10 transition-all duration-300 cursor-pointer"
        >
          <div className="size-12 rounded-full bg-gradient-to-br from-[#3b5cb0] to-[#5177ca] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <UploadCloudIcon className="size-6 text-white" />
          </div>
          <p className="text-sm font-medium group-hover:text-[#5177ca] transition-colors duration-300">
            Upload Resume
          </p>
        </button>
      </div>

      <hr className="border-slate-200 my-6" />

      {/* Resume grid */}
      {allResumes.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-slate-400">
          <FileText size={48} strokeWidth={1} className="mb-3" />
          <p className="font-medium text-slate-500">No resumes yet</p>
          <p className="text-sm mt-1">Create or upload your first resume above</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
          {allResumes.map((resume, index) => {
            const baseColor = colors[index % colors.length];
            return (
              <button
                onClick={() => navigate(`/app/builder/${resume._id}`)}
                key={index}
                className="relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-xl gap-2 border group hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}35)`,
                  borderColor: baseColor + "40",
                }}
              >
                <FilePenIcon
                  className="size-7 group-hover:scale-110 transition-all duration-300"
                  style={{ color: baseColor }}
                />
                <p
                  className="text-sm font-medium group-hover:scale-105 transition-all px-2 text-center"
                  style={{ color: baseColor }}
                >
                  {resume.title}
                </p>
                <p
                  className="absolute bottom-2 text-[11px] px-2 text-center transition-all duration-300"
                  style={{ color: baseColor + "90" }}
                >
                  Updated {new Date(resume.updatedAt).toLocaleDateString()}
                </p>

                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-2 right-2 group-hover:flex items-center hidden gap-0.5"
                >
                  <button className="size-7 p-1.5 hover:bg-white/60 rounded-md text-slate-600 transition-colors">
                    <TrashIcon className="size-full" />
                  </button>
                  <button
                    onClick={() => {
                      setEditResumeId(resume._id);
                      setTitle(resume.title);
                    }}
                    className="size-7 p-1.5 hover:bg-white/60 rounded-md text-slate-600 transition-colors"
                  >
                    <PencilIcon className="size-full" />
                  </button>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Create Modal */}
      {showCreateResume && (
        <ModalWrapper onClose={() => { setShowCreateResume(false); setTitle(""); }}>
          <form onSubmit={createResume}>
            <h2 className="text-xl font-bold mb-1 text-slate-800">New Resume</h2>
            <p className="text-sm text-slate-500 mb-5">Give your resume a name to get started</p>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="e.g. Software Engineer Resume"
              className="w-full px-4 py-2.5 mb-4 focus:border-[#8B5E34] focus:ring-[#8B5E34] text-sm"
              required
            />
            <button className="w-full py-2.5 bg-gradient-to-r from-[#8B5E34] to-[#704b2a] text-white rounded-xl hover:from-[#9c6b3c] hover:to-[#8B5E34] transition-all font-medium shadow">
              Create Resume
            </button>
          </form>
        </ModalWrapper>
      )}

      {/* Upload Modal */}
      {showUploadResume && (
        <ModalWrapper onClose={() => { setShowUploadResume(false); setTitle(""); setResume(null); }}>
          <form onSubmit={uploadResume}>
            <h2 className="text-xl font-bold mb-1 text-slate-800">Upload Resume</h2>
            <p className="text-sm text-slate-500 mb-5">Upload an existing PDF resume to edit it</p>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Resume title"
              className="w-full px-4 py-2.5 mb-4 focus:border-[#5177ca] focus:ring-[#5177ca] text-sm"
              required
            />
            <label htmlFor="resume-input" className="block text-sm text-slate-700">
              <div className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-300 rounded-xl p-4 py-10 my-4 hover:border-[#5177ca] hover:text-[#5177ca] cursor-pointer transition-colors">
                {resume ? (
                  <p className="text-green-600 font-medium text-sm">{resume.name}</p>
                ) : (
                  <>
                    <UploadCloud className="size-12 stroke-1 text-slate-400" />
                    <p className="text-slate-500 text-sm">Click to upload a PDF</p>
                  </>
                )}
              </div>
            </label>
            <input
              type="file"
              id="resume-input"
              accept=".pdf"
              hidden
              onChange={(e) => setResume(e.target.files[0])}
            />
            <button className="w-full py-2.5 bg-gradient-to-r from-[#3b5cb0] to-[#5177ca] text-white rounded-xl hover:opacity-90 transition-all font-medium shadow">
              Upload Resume
            </button>
          </form>
        </ModalWrapper>
      )}

      {/* Edit Title Modal */}
      {editResumeId && (
        <ModalWrapper onClose={() => { setEditResumeId(""); setTitle(""); }}>
          <form onSubmit={editTitle}>
            <h2 className="text-xl font-bold mb-1 text-slate-800">Rename Resume</h2>
            <p className="text-sm text-slate-500 mb-5">Enter a new title for this resume</p>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="New resume title"
              className="w-full px-4 py-2.5 mb-4 focus:border-[#8B5E34] focus:ring-[#8B5E34] text-sm"
              required
            />
            <button className="w-full py-2.5 bg-gradient-to-r from-[#8B5E34] to-[#704b2a] text-white rounded-xl hover:from-[#9c6b3c] hover:to-[#8B5E34] transition-all font-medium shadow">
              Save Changes
            </button>
          </form>
        </ModalWrapper>
      )}
    </div>
  );
};

export default Dashboard;
