import React, { useState } from "react";
import { CloudUpload } from "lucide-react";
import Audit from "./Audit";

const HeroSection = () => {
   const [file, setFile] = useState(null);
   const [resData, setResData] = useState({});
   const [isUploading, setIsUploading] = useState(false);

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
         const response = await fetch("http://localhost:3000/api/v1/upload/file", {
            method: "POST",
            body: formData,
         });

         const data = await response.json();
         if (response.ok) {
            
            setIsUploading(true);

            // const newRes = await fetch("http://localhost:3000/api/v1/completion/create", {
            //    method: "POST",
            //    headers: {
            //       "Content-Type": "application/json",
            //    },
            //    body: JSON.stringify({
            //       files: data,
            //    }),
            // });

            // const result = await newRes.json();

            // if (newRes.ok) {
            //    setResData(result);
            // }
         }
      } catch (error) {
         console.error("Error uploading file:", error);
      }
   };

   return (
      <div className="bg-gradient-to-br from-black to-purple/5 h-screen flex items-center justify-center font-poppins text-lightGray w-full relative flex-col">
         <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center bg-[url('./intersect.png')]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 line-clamp-6">
               Optimize your <span className="text-purple">CV!!</span>
               <br />
               with <span className="text-purple">Optimal CV</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto text-gray">
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
                     className="bg-purple hover:bg-purple/90 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out flex items-center group"
                     type="submit"
                  >
                     Upload
                     <CloudUpload className="ml-2 h-5 w-5 -rotate-45 group-hover:translate-x-1 transition duration-300 ease-in-out group-hover:rotate-0" />
                  </button>
               </form>
            </div>
         </div>

         {resData && Object.keys(resData).length > 0 && <Audit resData={resData} />}
      </div>
   );
};

export default HeroSection;
