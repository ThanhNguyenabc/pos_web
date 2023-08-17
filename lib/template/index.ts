import { readFile } from "fs/promises";
import ejs from "ejs";

var cacheTemplate: string = "";
export const getEmailTemplate = async (name: string = "") => {
  let template = cacheTemplate;
  if (template.length == 0) {
    const temp = await readFile(
      `lib/template/request_demo_email_template.html`,
      "utf-8"
    );
    template = cacheTemplate = temp;
  }

  return ejs.render(template, { name: name.toUpperCase() });
};
