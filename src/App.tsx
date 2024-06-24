import sunLottie from "./assets/sun.json";
import "./App.css";
import Lottie from "lottie-react";
import useGetPiQuery from "./hooks/useGetPiQuery";
import useGetCircumferenceQuery from "./hooks/useGetCircumferenceQuery";

function App() {
  const {
    data: pi,
    isLoading: isLoadingPi,
    error: errorPi,
    refetch: refetchPi,
  } = useGetPiQuery();
  const {
    data: circumference,
    isLoading: isLoadingCircumference,
    error: errorCircumference,
    refetch: refetchCircumference,
  } = useGetCircumferenceQuery();

  const handleRefresh = () => {
    refetchPi();
    refetchCircumference();
  };

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
        <button onClick={handleRefresh}>Refresh Data</button>
      </div>
    </>
  );
}

export default App;
