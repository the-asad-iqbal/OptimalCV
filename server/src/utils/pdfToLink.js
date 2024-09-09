import { PDFExtract } from "pdf.js-extract";
import fs from "fs";

const pdfToLink = (pdfPath) => {
   console.log(pdfPath);
   
   return new Promise((resolve, reject) => {
      const pdfExtract = new PDFExtract();
      const options = {};

      pdfExtract.extract(pdfPath, options, (err, data) => {
         if (err) {
            return reject(err);
         }

         const result = [];

         data.pages.forEach((page) => {
            if (page.links && page.links.length > 0) {
               page.links.forEach((link) => {
                  // Find the text around the link
                  const linkText = page.content
                     .filter((item) => item.str.includes(link))
                     .map((item) => item.str)
                     .join(" ");

                  result.push({ link, text: linkText });
               });
            }
         });

         resolve(result);
      });
   });
};

export { pdfToLink };
