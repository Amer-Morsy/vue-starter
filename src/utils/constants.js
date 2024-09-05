export const BASE_URL = "https://api-lxs-dev.adminssw.com";
// export const BASE_URL = "https://api-arab-exam.adminssw.com";
export const USER_PLATFORM_SESSION_VERSION_NUMBER = "1.0";
export const ESTABLISHMENT_TOKEN = "f92dfb74-9cb9-44ad-b5ad-a946c3d1018f"; // Ahmed Omar & AbdElKarim (06/04/2022)

export const API_DEFULT_TIMEOUT = 60000;
export const API_LONG_TIMEOUT = 86400000;

export const APPLANGUAGES = {
  default: "en-US",
  enUS: "en-US",
  arEG: "ar-EG",
};
export const APPTHEMES = {
  default: "dark",
  dark: "dark",
  light: "light",
};
export const APPLAYOUTS = {
  default: "auth",
  auth: "auth",
  dashboard: "dashboard",
  blank: "blank",
};

//#region VIEW_TYPES
export const VIEW_TYPES = {
  default: "table",
  table: "table",
  cards: "cards",
  list: ["table", "cards"],
};
//#endregion VIEW_TYPES

export const USER_MODEL_NAME = {
  Student: "Student",
  Parent: "Parent",
  Teacher: "Teacher",
  Employee: "Employee",
  MasterAdmin: "MasterAdmin",
  AdminsEgypt: "AdminsEgypt",
};

export const ESTABLISHMENTROLE_MODEL_NAME = {
  StudentEstablishmentsRole: "StudentEstablishmentsRole",
  EmployeeEstablishmentsRole: "EmployeeEstablishmentsRole",
  ParentEstablishmentsRole: "ParentEstablishmentsRole",
  TeacherEstablishmentsRole: "TeacherEstablishmentsRole",
  MasterAdminEstablishmentsRole: "MasterAdminEstablishmentsRole",
  AdminsEgyptEstablishmentsRole: "AdminsEgyptEstablishmentsRole",
};

export const LOGINCODE_MODEL_NAME = {
  StudentLoginCode: "StudentLoginCode",
  EmployeeLoginCode: "EmployeeLoginCode",
  ParentLoginCode: "ParentLoginCode",
  TeacherLoginCode: "TeacherLoginCode",
  MasterAdminLoginCode: "MasterAdminLoginCode",
  AdminsEgyptLoginCode: "AdminsEgyptLoginCode",
};

export const WALLETTRANSACTION_MODEL_NAME = {
  StudentUserWalletTransaction: "StudentUserWalletTransaction",
  EmployeeUserWalletTransaction: "EmployeeUserWalletTransaction",
  ParentUserWalletTransaction: "ParentUserWalletTransaction",
  TeacherUserWalletTransaction: "TeacherUserWalletTransaction",
  MasterAdminUserWalletTransaction: "MasterAdminUserWalletTransaction",
  AdminsEgyptUserWalletTransaction: "AdminsEgyptUserWalletTransaction",
};

export const STATUS = {
  SUCCESS: 200, // success operation
  INVALID_TOKEN: 498, //invalid token
  CATCH: 500, // catch
  NO_CONTENT: 204, // no data
  ERROR: 406, // validation
  VERSION: 306, // error version
  INVALID_LOGIN_CODE: 499, // error login code
  NO_INTERNET: 420, // no internet
  NO_RESPONSE: 421, // no response
};

//#region DefaultPages & Languages
export const DEFAULT_PAGES = {
  notLoggedIn: "Home",
  loggedIn: "QuestionBankTitles",
};

export const LANGUAGES = {
  list: ["ar-EG", "en-US", "und"],
  default: "en-US",
  arEG: "ar-EG",
  enUS: "en-US",
  und: "und",
  defaultCountryCode: "+20",
  defaultCountryCodeName: "EG",
};

export const PAGE_SIZE = 50;

//#region MEDIA
export const MEDIA_TYPE_TOKENS = {
  image: "MTT-1",
  video: "MTT-2",
  audio: "MTT-3",
  pdf: "MTT-4",
  excel: "MTT-5",
  word: "MTT-6",
  powerPoint: "MTT-7",
  other: "MTT-8",
};

export const MEDIA_EXTENSIONS = {
  image: [
    "jpeg",
    "jpg",
    "png",
    "gif",
    "tiff",
    "psd",
    "tiff",
    "eps",
    "ai",
    "aidd",
    "raw",
  ],
  video: [
    "mov",
    "avi",
    "wmv",
    "mp4",
    "m4p",
    "m4v",
    "ogg",
    "mpg",
    "mp2",
    "mpeg",
    "mpe",
    "mpv",
    "3gp",
    "flv",
  ],
  audio: ["aif", "cda", "mid", "mp3", "mpa", "ogg", "wav", "wma", "wpl"],
  pdf: ["pdf"],
  excel: ["xlsx", "xlsm", "xlsb", "xltx", "xls"],
  word: ["doc", "docm", "docx"],
  powerPoint: ["ppsx", "ppt", "pptm", "pptx"],
};
//#endregion MEDIA
