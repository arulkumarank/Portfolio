import React from "react";
import { Download } from "lucide-react";

export default function Resume() {
  const resumeViewUrl =
    "https://drive.google.com/file/d/1sZivzh5ASASmZpI-KkRrrOCfGdF_GpiL/preview";

  const resumeDownloadUrl =
    "https://drive.google.com/uc?export=download&id=1sZivzh5ASASmZpI-KkRrrOCfGdF_GpiL";

  const handleDownload = () => {
    window.open(resumeDownloadUrl, "_blank");
  };

  return (
    <section
      id="resume"
      className="relative z-10 min-h-screen flex items-center px-6 py-20"
    >
      <div className="max-w-5xl mx-auto w-full text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-8">
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Resume
          </span>
        </h2>

        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          View my resume below or download a copy for your reference.
        </p>

        {/* Resume Preview */}
        <div className="w-full h-[75vh] rounded-2xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-md mb-10">
          <iframe
            src={resumeViewUrl}
            className="w-full h-full"
            allow="autoplay"
          />
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto"
        >
          <Download className="w-5 h-5 group-hover:animate-bounce" />
          Download Resume
        </button>
      </div>
    </section>
  );
}
