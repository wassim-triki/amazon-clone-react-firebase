import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-react--clone-34f11.cloudfunctions.net/api",
  // "http://localhost:5001/react--clone-34f11/us-central1/api",
});

export default instance;
