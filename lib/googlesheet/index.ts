import { GoogleSpreadsheet } from "google-spreadsheet";
import { DataSubmission } from "models/data_submission";
import dayjs from "dayjs";
import SHA256 from "crypto-js/sha256";
let isConnected = false;

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

export const COLUMNS = [
  "Conversion funnel",
  "Ref url",
  "Form data",
  "Customer name",
  "Customer phone",
  "Created date",
];

const encrypt = (text: string) => {
  return SHA256(text).toString();
};

export const insertDataToGooglesheet = async (input: DataSubmission) => {
  try {
    const doc = await connectGooglesheet();
    if (!doc) return;
    const googleSheet =
      doc.sheetsByIndex[Number(process.env.GOOGLE_SHEET_INDEX || 0)];
    const rows = await googleSheet.getRows();
    const { conversion_funnel, ref_url, data, customer_name, customer_phone } =
      input;
    const newFormData = encrypt(`${conversion_funnel}${data}`);

    const newRowData = {
      [COLUMNS[0]]: conversion_funnel,
      [COLUMNS[1]]: ref_url,
      [COLUMNS[2]]: data,
      [COLUMNS[3]]: customer_name,
      [COLUMNS[4]]: customer_phone,
      [COLUMNS[5]]: dayjs().format("MM/DD/YYYY hh:mm"),
    } as { [header: string]: string | number | boolean };

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const rowData = encrypt(`${row[COLUMNS[0]]}${row[COLUMNS[2]]}`);
      if (rowData === newFormData) {
        return;
      }
    }

    await googleSheet.addRow(newRowData);
  } catch (error) {
    console.log("insert googlesheet error");
    console.log(error);
  }
};

export const connectGooglesheet = async () => {
  try {
    if (!isConnected) {
      await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || "",
        private_key: process.env.GOOGLE_PRIVATE_KEY || "",
      });
      await doc.loadInfo();
      isConnected = true;
    }

    const sheet =
      doc.sheetsByIndex[Number(process.env.GOOGLE_SHEET_INDEX || 0)];

    if (!sheet.headerValues || sheet.headerValues?.length <= 0) {
      await sheet.setHeaderRow(COLUMNS);
    }
    return doc;
  } catch (error) {
    return null;
  }
};

export default connectGooglesheet;
