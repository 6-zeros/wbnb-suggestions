import http from "k6/http";

export let options = {
  vus: 100,
  duration: "5m",
  rps: 500
};

export default function () {
  const randomId = Math.floor(Math.random() * 10000000) + 1;
  const url = `http://localhost:3123/${randomId}/suggestions`;
  http.get(url);
};