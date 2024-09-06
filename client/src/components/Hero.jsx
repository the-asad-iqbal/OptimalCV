import React, { useState, useCallback } from "react";
import { CloudUpload } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
   const [isUploading, setIsUploading] = useState(false);
   const [uploadProgress, setUploadProgress] = useState(0);
   const navigate = useNavigate();

   const handleUpload = useCallback(
      async (file) => {
         if (!file) {
            console.log("Please select a file");
            return;
         }

         setIsUploading(true);
         setUploadProgress(0);
         const startTime = Date.now();

         const formData = new FormData();
         formData.append("resume", file);

         try {
            const progressInterval = setInterval(() => {
               setUploadProgress((prev) => Math.min(prev + 10, 90));
            }, 200);

            const response = await fetch("http://localhost:3000/api/v1/upload/file", {
               method: "POST",
               body: formData,
            });

            clearInterval(progressInterval);
            const data = await response.json();

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

            const elapsedTime = Date.now() - startTime;
            if (elapsedTime < 3000) {
               await new Promise((resolve) => setTimeout(resolve, 2000 - elapsedTime));
            }

            setUploadProgress(100);
            setIsUploading(false);
            navigate("/resume/" + mustHaveDataJson.id);
         } catch (error) {
            console.error("Error uploading file:", error);
            setIsUploading(false);
            setUploadProgress(0);
         }
      },
      [navigate]
   );

   const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
         handleUpload(file);
      }
   };

   return (
      <div className="flex flex-col items-center justify-center text-lightGray w-full min-h-screen h-full bg-[#0f1a34]">
         <div className="custom-shape-divider-bottom-1725623496">
            <svg
               data-name="Layer 1"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 1200 120"
               preserveAspectRatio="none"
            >
               <path
                  d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                  opacity=".25"
                  className="shape-fill"
               ></path>
               <path
                  d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                  opacity=".5"
                  className="shape-fill"
               ></path>
               <path
                  d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                  className="shape-fill"
               ></path>
            </svg>
         </div>

         <div className="max-w-7xl mx-auto text-center p-20 flex flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 line-clamp-6">
               Optimize
               <span className="text-md">🚀</span>
               your <span className="text-[#ff3d3c]">Resume</span>
            </h1>

            <p className="text-xl sm:text-2xl mb-12 mx-auto text-lightGray opacity-75 max-w-xl">
               Craft a{""}
               <span className="text-[#ff3d3c] font-bold opacity-100">Resume</span> {""}
               that{" "}
               <span>
                  <span className="text-[#ff3d3c] font-bold opacity-100">stands out</span>
               </span>{" "}
               and lands you your <span>dream job.</span>
            </p>
            <div className="flex flex-col items-center justify-center gap-4">
               <label htmlFor="fileInput" className="w-full">
                  <div
                     className={`group bg-[#ff3d3c] hover:bg-[#ff3d3f]/90 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out flex items-center justify-center cursor-pointer ${
                        isUploading ? "opacity-50 cursor-not-allowed" : ""
                     }`}
                  >
                     <input
                        id="fileInput"
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept="image/png,image/jpeg,application/pdf"
                        disabled={isUploading}
                     />
                     {isUploading ? `Uploading... ${uploadProgress}%` : "Choose File"}
                     {!isUploading ? (
                        <CloudUpload className="ml-2 h-5 w-5 -rotate-45 group-hover:translate-x-1 transition duration-300 ease-in-out group-hover:rotate-0" />
                     ) : (
                        <img
                           src="/animatedUpload.gif"
                           className="ml-2 h-6 w-6 -rotate-45"
                           alt="Uploading"
                        />
                     )}
                  </div>
               </label>
            </div>
         </div>
      </div>
   );
};

export default HeroSection;
