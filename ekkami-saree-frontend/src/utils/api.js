import axios from "axios";


const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:8080";


function getAuthHeaders() {
  const token = localStorage.getItem("token");
  return token ? token : console.log("No Token Found");
  ;
}


export const api = axios.create({
  baseURL: API_BASE,
  headers: { Authorization: getAuthHeaders() },
});


