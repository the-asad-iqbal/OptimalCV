const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

function fileToGenerativePart(path, mimeType) {
   return {
      inlineData: {
         data: Buffer.from(fs.readFileSync(path)).toString("base64"),
         mimeType,
      },
   };
}

const prompt =
   "system: you are a dum machine that return response in json object only. prompt: Explain this image.";

const imagePart = fileToGenerativePart(`./public/jetpack.jpg`, "image/jpeg");

const result = await model.generateContent([prompt, imagePart]);
console.log(result.response.text());
