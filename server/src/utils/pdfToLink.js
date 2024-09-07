import fs from "fs";
import pdfjsLib from "pdfjs-dist"

async function pdfToLink(pdfPath) {
   const data = new Uint8Array(fs.readFileSync(pdfPath));
   const loadingTask = pdfjsLib.getDocument(data);
   const doc = await loadingTask.promise;
   const numPages = doc.numPages;
   const links = [];

   for (let i = 1; i <= numPages; i++) {
      const page = await doc.getPage(i);
      const annotations = await page.getAnnotations();
      const content = await page.getTextContent();
      const textItems = content.items;

      for (const annotation of annotations) {
         if (annotation.subtype === "Link" && annotation.url) {
            const quad = annotation.rect;
            let anchorText = "";

            // Find text items that overlap with the link annotation
            for (const textItem of textItems) {
               if (
                  textItem.transform[4] >= quad[0] &&
                  textItem.transform[4] <= quad[2] &&
                  textItem.transform[5] >= quad[1] &&
                  textItem.transform[5] <= quad[3]
               ) {
                  anchorText += textItem.str + " ";
               }
            }

            links.push({
               url: annotation.url,
               anchorText: anchorText.trim(),
               page: i,
            });
         }
      }
   }

   return links;
}

export { pdfToLink };
