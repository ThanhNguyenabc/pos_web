import fs from "fs";
import { Response, Request } from "express";
import { QuestionnaireContact } from "models/questionnaire_contact";
import {
  agentPath,
  breadMePath,
  contactPath,
  createFolder,
  freePOSPath,
  questionnairePath,
  requestDemoPath,
  subscribePath,
} from "../utils/FileUtil";
import { BusinessTypeMapper } from "../models/business_mapper";
import POSSuggestion from "../data/pos_suggestion.json";
import ProductData from "../data/products.json";
import { BaseResponse } from "models/base_response";
import { RequestDemoContact } from "models/request_demo_contact";
import { FreePOSContact } from "models/freepos_contact";
import { ContactInfo } from "models/contact_info";
import { BreadMeContact } from "models/breadme_contact";

export const uploadQuestionnaire = async (
  req: Request,
  res: Response<BaseResponse>
) => {
  const {
    business,
    haveSaleSystem,
    numberOfStations,
    numberOfHandheld,
    onDiscountProgram,
    contact,
  } = req.body as QuestionnaireContact;
  const { name, phone, email } = contact;

  await createFolder(questionnairePath).then((path) => {
    const fileName = `${path}/${name?.toLowerCase()}-${phone}.txt`;
    let content = [
      `Business: ${business}`,
      `Own a point sale system: ${haveSaleSystem}`,
      `The nubmer of station: ${numberOfStations}`,
      `The nubmer of handheld: ${numberOfHandheld}`,
      `On the cash discount program: ${onDiscountProgram}\n`,
      `Customer information`,
      `Customer name: ${name}`,
      `Customer email: ${email}`,
      `Customer phone number: ${phone}`,
    ];
    fs.writeFile(fileName, content.join("\n"), (err) => {});
  });

  const suggestKey = `${
    BusinessTypeMapper[business as keyof typeof BusinessTypeMapper]
  },${haveSaleSystem.toLowerCase()},${numberOfStations},${numberOfHandheld},${onDiscountProgram.toLowerCase()}`;

  const suggestedProduct =
    POSSuggestion[suggestKey as keyof typeof POSSuggestion].products || [];

  let result: Array<object> = [];

  ProductData.forEach((item) => {
    if (suggestedProduct.includes(item.id)) {
      result.push(item);
    }
  });
  return res.status(200).json({ data: result });
};

export const requestDemoPOS = async (
  req: Request,
  res: Response<BaseResponse>
) => {
  const { contact, typeBusiness } = req.body as RequestDemoContact;
  const { name, phone, email } = contact;
  await createFolder(requestDemoPath).then((path) => {
    const fileName = `${path}/${name?.toLowerCase()}-${phone}.txt`;
    let content = [
      `Business type: ${typeBusiness}`,
      `Personal information`,
      `Customer name: ${name}`,
      `Customer email: ${email}`,
      `Customer phone number: ${phone}`,
    ];
    fs.writeFile(fileName, content.join("\n"), (err) => {});
  });

  res.status(200).json({ data: true });
};

export const subscribeBlog = async (
  req: Request,
  res: Response<BaseResponse>
) => {
  const { email } = req.body;
  await createFolder(subscribePath).then((path) => {
    const fileName = `${path}/${email?.toLowerCase()}.txt`;
    let content = [`Customer email: ${email}`];
    fs.writeFile(fileName, content.join("\n"), (err) => {});
  });

  res.status(200).json({ data: true });
};

export const registerFreePOS = async (
  req: Request,
  res: Response<BaseResponse>
) => {
  const { businessContact, personalContact, creditCardVolume } =
    req.body as FreePOSContact;

  await createFolder(freePOSPath).then((path) => {
    const fileName = `${path}/${personalContact.name?.toLowerCase()}-${
      personalContact.phone
    }.txt`;
    let content = [
      `Credit card volume: ${creditCardVolume}`,
      `Business name: ${businessContact.name}`,
      `Business phone: ${businessContact.phone}`,
      `Personal information`,
      `Customer name: ${personalContact.name}`,
      `Customer email: ${personalContact.email}`,
      `Customer phone number: ${personalContact.phone}`,
    ];
    fs.writeFile(fileName, content.join("\n"), (err) => {});
  });

  return res.status(200).json({ data: true });
};

export const applyParter = async (
  req: Request,
  res: Response<BaseResponse>
) => {
  const { email, name, phone } = req.body as ContactInfo;

  await createFolder(agentPath).then((path) => {
    const fileName = `${path}/${name?.toLowerCase()}-${phone}.txt`;
    let content = [
      `Agent information`,
      `Agent name: ${name}`,
      `Agent email: ${email}`,
      `Agent phone number: ${phone}`,
    ];
    fs.writeFile(fileName, content.join("\n"), (err) => {});
  });
  return res.status(200).json({ data: true });
};

export const saveContactInfo = async (
  req: Request,
  res: Response<BaseResponse>
) => {
  const { phone, email, name, zipcode, message } = req.body as ContactInfo;

  await createFolder(contactPath).then((path) => {
    const fileName = `${path}/${name?.toLowerCase()}-${phone}.txt`;
    let content = [
      `Customer name: ${name}`,
      `Customer email: ${email}`,
      `Customer phone number: ${phone}`,
      `Zipcode: ${zipcode}`,
      `Message: ${message}`,
    ];
    fs.writeFile(fileName, content.join("\n"), (err) => {});
  });

  return res.status(200).json({ data: true });
};

export const applyBreadme = async (
  req: Request,
  res: Response<BaseResponse>
) => {
  const {
    contact,
    creditVolume,
    discountProgram,
    numberOfStations,
    currentUseSaleSystem,
  } = req.body as BreadMeContact;

  const { name, phone, email } = contact || {};

  await createFolder(breadMePath).then((path) => {
    const fileName = `${path}/${name?.toLowerCase()}-${phone}.txt`;
    let content = [
      `Credit volume: ${creditVolume}`,
      `On discount program: ${discountProgram}`,
      `Number of stations: ${numberOfStations}`,
      `Current use sale system: ${currentUseSaleSystem}`,
      `Customer name: ${name}`,
      `Customer email: ${email}`,
      `Customer phone number: ${phone}`,
    ];
    fs.writeFile(fileName, content.join("\n"), (err) => {});
  });

  res.status(200).json({ data: true });
};
