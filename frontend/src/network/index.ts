export const ENDPOINTS = {
  words: `${import.meta.env.VITE_API_ENDPOINT}/words`,
  rank: `${import.meta.env.VITE_API_ENDPOINT}/rank`,
} as const;
