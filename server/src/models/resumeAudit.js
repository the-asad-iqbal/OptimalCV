import mongoose from "mongoose";

const resumeAuditSchema = new mongoose.Schema({
   content: {
      atsParseScore: {
         type: Number,
      },
      repetitingWords: [
         {
            word: String,
            count: Number,
         },
      ],
      spellAndGrammarErrors: [
         {
            word: String,
            count: Number,
         },
      ],
      quantifiableAchievements: [
         {
            name: String,
            summary: String,
         },
      ],
      sentenceLength: {
         averageLength: Number,
         longSentences: Number,
         shortSentences: Number,
      },
      industryKeywords: [
         {
            keyword: String,
            isPresent: Boolean,
         },
      ],
      languageTone: {
         isFormal: Boolean,
         tone: String,
      },
   },
   skills: {
      hardSkills: [
         {
            skill: String,
         },
      ],
      softSkills: [
         {
            skill: String,
         },
      ],
      skillMatchScore: {
         type: Number,
      },
   },
   resumeSections: {
      contactInformation: {
         type: Boolean,
      },
      essentialSections: [
         {
            section: String,
            isPresent: Boolean,
         },
      ],
      sectionLength: [
         {
            section: String,
            wordCount: Number,
         },
      ],
      sectionOrder: [
         {
            section: String,
            isCorrectOrder: Boolean,
         },
      ],
   },
   style: {
      resumeDesign: {
         isGoodDesign: Boolean,
         reason: String,
      },
      emailAddress: {
         isGoodEmailDesign: Boolean,
      },
      activeVoiceUsage: {
         type: Boolean,
      },
      buzzwordsAndCliches: {
         hasBuzzword: Boolean,
         buzzword: String,
      },
      fontAndFormatting: {
         fontType: String,
         fontSize: Number,
         isConsistentFormatting: Boolean,
      },
      resumeLength: {
         pages: Number,
         isTooLong: Boolean,
      },
      actionVerbAnalysis: {
         hasActionVerbs: Boolean,
         verbFrequency: Number,
      },
      bulletPointUsage: {
         hasBulletPoints: Boolean,
         count: Number,
      },
   },
   atsCompliance: {
      isATSCompliant: Boolean,
      reason: String,
   },
   readabilityScore: {
      type: Number,
   },
});

const ResumeAudit = mongoose.model("ResumeAudit", resumeAuditSchema);

export { ResumeAudit };
