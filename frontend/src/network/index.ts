// CONSTANT ENDPOINTS LINKS USED IN THE PROJECT
const API_ENDPOINT = "http://localhost:8080";
export const ENDPOINTS = {
  words: `${API_ENDPOINT}/words`,
  rank: `${API_ENDPOINT}/rank`,
} as const;
