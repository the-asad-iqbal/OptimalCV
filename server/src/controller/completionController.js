import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { SchemaType } from "@google/generative-ai";
import { response } from "express";

const createCompletion = async (req, res) => {
   const { files } = req.body;

   const genAI = new GoogleGenerativeAI(process.env.API_KEY);
   console.log(process.env.API_KEY);

   const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: `You are an expert in resume analysis. You will receive a resume and respond with a detailed audit, including deep-dive analysis into each section of the resume, such as strengths, weaknesses, suggestions for improvement, and scores.`,
      generationConfig: {
         responseMimeType: "application/json",
         responseSchema: {
            type: SchemaType.OBJECT,
            properties: {
               personalInfo: {
                  type: SchemaType.OBJECT,
                  properties: {
                     name: {
                        type: SchemaType.OBJECT,
                        properties: {
                           firstName: { type: SchemaType.STRING },
                           lastName: { type: SchemaType.STRING },
                           firstNameExists: { type: SchemaType.BOOLEAN },
                           lastNameExists: { type: SchemaType.BOOLEAN },
                        },
                        required: ["firstName", "lastName", "firstNameExists", "lastNameExists"],
                     },
                     role: { type: SchemaType.STRING },
                     contact: {
                        type: SchemaType.OBJECT,
                        properties: {
                           email: { type: SchemaType.STRING },
                           phone: { type: SchemaType.STRING },
                           emailExists: { type: SchemaType.BOOLEAN },
                           phoneExists: { type: SchemaType.BOOLEAN },
                        },
                        required: ["email", "emailExists", "phoneExists"],
                     },
                     location: { type: SchemaType.STRING },
                     links: {
                        type: SchemaType.OBJECT,
                        properties: {
                           linkedIn: { type: SchemaType.STRING },
                           portfolio: { type: SchemaType.STRING },
                           linkedInExists: { type: SchemaType.BOOLEAN },
                           portfolioExists: { type: SchemaType.BOOLEAN },
                        },
                     },
                  },
                  required: ["name", "role", "email", "emailExists", "phoneExists"],
               },
               visualAnalysis: {
                  type: SchemaType.OBJECT,
                  properties: {
                     overallDesign: {
                        type: SchemaType.OBJECT,
                        properties: {
                           score: { type: SchemaType.NUMBER },
                           scoreOutOf: { type: SchemaType.NUMBER },
                           comments: { type: SchemaType.STRING },
                           strengths: {
                              type: SchemaType.ARRAY,
                              items: { type: SchemaType.STRING },
                           },
                           weaknesses: {
                              type: SchemaType.ARRAY,
                              items: { type: SchemaType.STRING },
                           },
                        },
                     },
                     colorScheme: {
                        type: SchemaType.OBJECT,
                        properties: {
                           score: { type: SchemaType.NUMBER },
                           scoreOutOf: { type: SchemaType.NUMBER },
                           primaryColors: {
                              type: SchemaType.ARRAY,
                              items: { type: SchemaType.STRING },
                           },
                           suitability: { type: SchemaType.STRING },
                        },
                     },
                     typography: {
                        type: SchemaType.OBJECT,
                        properties: {
                           score: { type: SchemaType.NUMBER },
                           scoreOutOf: { type: SchemaType.NUMBER },
                           mainFont: { type: SchemaType.STRING },
                           headerFont: { type: SchemaType.STRING },
                           readability: { type: SchemaType.STRING },
                           consistency: { type: SchemaType.STRING },
                        },
                     },
                     layout: {
                        type: SchemaType.OBJECT,
                        properties: {
                           score: { type: SchemaType.NUMBER },
                           scoreOutOf: { type: SchemaType.NUMBER },
                           structure: { type: SchemaType.STRING },
                           whitespace: { type: SchemaType.STRING },
                           sectionOrganization: { type: SchemaType.STRING },
                        },
                     },
                     visualHierarchy: {
                        type: SchemaType.OBJECT,
                        properties: {
                           score: { type: SchemaType.NUMBER },
                           scoreOutOf: { type: SchemaType.NUMBER },
                           effectiveness: { type: SchemaType.STRING },
                           improvements: {
                              type: SchemaType.ARRAY,
                              items: { type: SchemaType.STRING },
                           },
                        },
                     },
                  },
               },
               contentAnalysis: {
                  type: SchemaType.OBJECT,
                  properties: {
                     professionalSummary: {
                        type: SchemaType.OBJECT,
                        properties: {
                           score: { type: SchemaType.NUMBER },
                           scoreOutOf: { type: SchemaType.NUMBER },
                           impactfulness: { type: SchemaType.STRING },
                           clarity: { type: SchemaType.STRING },
                           relevance: { type: SchemaType.STRING },
                           suggestions: {
                              type: SchemaType.ARRAY,
                              items: { type: SchemaType.STRING },
                           },
                        },
                     },
                     workExperience: {
                        type: SchemaType.OBJECT,
                        properties: {
                           overallScore: { type: SchemaType.NUMBER },
                           scoreOutOf: { type: SchemaType.NUMBER },
                           jobEntries: {
                              type: SchemaType.ARRAY,
                              items: {
                                 type: SchemaType.OBJECT,
                                 properties: {
                                    company: { type: SchemaType.STRING },
                                    position: { type: SchemaType.STRING },
                                    duration: { type: SchemaType.STRING },
                                    score: { type: SchemaType.NUMBER },
                                    scoreOutOf: { type: SchemaType.NUMBER },
                                    impactStatements: {
                                       type: SchemaType.ARRAY,
                                       items: {
                                          type: SchemaType.OBJECT,
                                          properties: {
                                             statement: { type: SchemaType.STRING },
                                             score: { type: SchemaType.NUMBER },
                                             scoreOutOf: { type: SchemaType.NUMBER },
                                             feedback: { type: SchemaType.STRING },
                                          },
                                       },
                                    },
                                    keywordsUsed: {
                                       type: SchemaType.ARRAY,
                                       items: { type: SchemaType.STRING },
                                    },
                                    improvementSuggestions: {
                                       type: SchemaType.ARRAY,
                                       items: { type: SchemaType.STRING },
                                    },
                                 },
                              },
                           },
                           overallFeedback: { type: SchemaType.STRING },
                        },
                     },
                     skills: {
                        type: SchemaType.OBJECT,
                        properties: {
                           score: { type: SchemaType.NUMBER },
                           scoreOutOf: { type: SchemaType.NUMBER },
                           technicalSkills: {
                              type: SchemaType.ARRAY,
                              items: {
                                 type: SchemaType.OBJECT,
                                 properties: {
                                    skill: { type: SchemaType.STRING },
                                    relevance: { type: SchemaType.STRING },
                                    level: { type: SchemaType.STRING },
                                 },
                              },
                           },
                           softSkills: {
                              type: SchemaType.ARRAY,
                              items: {
                                 type: SchemaType.OBJECT,
                                 properties: {
                                    skill: { type: SchemaType.STRING },
                                    contextProvided: { type: SchemaType.BOOLEAN },
                                 },
                              },
                           },
                           missingCriticalSkills: {
                              type: SchemaType.ARRAY,
                              items: { type: SchemaType.STRING },
                           },
                           skillPresentationSuggestions: { type: SchemaType.STRING },
                        },
                     },
                     education: {
                        type: SchemaType.OBJECT,
                        properties: {
                           score: { type: SchemaType.NUMBER },
                           scoreOutOf: { type: SchemaType.NUMBER },
                           degrees: {
                              type: SchemaType.ARRAY,
                              items: {
                                 type: SchemaType.OBJECT,
                                 properties: {
                                    degree: { type: SchemaType.STRING },
                                    institution: { type: SchemaType.STRING },
                                    year: { type: SchemaType.STRING },
                                    relevance: { type: SchemaType.STRING },
                                 },
                              },
                           },
                           certifications: {
                              type: SchemaType.ARRAY,
                              items: {
                                 type: SchemaType.OBJECT,
                                 properties: {
                                    name: { type: SchemaType.STRING },
                                    issuer: { type: SchemaType.STRING },
                                    year: { type: SchemaType.STRING },
                                    relevance: { type: SchemaType.STRING },
                                 },
                              },
                           },
                           educationSectionFeedback: { type: SchemaType.STRING },
                        },
                     },
                     projects: {
                        type: SchemaType.OBJECT,
                        properties: {
                           score: { type: SchemaType.NUMBER },
                           scoreOutOf: { type: SchemaType.NUMBER },
                           projectEntries: {
                              type: SchemaType.ARRAY,
                              items: {
                                 type: SchemaType.OBJECT,
                                 properties: {
                                    name: { type: SchemaType.STRING },
                                    description: { type: SchemaType.STRING },
                                    technologies: {
                                       type: SchemaType.ARRAY,
                                       items: { type: SchemaType.STRING },
                                    },
                                    impact: { type: SchemaType.STRING },
                                    relevance: { type: SchemaType.STRING },
                                 },
                              },
                           },
                           overallProjectsSectionFeedback: { type: SchemaType.STRING },
                        },
                     },
                  },
               },
               languageAndTone: {
                  type: SchemaType.OBJECT,
                  properties: {
                     score: { type: SchemaType.NUMBER },
                     scoreOutOf: { type: SchemaType.NUMBER },
                     clarity: { type: SchemaType.STRING },
                     consistency: { type: SchemaType.STRING },
                     grammar: { type: SchemaType.STRING },
                     tone: { type: SchemaType.STRING },
                     actionVerbs: {
                        type: SchemaType.ARRAY,
                        items: {
                           type: SchemaType.OBJECT,
                           properties: {
                              verb: { type: SchemaType.STRING },
                              frequency: { type: SchemaType.NUMBER },
                              impact: { type: SchemaType.STRING },
                           },
                        },
                     },
                     improvementSuggestions: {
                        type: SchemaType.ARRAY,
                        items: { type: SchemaType.STRING },
                     },
                  },
               },
               atsCompatibility: {
                  type: SchemaType.OBJECT,
                  properties: {
                     overallScore: { type: SchemaType.NUMBER },
                     scoreOutOf: { type: SchemaType.NUMBER },
                     keywordMatching: {
                        type: SchemaType.OBJECT,
                        properties: {
                           score: { type: SchemaType.NUMBER },
                           scoreOutOf: { type: SchemaType.NUMBER },
                           matchedKeywords: {
                              type: SchemaType.ARRAY,
                              items: { type: SchemaType.STRING },
                           },
                           missingKeywords: {
                              type: SchemaType.ARRAY,
                              items: { type: SchemaType.STRING },
                           },
                           keywordSuggestions: {
                              type: SchemaType.ARRAY,
                              items: { type: SchemaType.STRING },
                           },
                        },
                     },
                     formatting: {
                        type: SchemaType.OBJECT,
                        properties: {
                           score: { type: SchemaType.NUMBER },
                           scoreOutOf: { type: SchemaType.NUMBER },
                           issues: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } },
                           improvements: {
                              type: SchemaType.ARRAY,
                              items: { type: SchemaType.STRING },
                           },
                        },
                     },
                     fileType: {
                        type: SchemaType.OBJECT,
                        properties: {
                           detected: { type: SchemaType.STRING },
                           isRecommended: { type: SchemaType.BOOLEAN },
                           recommendation: { type: SchemaType.STRING },
                        },
                     },
                  },
               },
               industrySpecificAnalysis: {
                  type: SchemaType.OBJECT,
                  properties: {
                     industryAlignment: {
                        type: SchemaType.OBJECT,
                        properties: {
                           detectedIndustry: { type: SchemaType.STRING },
                           alignmentScore: { type: SchemaType.NUMBER },
                           scoreOutOf: { type: SchemaType.NUMBER },
                           keyIndustryTerms: {
                              type: SchemaType.ARRAY,
                              items: { type: SchemaType.STRING },
                           },
                           missingIndustryKeywords: {
                              type: SchemaType.ARRAY,
                              items: { type: SchemaType.STRING },
                           },
                        },
                     },
                     domainExpertise: {
                        type: SchemaType.ARRAY,
                        items: {
                           type: SchemaType.OBJECT,
                           properties: {
                              domain: { type: SchemaType.STRING },
                              expertiseLevel: { type: SchemaType.STRING },
                              evidenceInResume: { type: SchemaType.STRING },
                           },
                        },
                     },
                     industryTrends: {
                        type: SchemaType.ARRAY,
                        items: {
                           type: SchemaType.OBJECT,
                           properties: {
                              trend: { type: SchemaType.STRING },
                              presenceInResume: { type: SchemaType.STRING },
                              suggestionToIncorporate: { type: SchemaType.STRING },
                           },
                        },
                     },
                     overallIndustrySpecificFeedback: { type: SchemaType.STRING },
                  },
               },
               overallAssessment: {
                  type: SchemaType.OBJECT,
                  properties: {
                     score: { type: SchemaType.NUMBER },
                     scoreOutOf: { type: SchemaType.NUMBER },
                     interpretation: { type: SchemaType.STRING },
                     keyStrengths: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } },
                     criticalWeaknesses: {
                        type: SchemaType.ARRAY,
                        items: { type: SchemaType.STRING },
                     },
                     uniqueSellingPoints: {
                        type: SchemaType.ARRAY,
                        items: { type: SchemaType.STRING },
                     },
                  },
               },
               actionableSuggestions: {
                  type: SchemaType.ARRAY,
                  items: {
                     type: SchemaType.OBJECT,
                     properties: {
                        category: { type: SchemaType.STRING },
                        suggestion: { type: SchemaType.STRING },
                        priority: { type: SchemaType.STRING },
                        potentialImpact: { type: SchemaType.STRING },
                     },
                  },
               },
               competitivenessAssessment: {
                  type: SchemaType.OBJECT,
                  properties: {
                     overallCompetitiveness: { type: SchemaType.STRING },
                     standOutFeatures: {
                        type: SchemaType.ARRAY,
                        items: { type: SchemaType.STRING },
                     },
                     areasLaggingBehindPeers: {
                        type: SchemaType.ARRAY,
                        items: { type: SchemaType.STRING },
                     },
                     industryPositioning: { type: SchemaType.STRING },
                  },
               },
            },
            required: [
               "personalInfo",
               "visualAnalysis",
               "contentAnalysis",
               "languageAndTone",
               "atsCompatibility",
               "industrySpecificAnalysis",
               "overallAssessment",
               "actionableSuggestions",
               "competitivenessAssessment",
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
