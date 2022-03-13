import axios from 'axios';

export const api = axios.create({
  baseURL: "https://cadastrodrr.com.br/api",
})