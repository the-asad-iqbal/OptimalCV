import mongoose from "mongoose";

const uploadedResumeSchema = new mongoose.Schema({
   files: {
      type: [
         {
            path: { type: String, required: true },
            mimetype: { type: String, required: true },
            pdfPath: { type: String },
         },
      ],
      required: true,
   },
});

const UploadedResume = mongoose.model("UploadedResume", uploadedResumeSchema);

export { UploadedResume };
