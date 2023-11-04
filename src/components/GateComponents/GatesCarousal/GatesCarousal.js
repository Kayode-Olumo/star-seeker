import React from "react";
import "./styles/GatesCarousal.css";
import GateCard from "../GateCard/styles/GateCard";
const GatesCarousal = ({ gates }) => {
  return (
    <div>
      <p>Interstellar Spaceport Gates</p>
      <div className="gates-carousal snap-inline">
        {gates &&
          gates.map((gate) => (
            <GateCard
              key={gate.uuid}
              className="gates-carousal-item"
              code={gate.code}
              name={gate.name}
            />
          ))}
      </div>
    </div>
  );
};

export default GatesCarousal;
