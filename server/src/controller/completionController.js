import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { SchemaType } from "@google/generative-ai";
import { response } from "express";

const createCompletion = async (req, res) => {
   const { files } = req.body;

   const genAIResponseSchema = {
      response: {
         role: {
            type: "string",
            description: "The role of the user like a web developer etc.",
         },
         userName: {
            type: "string",
            description: "The name of the user mentioned in resume.",
         },
         resumeWeakPoints: [
            {
               type: "string",
            },
         ],
      },
   };

   const genAI = new GoogleGenerativeAI(process.env.API_KEY);
   console.log(process.env.API_KEY);

   const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: `You are an expert in resume analysis. You will receive a resume and respond with a detailed audit, including deep-dive analysis into each section of the resume, such as strengths, weaknesses, suggestions for improvement, and a score.`,
      generationConfig: {
         responseMimeType: "application/json",
         responseSchema: {
            type: SchemaType.OBJECT,
            properties: {
               role: { type: SchemaType.STRING },
               userName: { type: SchemaType.STRING },
               isGoodResumeLayout: {
                  type: SchemaType.OBJECT,
                  properties: {
                     score: { type: SchemaType.NUMBER },
                     scoreOutOf: { type: SchemaType.NUMBER },
                     reason: { type: SchemaType.STRING },
                     isGoodLayout: { type: SchemaType.BOOLEAN },
                  },
               },
               strengths: {
                  type: SchemaType.ARRAY,
                  items: {
                     type: SchemaType.OBJECT,
                     properties: {
                        section: { type: SchemaType.STRING }, // e.g., "Experience", "Skills"
                        details: { type: SchemaType.STRING }, // Detailed explanation
                     },
                  },
               },
               weaknesses: {
                  type: SchemaType.ARRAY,
                  items: {
                     type: SchemaType.OBJECT,
                     properties: {
                        section: { type: SchemaType.STRING },
                        details: { type: SchemaType.STRING },
                        impact: { type: SchemaType.STRING }, // How this affects the overall impression
                     },
                  },
               },
               suggestions: {
                  type: SchemaType.ARRAY,
                  items: {
                     type: SchemaType.OBJECT,
                     properties: {
                        section: { type: SchemaType.STRING },
                        action: { type: SchemaType.STRING }, // Suggested action or improvement
                        benefit: { type: SchemaType.STRING }, // How this will improve the resume
                     },
                  },
               },
               overallScore: {
                  type: SchemaType.OBJECT,
                  properties: {
                     score: { type: SchemaType.NUMBER },
                     scoreOutOf: { type: SchemaType.NUMBER },
                     interpretation: { type: SchemaType.STRING }, // e.g., "Excellent", "Needs Improvement"
                  },
               },
               sectionScores: {
                  type: SchemaType.OBJECT,
                  properties: {
                     experience: {
                        type: SchemaType.OBJECT,
                        properties: {
                           score: { type: SchemaType.NUMBER },
                           scoreOutOf: { type: SchemaType.NUMBER },
                           commentary: { type: SchemaType.STRING },
                        },
                     },
                     skills: {
                        type: SchemaType.OBJECT,
                        properties: {
                           score: { type: SchemaType.NUMBER },
                           scoreOutOf: { type: SchemaType.NUMBER },
                           commentary: { type: SchemaType.STRING },
                        },
                     },
                     education: {
                        type: SchemaType.OBJECT,
                        properties: {
                           score: { type: SchemaType.NUMBER },
                           scoreOutOf: { type: SchemaType.NUMBER },
                           commentary: { type: SchemaType.STRING },
                        },
                     },
                     formatting: {
                        type: SchemaType.OBJECT,
                        properties: {
                           score: { type: SchemaType.NUMBER },
                           scoreOutOf: { type: SchemaType.NUMBER },
                           commentary: { type: SchemaType.STRING },
                        },
                     },
                  },
               },
               summary: {
                  type: SchemaType.OBJECT,
                  properties: {
                     overallImpression: { type: SchemaType.STRING },
                     keyTakeaways: { type: SchemaType.STRING }, // Summary of key points
                     nextSteps: { type: SchemaType.STRING }, // Recommendations for further action
                  },
               },
            },
            required: [
               "role",
               "userName",
               "isGoodResumeLayout",
               "strengths",
               "weaknesses",
               "suggestions",
               "overallScore",
               "sectionScores",
               "summary",
            ],
         },
      },
   });

   function fileToGenerativePart(path, mimeType) {
      return {
         inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType,
         },
      };
   }

   const imagesParts = files.map((file) => {
      return fileToGenerativePart(file.path, file.mimetype);
   });

   const prompt =
      "Analyze the following resume as an expert in resume analysis. Resume/CV is added as an image. Always response in json.";
   const result = await model.generateContent([prompt, ...imagesParts]);
   console.log("------------------SimpleTextFormat----------------------");
   console.log("");
   console.log(result.response.text());

   console.log("-------------------JSONFormat----------------------");
   console.log("");
   console.log("");
   console.log(result.response);

   return res.status(200).json([files, { res: result.response }]);
};

export { createCompletion };
