import React, { useState, useEffect } from "react";
import { CloudUpload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Upload } from "lucide-react";

const HeroSection = () => {
   const [file, setFile] = useState(null);
   const [resData, setResData] = useState({});
   const [isUploading, setIsUploading] = useState(false);
   const [showLoader, setShowLoader] = useState(false);

   const navigate = useNavigate();

   const handleUpload = async (e) => {
      if (e) {
         e.preventDefault();
      }
      if (!file) {
         console.log("Please select a file");
         return;
      }
      console.log(file);

      const formData = new FormData();
      formData.append("resume", file);

      try {
         setIsUploading(true);
         const response = await fetch("http://localhost:3000/api/v1/upload/file", {
            method: "POST",
            body: formData,
         });

         const data = await response.json();
         console.log(data);
         setIsUploading(false);

         const mustHaveData = await fetch("http://localhost:3000/api/v1/resume/create", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               files: data,
            }),
         });

         const mustHaveDataJson = await mustHaveData.json();

         navigate("/resume/" + mustHaveDataJson.id);
      } catch (error) {
         console.error("Error uploading file:", error);
      }
   };

   useEffect(() => {
      handleUpload();
   }, [file]);
   return (
      <div className="flex flex-col items-center justify-center text-lightGray w-full min-h-screen h-full">
         <div
            className="absolute inset-0 bg-gradient-to-r from-purple to-[#5c00ef47] opacity-20 -z-10"
            style={{
               mask: "radial-gradient(circle at 75% -50%, black 0%, transparent 100%, black 100%)",
            }}
         ></div>
         <div className="max-w-7xl mx-auto text-center p-20 flex flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 line-clamp-6">
               Optimize your{" "}
               <span class="text-transparent bg-clip-text bg-gradient-to-r to-[#ff3d3c] from-[#5c00ef]">
                  Resume
               </span>
            </h1>

            <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto text-lightGray opacity-75">
               Craft a professional resume that stands out and lands you your dream job.
            </p>
            <div className="flex flex-col items-center justify-center gap-4">
               <form
                  className="flex flex-col gap-4 items-center justify-center"
                  onSubmit={handleUpload}
               >
                  <label htmlFor="resume" className="w-full">
                     <button
                        className="bg-[#ff3d3c] hover:bg-[#ff3d3c]/90 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out flex items-center group disabled:hover:cursor-not-allowed"
                        disabled={isUploading || !file}
                     >
                        <input
                           type="file"
                           name="resume"
                           onChange={(e) => {
                              setFile(e.target.files[0]);
                           }}
                           className="opacity-0 cursor-pointer"
                           accept="image/png,image/jpeg,application/pdf"
                        />
                        {isUploading ? "Uploading..." : "Upload"}
                        {!isUploading ? (
                           <CloudUpload className="ml-2 h-5 w-5 -rotate-45 group-hover:translate-x-1 transition duration-300 ease-in-out group-hover:rotate-0" />
                        ) : (
                           <img
                              src="./animatedUpload.gif"
                              className="ml-2 h-6 w-6 -rotate-45"
                              alt="Uploading"
                           />
                        )}
                     </button>
                  </label>
               </form>
            </div>
         </div>
      </div>
   );
};

export default HeroSection;
