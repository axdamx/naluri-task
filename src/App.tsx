import sunLottie from "./assets/sun.json";
import "./App.css";
import axios from "axios";
import Lottie from "lottie-react";
import { useQuery } from "@tanstack/react-query";

function App() {
  const fetchPi = async () => {
    const response = await axios.get("http://localhost:3001/pi");
    if (!response) {
      throw new Error("Failed to fetch pi");
    }
    return response.data.pi;
  };

  const fetchCircumference = async () => {
    const response = await axios.get("http://localhost:3001/circumference");
    if (!response) {
      throw new Error("Failed to fetch circumference");
    }
    return response.data.circumference;
  };

  const {
    data: pi,
    isLoading: isLoadingPi,
    error: errorPi,
  } = useQuery({
    queryFn: () => fetchPi(),
    queryKey: ["pi"],
  });
  const {
    data: circumference,
    isLoading: isLoadingCircumference,
    error: errorCircumference,
  } = useQuery({
    queryFn: () => fetchCircumference(),
    queryKey: ["circumference"],
  });

  if (isLoadingCircumference && isLoadingPi) {
    return <h1>Loading...</h1>;
  }

  if (errorCircumference && errorPi) {
    return <h1>Error...</h1>;
  }

  return (
    <>
      <div>
        <Lottie animationData={sunLottie} loop={true} />
      </div>
      <div className="card">
        <div>
          <p>Current Value of Pi: {pi}</p>
          <p>Circumference of the Sun: {circumference} km</p>
        </div>
      </div>
    </>
  );
}

export default App;
