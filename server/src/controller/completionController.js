import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { SchemaType } from "@google/generative-ai";
import { response } from "express";

import { pdfToLink } from "../utils/pdfToLink";

const createCompletion = async (req, res) => {
   const { files } = req.body;
   if (!files) return res.status(400).json({ error: "No files provided" });

   const genAI = new GoogleGenerativeAI(process.env.API_KEY);

   const mainResponse = {};

   const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: `You are an expert in resume analysis. You will receive a resume and respond with a detailed audit, including deep-dive analysis into each section of the resume, such as strengths, weaknesses, suggestions for improvement, and a score.`,
      generationConfig: {
         responseMimeType: "application/json",
         responseSchema: {
            type: SchemaType.OBJECT,
            properties: {
               isResume: { type: SchemaType.BOOLEAN },
               personalInfo: {
                  type: SchemaType.OBJECT,
                  properties: {
                     name: {
                        type: SchemaType.OBJECT,
                        properties: {
                           isAvailable: { type: SchemaType.BOOLEAN },
                           value: { type: SchemaType.STRING },
                        },
                     },
                     email: {
                        type: SchemaType.OBJECT,
                        properties: {
                           isAvailable: { type: SchemaType.BOOLEAN },
                           value: { type: SchemaType.STRING },
                        },
                     },
                     phone: {
                        type: SchemaType.OBJECT,
                        properties: {
                           isAvailable: { type: SchemaType.BOOLEAN },
                           value: { type: SchemaType.STRING },
                        },
                     },
                     location: {
                        type: SchemaType.OBJECT,
                        properties: {
                           isAvailable: { type: SchemaType.BOOLEAN },
                           value: { type: SchemaType.STRING },
                        },
                     },
                     linkedIn: {
                        type: SchemaType.OBJECT,
                        properties: {
                           isAvailable: { type: SchemaType.BOOLEAN },
                           value: { type: SchemaType.STRING },
                        },
                     },
                     github: {
                        type: SchemaType.OBJECT,
                        properties: {
                           isAvailable: { type: SchemaType.BOOLEAN },
                           value: { type: SchemaType.STRING },
                        },
                     },
                     role: {
                        type: SchemaType.OBJECT,
                        properties: {
                           isAvailable: { type: SchemaType.BOOLEAN },
                           value: { type: SchemaType.STRING },
                        },
                     },
                     experience: {
                        type: SchemaType.OBJECT,
                        properties: {
                           isAvailable: { type: SchemaType.BOOLEAN },
                           value: { type: SchemaType.STRING },
                        },
                     },
                  },
               },
               content: {
                  type: SchemaType.OBJECT,
                  properties: {
                     atsParseScore: { type: SchemaType.NUMBER },
                     repeatingWords: {
                        type: SchemaType.ARRAY,
                        items: {
                           type: SchemaType.OBJECT,
                           properties: {
                              word: { type: SchemaType.STRING },
                              count: { type: SchemaType.NUMBER },
                           },
                        },
                     },
                     spellAndGrammarErrors: {
                        type: SchemaType.ARRAY,
                        items: {
                           type: SchemaType.OBJECT,
                           properties: {
                              word: { type: SchemaType.STRING },
                              suggestion: { type: SchemaType.STRING },
                              context: { type: SchemaType.STRING },
                           },
                        },
                     },
                     quantifiableAchievements: {
                        type: SchemaType.ARRAY,
                        items: {
                           type: SchemaType.OBJECT,
                           properties: {
                              name: { type: SchemaType.STRING },
                              summary: { type: SchemaType.STRING },
                              impact: { type: SchemaType.STRING },
                           },
                        },
                     },
                     sentenceLength: {
                        type: SchemaType.OBJECT,
                        properties: {
                           averageLength: { type: SchemaType.NUMBER },
                           longSentences: { type: SchemaType.NUMBER },
                           shortSentences: { type: SchemaType.NUMBER },
                           suggestedImprovements: {
                              type: SchemaType.ARRAY,
                              items: { type: SchemaType.STRING },
                           },
                        },
                     },
                     industryKeywords: {
                        type: SchemaType.ARRAY,
                        items: {
                           type: SchemaType.OBJECT,
                           properties: {
                              keyword: { type: SchemaType.STRING },
                              isPresent: { type: SchemaType.BOOLEAN },
                              relevanceScore: { type: SchemaType.NUMBER },
                           },
                        },
                     },
                  },
               },
               skills: {
                  type: SchemaType.OBJECT,
                  properties: {
                     hardSkills: {
                        type: SchemaType.ARRAY,
                        items: {
                           type: SchemaType.OBJECT,
                           properties: {
                              skill: { type: SchemaType.STRING },
                              relevanceScore: { type: SchemaType.NUMBER },
                           },
                        },
                     },
                     softSkills: {
                        type: SchemaType.ARRAY,
                        items: {
                           type: SchemaType.OBJECT,
                           properties: {
                              skill: { type: SchemaType.STRING },
                              relevanceScore: { type: SchemaType.NUMBER },
                           },
                        },
                     },
                     skillMatchScore: { type: SchemaType.NUMBER },
                     missingCriticalSkills: {
                        type: SchemaType.ARRAY,
                        items: { type: SchemaType.STRING },
                     },
                  },
               },
            },
            required: ["personalInfo", "content", "skills"],
         },
      },
   });

   const model2 = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: `You are an expert in resume analysis. You will receive a resume and respond with a detailed audit, including deep-dive analysis into each section of the resume, such as strengths, weaknesses, suggestions for improvement, and a score.`,
      generationConfig: {
         responseMimeType: "application/json",
         responseSchema: {
            type: SchemaType.OBJECT,
            properties: {
               resumeSections: {
                  type: SchemaType.OBJECT,
                  properties: {
                     contactInformation: {
                        type: SchemaType.OBJECT,
                        properties: {
                           isPresent: { type: SchemaType.BOOLEAN },
                           completeness: { type: SchemaType.NUMBER },
                        },
                     },
                     essentialSections: {
                        type: SchemaType.ARRAY,
                        items: {
                           type: SchemaType.OBJECT,
                           properties: {
                              section: { type: SchemaType.STRING },
                              isPresent: { type: SchemaType.BOOLEAN },
                              quality: { type: SchemaType.STRING },
                           },
                        },
                     },
                     sectionLength: {
                        type: SchemaType.ARRAY,
                        items: {
                           type: SchemaType.OBJECT,
                           properties: {
                              section: { type: SchemaType.STRING },
                              wordCount: { type: SchemaType.NUMBER },
                              isAppropriate: { type: SchemaType.BOOLEAN },
                           },
                        },
                     },
                     sectionOrder: {
                        type: SchemaType.ARRAY,
                        items: {
                           type: SchemaType.OBJECT,
                           properties: {
                              section: { type: SchemaType.STRING },
                              isCorrectOrder: { type: SchemaType.BOOLEAN },
                              suggestedPosition: { type: SchemaType.NUMBER },
                           },
                        },
                     },
                     missingImportantSections: {
                        type: SchemaType.ARRAY,
                        items: { type: SchemaType.STRING },
                     },
                  },
               },
               style: {
                  type: SchemaType.OBJECT,
                  properties: {
                     resumeDesign: {
                        type: SchemaType.OBJECT,
                        properties: {
                           isGoodDesign: { type: SchemaType.BOOLEAN },
                           reason: { type: SchemaType.STRING },
                           suggestedImprovements: {
                              type: SchemaType.ARRAY,
                              items: { type: SchemaType.STRING },
                           },
                        },
                     },
                     emailAddress: {
                        type: SchemaType.OBJECT,
                        properties: {
                           isGoodEmailDesign: { type: SchemaType.BOOLEAN },
                           suggestion: { type: SchemaType.STRING },
                        },
                     },
                     activeVoiceUsage: {
                        type: SchemaType.OBJECT,
                        properties: {
                           isActiveVoice: { type: SchemaType.BOOLEAN },
                           percentageActive: { type: SchemaType.NUMBER },
                        },
                     },
                     buzzwordsAndCliches: {
                        type: SchemaType.OBJECT,
                        properties: {
                           hasBuzzword: { type: SchemaType.BOOLEAN },
                           buzzwords: {
                              type: SchemaType.ARRAY,
                              items: { type: SchemaType.STRING },
                           },
                           suggestions: {
                              type: SchemaType.ARRAY,
                              items: { type: SchemaType.STRING },
                           },
                        },
                     },
                     fontAndFormatting: {
                        type: SchemaType.OBJECT,
                        properties: {
                           isConsistentFormatting: { type: SchemaType.BOOLEAN },
                           readabilityScore: { type: SchemaType.NUMBER },
                        },
                     },
                     resumeLength: {
                        type: SchemaType.OBJECT,
                        properties: {
                           pages: { type: SchemaType.NUMBER },
                           isTooLong: { type: SchemaType.BOOLEAN },
                           suggestedLength: { type: SchemaType.STRING },
                        },
                     },
                     actionVerbAnalysis: {
                        type: SchemaType.OBJECT,
                        properties: {
                           hasActionVerbs: { type: SchemaType.BOOLEAN },
                           verbFrequency: { type: SchemaType.NUMBER },
                           uniqueActionVerbs: {
                              type: SchemaType.ARRAY,
                              items: { type: SchemaType.STRING },
                           },
                        },
                     },
                     bulletPointUsage: {
                        type: SchemaType.OBJECT,
                        properties: {
                           hasBulletPoints: { type: SchemaType.BOOLEAN },
                           count: { type: SchemaType.NUMBER },
                           averageLength: { type: SchemaType.NUMBER },
                           suggestedImprovements: { type: SchemaType.STRING },
                        },
                     },
                     whitespaceBalance: {
                        type: SchemaType.OBJECT,
                        properties: {
                           isWellBalanced: { type: SchemaType.BOOLEAN },
                           suggestion: { type: SchemaType.STRING },
                        },
                     },
                  },
               },
               atsCompliance: {
                  type: SchemaType.OBJECT,
                  properties: {
                     isATSCompliant: { type: SchemaType.BOOLEAN },
                     reason: { type: SchemaType.STRING },
                     complianceScore: { type: SchemaType.NUMBER },
                     suggestedImprovements: {
                        type: SchemaType.ARRAY,
                        items: { type: SchemaType.STRING },
                     },
                  },
               },
               readabilityScore: {
                  type: SchemaType.OBJECT,
                  properties: {
                     score: { type: SchemaType.NUMBER },
                     interpretation: { type: SchemaType.STRING },
                  },
               },
               overallScore: {
                  type: SchemaType.OBJECT,
                  properties: {
                     score: { type: SchemaType.NUMBER },
                     interpretation: { type: SchemaType.STRING },
                  },
               },
            },
            required: [
               "resumeSections",
               "style",
               "atsCompliance",
               "readabilityScore",
               "overallScore",
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


   const prompt = `Analyze the following resume as an expert in resume analysis. Resume/CV is added as an image. Always response in json.

      Some crucail things to keep in mind.
      
      Here are key points an AI should keep in mind when auditing a resume to ensure it aligns with best practices:
      1. Structure and Formatting
      Clear Sections: Ensure the resume is divided into recognizable sections (e.g., Contact Info, Summary, Skills, Experience, Education).
      Consistency: Fonts, text size, and spacing should be uniform throughout the resume.
      Length: Ideally, a resume should be 1-2 pages long, depending on experience.
      Use of Bullet Points: Employment and experience details should use bullet points for readability.
      Alignment: Text alignment should be consistent (e.g., left-aligned headers, indented bullet points).
      2. Content Quality
      Relevance: Verify that content focuses on skills and experience relevant to the job the candidate is applying for.
      Action Words: Check for the use of action verbs (e.g., "managed," "developed," "led") to describe achievements.
      Quantifiable Results: Ensure that achievements are quantified (e.g., "increased sales by 20%" rather than "improved sales").
      Conciseness: Content should be concise, with unnecessary or outdated information removed.
      No Overly Technical Terms: Avoid jargon or overly technical language that could confuse non-expert readers.
      3. Grammar and Spelling
      Error-Free: No spelling or grammar mistakes.
      Professional Language: Ensure language is professional and free from informal terms or slang.
      4. Customization and Keywords
      Tailoring for Specific Jobs: The resume should be customized for the job or industry the candidate is targeting.
      ATS Optimization: Verify if the resume contains relevant keywords that match the job description for Applicant Tracking Systems (ATS) compatibility.
      Avoidance of Graphics: Ensure minimal use of graphics or images, as these may not be parsed well by ATS.
      5. Skills and Competencies
      Core Skills: Ensure the resume highlights the most important and relevant skills (e.g., technical, soft, or domain-specific).
      Balanced Skillset: Check for a balance between hard skills (e.g., coding, design) and soft skills (e.g., leadership, communication).
      Updated Skills: Ensure the candidate’s skills reflect current trends and technologies in their field.
      6. Experience Section
      Chronological Order: Ensure the experience section lists jobs in reverse chronological order.
      Job Titles: Ensure job titles are clear and properly reflect the role.
      Impactful Descriptions: Check whether job descriptions highlight the candidate's impact rather than just duties.
      7. Education Section
      Relevant Education: Verify the inclusion of relevant degrees and certifications, especially for roles requiring formal education.
      Date Consistency: Ensure that dates are listed and consistent.
      8. Contact Information
      Updated Information: Ensure the resume includes an updated phone number, email address, and optionally, a LinkedIn profile.
      No Personal Details: Personal details like marital status, nationality, or gender should generally be omitted, unless required.
      9. Achievements and Certifications
      Certifications: Ensure that industry-relevant certifications are included and up-to-date.
      Achievements: Look for standout achievements that are related to the field.
      10. Portfolio or Links (If Applicable)
      Portfolio: For roles requiring visual or technical work, ensure links to an online portfolio or GitHub are included.
      Clickable Links: Ensure all URLs provided in the resume are clickable and correctly formatted.
      By applying these points, an AI system can effectively audit a resume to ensure it's optimized for both human and machine review.
      
      `;

   try {
      const result = await model.generateContent([prompt, ...imagesParts]);
      const firstPart = JSON.parse(result.response.text());

      if (firstPart.isResume === false) {
         return res.status(400).json({ error: "Are you crazy? Upload a resume!" });
      }

      const result2 = await model2.generateContent([prompt, ...imagesParts]);

      const secondPart = JSON.parse(result2.response.text());

      return res.status(200).json({
         res: { ...firstPart, ...secondPart },
      });
   } catch (error) {
      return res.status(400).json({ error: error?.message || error });
   }
};

export { createCompletion };
