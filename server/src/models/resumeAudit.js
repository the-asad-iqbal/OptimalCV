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
         },
      ],
   },
});

const ResumeAudit = mongoose.model("ResumeAudit", resumeAuditSchema);

export { ResumeAudit };
