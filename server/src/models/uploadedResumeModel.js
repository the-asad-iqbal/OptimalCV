import mongoose from "mongoose";

const uploadedResumeSchema = new mongoose.Schema({
   name: String,
   path: String,
});
