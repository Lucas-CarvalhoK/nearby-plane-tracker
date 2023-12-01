import axios from "axios";

export async function getPlanes() {
  const lat = -23.431537468078492;
  const long = -46.4720217619321;

  const options = {
    method: "GET",
    url: `https://adsbx-flight-sim-traffic.p.rapidapi.com/api/aircraft/json/lat/${lat}/lon/${long}/dist/25/`,
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "adsbx-flight-sim-traffic.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
