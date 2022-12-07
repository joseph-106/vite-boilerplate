export const TOKEN = "token";

export const METHOD = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
} as const;

export const PATH = Object.freeze({
  HOME: "/",
  ALL: "*",
});

export const URL = Object.freeze({
  BASE: import.meta.env.VITE_BASE_URL,
});
