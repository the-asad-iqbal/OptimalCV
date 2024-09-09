import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { SchemaType } from "@google/generative-ai";
import { response } from "express";

import { pdfToLink } from "../utils/pdfToLink.js";

const createCompletion = async (req, res) => {
   try {
      const { files } = req.body;
      console.log(files[0].pdfPath);

      if (!files) return res.status(400).json({ error: "No files provided" });

      let linksOfPdfs;
      if (files && files[0].pdfPath) {
         linksOfPdfs = await pdfToLink(files[0].pdfPath);
         linksOfPdfs = linksOfPdfs.map((item) => item.link).join("\n");

         if (!linksOfPdfs) {
            return res.status(500).json({ error: "Failed to generate links" });
         }
      }

      const genAI = new GoogleGenerativeAI(process.env.API_KEY);

      const model = genAI.getGenerativeModel({
         model: "gemini-1.5-flash",
         systemInstruction: `You are an expert in resume analysis. You will receive a resume and some links from the resume.You will respond with a detailed audit, including deep-dive analysis into each section of the resume. Add these And response back in json format as needed. Use these following links to fill out the Links section: ${
            linksOfPdfs != null || linksOfPdfs != undefined ? linksOfPdfs : ""
         }`,
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
                  Links: {
                     type: SchemaType.OBJECT,
                     properties: {
                        linkedIn: {
                           type: SchemaType.OBJECT,
                           properties: {
                              isAvailable: { type: SchemaType.BOOLEAN },
                              link: { type: SchemaType.STRING },
                           },
                        },
                        github: {
                           type: SchemaType.OBJECT,
                           properties: {
                              isAvailable: { type: SchemaType.BOOLEAN },
                              link: { type: SchemaType.STRING },
                           },
                        },
                        portofolio: {
                           type: SchemaType.OBJECT,
                           properties: {
                              isAvailable: { type: SchemaType.BOOLEAN },
                              link: { type: SchemaType.STRING },
                           },
                        },
                     },
                  },
                  content: {
                     type: SchemaType.OBJECT,
                     properties: {
                        atsParseScore: { type: SchemaType.NUMBER },
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
                                 scoreOutOf: { type: SchemaType.NUMBER },
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
                                 scoreOutOf: { type: SchemaType.NUMBER },
                              },
                           },
                        },
                        skillMatchScore: { type: SchemaType.NUMBER },
                        scoreOutOf: { type: SchemaType.NUMBER },
                        missingCriticalSkills: {
                           type: SchemaType.ARRAY,
                           items: { type: SchemaType.STRING },
                        },
                     },
                  },
               },
               required: ["isResume", "Links", "personalInfo", "content", "skills"],
            },
         },
      });

      const model2 = genAI.getGenerativeModel({
         model: "gemini-1.5-flash",
         systemInstruction: `You are an expert in resume analysis. You will receive a resume and respond with a detailed audit, including deep-dive analysis into each section of the resume, such as strengths, weaknesses, suggestions for improvement, and a score. Make sure the output is 100. Always provide score from 0 to 100.`,
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
                        scoreOutOf: { type: SchemaType.NUMBER },
                        interpretation: { type: SchemaType.STRING },
                     },
                  },
                  overallScore: {
                     type: SchemaType.OBJECT,
                     properties: {
                        score: { type: SchemaType.NUMBER },
                        scoreOutOf: { type: SchemaType.NUMBER },
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

      const prompt = `Analyze the following resume as an expert in resume analysis. Resume/CV is added as an image and links are here: ${linksOfPdfs}. `;

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
