import React, { useState, useEffect } from "react";
import {
  getGates,
  //   handleSelectedGate,
  //   getCheapRoutes,
  //   calculateJourneyCost,
} from "../../server/server";
import Banner from "../../components/Banner/Banner";
import JourneyCalculator from "../../components/JourneyCalculator/JourneyCalculator/JourneyCalculator";
import GatesCarousal from "../../components/GateComponents/GatesCarousal/GatesCarousal";

const Home = () => {
  const [gates, setGates] = useState();
  //   const [gate, setGate] = useState();
  //   const [cheapRoute, setCheapRoute] = useState();
  //   const [journeyData, setjourneyData] = useState();
  //   const [favorites, setFavorites] = useState();
  //   const [loading, setLoading] = useState();
  //   const [error, setError] = useState();

  useEffect(() => {
    getGates(setGates);
  }, []);

  console.log(gates, "api data");
  //   console.log(gate, "selected gate");
  //   console.log(cheapRoute, "my cheap route");
  //   console.log(journeyData, "my journey");
  return (
    <>
      {/* <div>
        <h1 onClick={() => handleSelectedGate("SOL", setGate)}>Home</h1>

        <p onClick={() => getCheapRoutes("SOL", "RAN", setCheapRoute)}>
          Cheap trip
        </p>

        <p onClick={() => calculateJourneyCost("100", "18", 3, setjourneyData)}>
          Cost of journey
        </p>
      </div> */}
      <div>
        <Banner />
        <JourneyCalculator />
      </div>
      <div>
        <GatesCarousal gates={gates} />
      </div>
    </>
  );
};

export default Home;
