import axios from "axios";
const apiGateUrl = "https://hstc-api.testing.keyholding.com/gates/";
const apiTransportUrl = "https://hstc-api.testing.keyholding.com/transport/";

const apiToken = {
  headers: { "x-api-key": process.env.REACT_APP_API_KEY },
};

const getGates = async (setGates) => {
  axios
    .get(apiGateUrl, apiToken)
    .then((response) => {
      setGates(response.data);
    })
    .catch((error) => console.error("Error: something went wrong", error));
};

const handleSelectedGate = async (gateCode, setGate) => {
  axios.get(apiGateUrl + gateCode, apiToken).then((response) => {
    setGate(response.data);
  });
};

const getCheapRoutes = async (gateCode, targetGateCode, setCheapRoute) => {
  axios
    .get(`${apiGateUrl}${gateCode}/to/${targetGateCode}`, apiToken)
    .then((response) => {
      setCheapRoute(response.data);
    });
};

const calculateJourneyCost = async (distance, number, days, setjourneyData) => {
  axios
    .get(
      `${apiTransportUrl}${distance}?passengers=${number}&parking=${days}`,
      apiToken
    )
    .then((response) => {
      setjourneyData(response.data);
    });
};

export { getGates, handleSelectedGate, getCheapRoutes, calculateJourneyCost };
