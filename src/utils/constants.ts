export const LANGUAGES = {
  default: "ar-EG",
  arEG: "ar-EG",
  enUS: "en-US",
};

export const THEMES = {
  default: "dark",
  light: "light",
  dark: "dark",
};

export const ITEMS_WIDTH = {
  quarter: "25%",
  third: "33.33%",
  half: "50%",
  full: "100%",
};

export const BASE_URL = 'http://127.0.0.1:8000/';
export const API_DEFULT_TIMEOUT = 60000;
export const API_LONG_TIMEOUT = 86400000;

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