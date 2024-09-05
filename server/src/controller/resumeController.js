import { UploadedResume } from "../models/uploadedResumeModel.js";

const createResume = async (req, res) => {
   try {
      const { files } = await req.body;

      if (!files) return res.status(400).json({ error: "No files provided" });

      const resume = await UploadedResume.create({
         files,
      });

      if (!resume) return res.status(500).json({ error: "Failed to create resume" });

      return res.status(200).json({ id: resume._id });
   } catch (error) {
      return res.status(500).json({ error: error?.message || error });
   }
};

const getResume = async (req, res) => {
   try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: "No id provided" });

      const resume = await UploadedResume.findById(id);
      if (!resume) return res.status(404).json({ error: "Resume not found" });

      return res.status(200).json(resume);
   } catch (error) {
      return res.status(500).json({ error: error?.message || error });
   }
};

export { createResume, getResume };
