import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

const GateCard = ({ code, name }) => {
  return (
    <div style={{ textAlign: "left" }}>
      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
          "&:hover": {
            boxShadow: "md",
            borderColor: "neutral.outlinedHoverBorder",
          },
        }}
      >
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <img
            src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent>
          <Typography
            level="body-sm"
            aria-describedby="card-description"
            mb={1}
          >
            CODE:{code}
          </Typography>
          <Typography
            level="title-lg"
            id="card-description"
            sx={{ fontSize: 42 }}
          >
            {name}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default GateCard;
