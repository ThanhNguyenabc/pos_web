import fs from "fs";
export const questionnairePath = "form_data/questionnaire";
export const freePOSPath = "form_data/freepos";
export const contactPath = "form_data/contact";
export const requestDemoPath  = "form_data/request_demo";

const createFolder = (path: string) =>
  new Promise((resolve, reject) => {
    if (fs.existsSync(path)) return resolve(path);
    fs.mkdir(
      path,
      {
        recursive: true,
      },
      (error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(path);
      }
    );
  });

export { createFolder };
