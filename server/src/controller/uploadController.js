const upload = async (req, res) => {
   try {
      const file = req.file;
      return res.status(200).json(file);
   } catch (error) {
      return res.status(500).json(error);
   }
};
