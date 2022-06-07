import axios from "axios";

export const orderBaseURL = axios.create({
  baseURL: "http://13.59.167.171:9090/v1",
  withCredentials: false,
});

export const labBaseURL = axios.create({
  baseURL: "http://13.59.167.171:9091/v1",
  withCredentials: false,
});

export const reportBaseURL = axios.create({
  baseURL: "http://13.59.167.171:9092/v1",
  withCredentials: false,
});
