import { UploadedResume } from "../models/uploadedResumeModel.js";

const createResume = async (req, res) => {
   try {
      const { files } = await req.body;

      const resume = await UploadedResume.create({
         files,
      });

      return res.status(200).json({ id: resume._id });
   } catch (error) {
      return res.status(500).json({ error: error?.message || error });
   }
};

export { createResume };
