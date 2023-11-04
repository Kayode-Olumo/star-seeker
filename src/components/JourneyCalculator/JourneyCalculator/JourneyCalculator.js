import React from "react";
import {
  Button,
  Card,
  CardContent,
  Input,
  FormLabel,
  FormControl,
  Select,
  Option,
} from "@mui/joy";

import "./styles/JourneyCalculator.css";
import JourneyModal from "../JourneyModal/JourneyModal";

const JourneyCalculator = () => {
  return (
    <>
      <div className="journey-container">
        <Card sx={{ width: 800, height: 100, borderRadius: 25 }}>
          <CardContent orientation="horizontal">
            <FormControl>
              <FormLabel className="journey-label">Distance (in AUs)</FormLabel>
              <Select defaultValue="dog" sx={{ width: 200 }}>
                <Option value="dog">Dog</Option>
                <Option value="cat">Cat</Option>
                <Option value="fish">Fish</Option>
                <Option value="bird">Bird</Option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel className="journey-label">No. of Passagers</FormLabel>
              <Input type="number" defaultValue={1} variant="outlined" />
            </FormControl>
            <FormControl>
              <FormLabel className="journey-label">
                No. of days for parking
              </FormLabel>
              <Input type="number" defaultValue={1} variant="outlined" />
            </FormControl>
            <Button
              style={{ width: "20%", height: "100%" }}
              variant="solid"
              size="md"
              color="primary"
              aria-label="see price"
              sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
            >
              See Price
            </Button>
          </CardContent>
        </Card>
      </div>
      <div>
        <JourneyModal />
      </div>
    </>
  );
};

export default JourneyCalculator;
