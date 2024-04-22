import axios from "axios";

const urlBase = "http://localhost:8080/instrumento";

export async function getAll() {
  console.log("instrumento service ", await axios.get(urlBase));
  return await axios.get(urlBase);
}

export async function getById(id:any) {
  console.log("intrumento url " + urlBase +"/"+ id);
  return axios.get(urlBase +"/"+ id);
}

