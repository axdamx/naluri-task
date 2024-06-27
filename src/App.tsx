import sunLottie from "./assets/sun.json";
import "./App.css";
import Lottie from "lottie-react";
import useGetPiQuery from "./hooks/useGetPiQuery";
import useGetCircumferenceQuery from "./hooks/useGetCircumferenceQuery";

function App() {
  const {
    data: piData,
    isLoading: isLoadingPi,
    error: errorPi,
    refetch: refetchPi,
  } = useGetPiQuery();
  const {
    data: circumferenceData,
    isLoading: isLoadingCircumference,
    error: errorCircumference,
    refetch: refetchCircumference,
  } = useGetCircumferenceQuery();

  const handleRefresh = () => {
    refetchPi();
    refetchCircumference();
  };

  if (isLoadingCircumference || isLoadingPi) {
    return <h1>Loading...</h1>;
  }

  if (errorCircumference && errorPi) {
    return <h1>Error...</h1>;
  }

  const { pi, iterations } = piData;
  const { circumference, radiusOfSunKm } = circumferenceData;

  return (
    <>
      <div>
        <Lottie animationData={sunLottie} loop={true} />
      </div>
      <div className="card">
        <div>
          <p>The current iterations: {iterations}</p>
          <p>Current Value of Pi (π): {pi}</p>
          <p>The radius of sun in KM : {radiusOfSunKm}</p>
          <p>Circumference of the Sun (2πr): {circumference} km</p>
        </div>
        <button onClick={handleRefresh}>Next Iteration</button>
      </div>
    </>
  );
}

export default App;
