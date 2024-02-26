const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";


let HANDLER = "false";

module.exports = {
  //For Enabling Commands Like AUTO_STATUS_RED Type true For Desenabling Type false
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  //_________________________________________________________________________________________________________________________________
  LOGS: toBool(process.env.LOGS) || true,
  //_________________________________________________________________________________________________________________________________
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  //_________________________________________________________________________________________________________________________________
  AUTO_REACT: process.env.AUTO_REACT || 'false',
  //_________________________________________________________________________________________________________________________________
  AUTO_STATUS_READ: process.env.AUTO_STATUS_READ || 'false',
  //_________________________________________________________________________________________________________________________________
  SESSION_ID: process.env.SESSION_ID || "", //SUHAIL_15_08_02_24_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZUpuQUN3bmtpNU1PaVZXRFhiT05DdHJWNVQ3L25Qc3IrWHZEd2lUd2NHTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInZRNGw1ZHZlM1JST0hRODEyZU80d0dNS252NXNIa29hWFc4cDJyS284eWc9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiaU5LRnVuL3ZSNHBvbDJmTmd1ekZ6MkNKSUQzU09nbWYzZ3VVMWJFaXczdz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlNQM3RiNDFxRWphK3Qyd2VIWlluZUxGQk9QRHg1aFZZMG9lQWdBbTBMRGs9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwicUhzY1RxWnZ5RDg1UGFieU1FUFV1RkdvamFhTklKMVdacFdia2krZzNtZz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInpXQlFqeDZaZnRDRkNobUs4clN0YnQwcHZsMWVxODFtZWl4Mklma3lSeVE9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJLRzFnS1hlSWs2U1lBdWhkWWp2a3FFZWpiUEJGN2RqcmFrdlJPaW4wYzI4PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMkJjbjdaellQZFBPZTN4VG8wcVltN25nTGFVbEpyTXVMSHBZUDRvZmJ6QT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJYcncvZFRxOFpJdEhSMFN5eHdkajZyWFBNQm9ta0hGMkNWeWlyZ0xLTnNkSjJpMFVIZWdVU2JvOTlVL2JMMzRwUUtPQlJsbGJHOUxwWUluNE1uU3hoQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjU1LFwiYWR2U2VjcmV0S2V5XCI6XCJRYnU4YnV2VWNvbU4zQ0hWUTFBZ04vTHlicnMvZXNadHo0VVBjVHlWY3BzPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiV0xiU08ydzhSSy1XUEpXRHA1Zy1nQVwiLFwicGhvbmVJZFwiOlwiZTE0OGFlZDctZGQzNC00ZTIzLTg1NTMtZTliMDk0ODZhZmY1XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJoaWgwTTV1QmxJalc2eStodXdKbWcrUGRldVk9XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVFRUL3NNTDZoTSt4VlNnVjdOWXc5QXJuamRzPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIlMzQUxUMkVLXCIsXCJtZVwiOntcImlkXCI6XCIyNTQ3OTAwOTA4OTU6MTBAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiOTczOTcxOTE1MDQwOTU6MTBAbGlkXCIsXCJuYW1lXCI6XCJTaGF0dGFcIn0sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ1BTeWt2QURFUGVNNks0R0dBRT1cIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIlBrVjRWREJoOWpJOUVJREN2U0txcHk5ajNuNkNFRGpoMDdZbGhmSVEzRGM9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJ2cDYzTTBHV2xtbUNiYnRkdENsNGVBWU0vU1hZNmg3dWR6ZktPUTZQL00rdGhHd1NKd1plell1ZUl3bk90SHpSWHNmK1p4NmhYdlA2L0pLelZCY0FBUT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIndhRDdnaHpCbkRVSHdrS1NJQVhMa2k1MVlvMWtRQTlxejlNYXFhU2VHU2tJZ0JoWEtQd1V0YkhTb1VsbmtYWGtqWXh2TzJTNGpaWlpjT3hFYmJkcmhRPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNTQ3OTAwOTA4OTU6MTBAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCVDVGZUZRd1lmWXlQUkNBd3IwaXFxY3ZZOTUrZ2hBNDRkTzJKWVh5RU53M1wifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDg3ODczMjd9Igp9
  //_________________________________________________________________________________________________________________________________
  SUDO: process.env.SUDO || "919074692450",
  //_________________________________________________________________________________________________________________________________
  LANG: process.env.LANG || "EN",
  //_________________________________________________________________________________________________________________________________
  HANDLERS: process.env.HANDLER === "false" || '^[.]',
  //_________________________________________________________________________________________________________________________________
  RMBG_KEY: process.env.RMBG_KEY || false,
  //_________________________________________________________________________________________________________________________________
  BRANCH: "main",
  //_________________________________________________________________________________________________________________________________
  STICKER_DATA: "🎯𝙿𝚑𝚘𝚎𝚗𝚒𝚡-𝙼𝙳;𝙰𝚋𝚑𝚒𝚜𝚑𝚎𝚔 𝚂𝚞𝚛𝚎𝚜𝚑☘️",
  //_________________________________________________________________________________________________________________________________
  WELCOME_MSG: process.env.WELCOME_MSG || "Hi @user Welcome To @gname Total Members: @count",
  //_________________________________________________________________________________________________________________________________
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi @user It Was Nice Seeing you",
  //_________________________________________________________________________________________________________________________________
  DATABASE_URL: DATABASE_URL,
  //_________________________________________________________________________________________________________________________________
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  //_________________________________________________________________________________________________________________________________
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  //_________________________________________________________________________________________________________________________________
  OWNER_NAME: process.env.OWNER_NAME || "Abhishek Suresh",
  //_________________________________________________________________________________________________________________________________
  OWNER_NUMBER: process.env.OWNER_NUMBER || "919074692450",
  //_________________________________________________________________________________________________________________________________
  BOT_NAME: process.env.BOT_NAME || "Phoenix-MD",
  //_________________________________________________________________________________________________________________________________
  WORK_TYPE: process.env.WORK_TYPE || "public",
  //_________________________________________________________________________________________________________________________________
  BASE_URL: "https://abhi-api-7puv.onrender.com/",
  //_________________________________________________________________________________________________________________________________
  //Database
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
};
