import React, { useState } from "react";
import { CloudUploadIcon } from "lucide-react";

const HeroSection = () => {
   const [file, setFile] = useState(null);

   const handleFileChange = (e) => {
      setFile(e.target.files[0]);
   };

   const handleUpload = async (e) => {
      e.preventDefault();
      if (file) {
         console.log(file);
      }
   };

   return (
      <div className="bg-gradient-to-br from-black to-purple/5 h-screen flex items-center justify-center font-poppins text-lightGray w-full relative">
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
                     <CloudUploadIcon className="ml-2 h-5 w-5 -rotate-45 group-hover:translate-x-1 transition duration-300 ease-in-out group-hover:rotate-0" />
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default HeroSection;
