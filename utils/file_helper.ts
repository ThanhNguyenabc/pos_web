import fs from "fs";
export const questionnairePath = "form_data/questionnaire";
export const freePOSPath = "form_data/get_freepos";
export const contactPath = "form_data/contact";
export const requestDemoPath = "form_data/request_demo";
export const subscribePath = "form_data/subscribe blog";
export const breadMePath = "form_data/breadme";
export const agentPath = "form_data/agent";

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
