import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Resume = () => {
   const { id } = useParams();
   const [resume, setResume] = useState({});

   const handleGetResume = async () => {
      try {
         const response = await fetch(`http://localhost:3000/api/v1/resume/get/${id}`);
         if (response.ok) {
            const data = await response.json();
            setResume(data);
            console.log(data);
         }
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      handleGetResume();
   }, []);
   return (
      <div className="text-white">
         <h1>{resume}</h1>
      </div>
   );
};

export default Resume;
