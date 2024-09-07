import mongoose from "mongoose";

const resumeAuditSchema = new mongoose.Schema({
   personalInfo: {
      name: {
         isAvailable: Boolean,
         value: String,
      },
      email: {
         isAvailable: Boolean,
         value: String,
      },
      phone: {
         isAvailable: Boolean,
         value: String,
      },
      location: {
         isAvailable: Boolean,
         value: String,
      },
      linkedIn: {
         isAvailable: Boolean,
         value: String,
      },
      github: {
         isAvailable: Boolean,
         value: String,
      },
      role: {
         isAvailable: Boolean,
         value: String,
      },
      experience: {
         isAvailable: Boolean,
         value: String,
      },
   },
   content: {
      atsParseScore: {
         type: Number,
      },
      repeatingWords: [
         {
            word: String,
            count: Number,
         },
      ],
      spellAndGrammarErrors: [
         {
            word: String,
            suggestion: String,
            context: String,
         },
      ],
      quantifiableAchievements: [
         {
            name: String,
            summary: String,
            impact: String,
         },
      ],
      sentenceLength: {
         averageLength: Number,
         longSentences: Number,
         shortSentences: Number,
         suggestedImprovements: [String],
      },
      industryKeywords: [
         {
            keyword: String,
            isPresent: Boolean,
            relevanceScore: Number,
         },
      ],
   },
   skills: {
      hardSkills: [
         {
            skill: String,
            relevanceScore: Number,
         },
      ],
      softSkills: [
         {
            skill: String,
            relevanceScore: Number,
         },
      ],
      skillMatchScore: {
         type: Number,
      },
      missingCriticalSkills: [String],
   },
   resumeSections: {
      contactInformation: {
         type: Boolean,
         completeness: Number,
      },
      essentialSections: [
         {
            section: String,
            isPresent: Boolean,
            quality: {
               type: String,
               enum: ["poor", "average", "good", "excellent"],
            },
         },
      ],
      sectionLength: [
         {
            section: String,
            wordCount: Number,
            isAppropriate: Boolean,
         },
      ],
      sectionOrder: [
         {
            section: String,
            isCorrectOrder: Boolean,
            suggestedPosition: Number,
         },
      ],
      missingImportantSections: [String],
   },
   style: {
      resumeDesign: {
         isGoodDesign: Boolean,
         reason: String,
         suggestedImprovements: [String],
      },
      emailAddress: {
         isGoodEmailDesign: Boolean,
         suggestion: String,
      },
      activeVoiceUsage: {
         type: Boolean,
         percentageActive: Number,
      },
      buzzwordsAndCliches: {
         hasBuzzword: Boolean,
         buzzwords: [String],
         suggestions: [String],
      },
      fontAndFormatting: {
         isConsistentFormatting: Boolean,
         readabilityScore: Number,
      },
      resumeLength: {
         pages: Number,
         isTooLong: Boolean,
         suggestedLength: String,
      },
      actionVerbAnalysis: {
         hasActionVerbs: Boolean,
         verbFrequency: Number,
         uniqueActionVerbs: [String],
      },
      bulletPointUsage: {
         hasBulletPoints: Boolean,
         count: Number,
         averageLength: Number,
         suggestedImprovements: String,
      },
      whitespaceBalance: {
         isWellBalanced: Boolean,
         suggestion: String,
      },
   },
   atsCompliance: {
      isATSCompliant: Boolean,
      reason: String,
      complianceScore: Number,
      suggestedImprovements: [String],
   },
   readabilityScore: {
      type: Number,
      interpretation: String,
   },
   overallScore: {
      type: Number,
      interpretation: String,
   },
});

const ResumeAudit = mongoose.model("ResumeAudit", resumeAuditSchema);

export { ResumeAudit };
