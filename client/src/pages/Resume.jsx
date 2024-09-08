import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ScoreGauge from "../components/ScoreGauge";
import Data from "../components/Data";

const Resume = () => {
   const { id } = useParams();
   const [resume, setResume] = useState([]);
   const [filesData, setFilesData] = useState([]);
   const [audit, setAudit] = useState({});

   const handleGetResume = async () => {
      try {
         const response = await fetch(`http://localhost:3000/api/v1/resume/get/${id}`);
         if (response.ok) {
            const data = await response.json();
            const { files } = data;

            // const res = await fetch(`http://localhost:3000/api/v1/completion/create`, {
            //    method: "POST",
            //    headers: {
            //       "Content-Type": "application/json",
            //    },
            //    body: JSON.stringify({ files }),
            // });

            // if (res.ok) {
            //    const data = await res.json();
            //    setAudit(data);
            // }
         }
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      handleGetResume();
   }, []);
   return (
      <div className="h-screen w-screen ">
         <div className="flex justify-between items-start max-w-7xl mx-auto ">
            <div className="max-w-[350px] w-full h-full min-h-screen flex flex-col items-center justify-center">
               <div className="w-full h-[calc(100vh-80px)] bg-[#E3E9F5] rounded-3xl max-w-[350px] p-10 shadow-lg mx-auto flex items-start justify-center">
                  <div>
                     <ScoreGauge score={86} />
                     <div></div>
                  </div>
               </div>
            </div>
            <div className="w-full h-full p-10">{audit && <Data data={audit} />}</div>
         </div>
      </div>
   );
};

export default Resume;
