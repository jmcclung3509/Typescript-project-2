// Code goes here!
import axios from "axios";



console.log(process.env.GOOGLE_API_KEY)



const form = document.querySelector("form")!;
const addressInput = document.querySelector("#address")! as HTMLInputElement;

const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}`;
script.async = true;
document.head.appendChild(script);

type GoogleGeocodingResponse = {
    results: { geometry: { location: { lat: number; lng: number } } }[];
    status: "OK" | "ZERO_RESULTS";
};

const searchAddressHandler = (e: Event) => {
  e.preventDefault();

  const enteredAddress = addressInput.value;

  //send to google API
  axios
  .get<GoogleGeocodingResponse>(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
      enteredAddress
    )}&key=${process.env.GOOGLE_API_KEY}`
  )
    .then((response) => {
      console.log(response);
      if (response.data.status !== "OK") {
        throw new Error("Could not fetch location");
      }

      const location = response.data.results[0].geometry.location;
      console.log(location)

      const map = new google.maps.Map(document.getElementById("map")!, {
        center: location,
        zoom: 8,
      });
     new google.maps.Marker({position:location, map:map});
    })
    .catch((err) => {
      alert(err.message);
      console.log(err, 'ERROR');
    });
};

form.addEventListener("submit", searchAddressHandler);
