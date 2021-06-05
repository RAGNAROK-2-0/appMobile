import axios from 'axios';

const api = axios.create({
  baseURL:'https://app.anchieta.br/appAnchieta'});
  
export default api;
