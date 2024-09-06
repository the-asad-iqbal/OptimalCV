import React, { useState } from "react";
import { CloudUpload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Upload } from "lucide-react";

const HeroSection = () => {
   const [file, setFile] = useState(null);
   const [resData, setResData] = useState({});
   const [isUploading, setIsUploading] = useState(false);
   const [showLoader, setShowLoader] = useState(false);

   const navigate = useNavigate();

   const handleFileChange = (e) => {
      setFile(e.target.files[0]);
   };

   const handleUpload = async (e) => {
      e.preventDefault();
      if (!file) return;
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
               Optimize your <span className="text-[#ff3d3c]">CV!!</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto text-lightGray opacity-75">
               Craft a professional resume that stands out and lands you your dream job.
            </p>
            <div className="flex flex-col items-center justify-center gap-4">
               <form
                  onSubmit={handleUpload}
                  className="flex flex-col gap-4 items-center justify-center"
               >
                  <div class="flex items-center justify-center w-full">
                     <label
                        for="dropzone-file"
                        class="flex flex-col items-center justify-centerh-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer min-w-64 w-full"
                     >
                        <div className="relative">
                           <input
                              type="file"
                              name="resume"
                              onChange={handleFileChange}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              accept="image/svg+xml,image/png,image/jpeg,image/gif"
                           />
                           <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <Upload className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                 <span className="font-semibold">Click to upload</span> or drag and
                                 drop
                              </p>
                              {/* <p className="text-xs text-gray-500 dark:text-gray-400">
                                 SVG, PNG, JPG or GIF (MAX. 800x400px)
                              </p> */}
                           </div>
                        </div>
                     </label>
                  </div>

                  <button
                     className="bg-[#ff3d3c] hover:bg-[#ff3d3c]/90 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out flex items-center group disabled:hover:cursor-not-allowed"
                     type="submit"
                     disabled={isUploading || !file}
                  >
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
               </form>
            </div>
         </div>
      </div>
   );
};

export default HeroSection;
