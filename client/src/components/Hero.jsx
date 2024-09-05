import React, { useState } from "react";
import { CloudUpload } from "lucide-react";

import Audit from "./Audit";
import Skelton from "./Skelton";

const HeroSection = () => {
   const [file, setFile] = useState(null);
   const [resData, setResData] = useState({});
   const [isUploading, setIsUploading] = useState(false);
   const [showLoader, setShowLoader] = useState(false);

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
         try {
            if (response.ok) {
               setShowLoader(true);
               setIsUploading(false);
               const newRes = await fetch("http://localhost:3000/api/v1/completion/create", {
                  method: "POST",
                  headers: {
                     "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                     files: data,
                  }),
               });
               const result = await newRes.json();
               if (newRes.ok) {
                  setResData(result);
                  setShowLoader(false);
               }
            }
         } catch (error) {
            console.log(error);
         }
      } catch (error) {
         console.error("Error uploading file:", error);
      }
   };

   return (
      <div className="flex flex-col items-center justify-center text-lightGray w-full overflow-x-hidden overflow-y-auto h-screen">
         <div className="max-w-7xl w-full mx-auto text-center p-10 h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 line-clamp-6">
               Optimize your <span className="text-purple">CV!!</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto text-lightGray opacity-55">
               Craft a professional resume that stands out and lands you your dream job.
            </p>
            <div className="flex flex-col items-center justify-center gap-4">
               <form
                  onSubmit={handleUpload}
                  className="flex flex-col gap-4 items-center justify-center"
               >
                  <input
                     type="file"
                     name="resume"
                     onChange={handleFileChange}
                     className="min-w-full sm:w-auto bg-purple/10 hover:bg-purple/20 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out"
                  />

                  <button
                     className="bg-purple hover:bg-purple/90 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out flex items-center group disabled:hover:cursor-not-allowed"
                     type="submit"
                     disabled={isUploading || !file}
                  >
                     {isUploading ? "Uploading..." : "Upload"}
                     {!isUploading ? (
                        <CloudUpload className="ml-2 h-5 w-5 -rotate-45 group-hover:translate-x-1 transition duration-300 ease-in-out group-hover:rotate-0" />
                     ) : (
                        <img src="./animatedUpload.gif" className="ml-2 h-6 w-6 -rotate-45  " />
                     )}
                  </button>
               </form>
            </div>
         </div>

         {/* {resData && !isUploading && Object.keys(resData).length > 0 ? (
            <Audit resData={resData} />
         ) : (
            showLoader && <Skelton />
         )} */}
      </div>
   );
};

export default HeroSection;
