import React from "react";
import { Header } from "./Header";
import { Wrapper } from "./Styled/Wrapper";
import { Paper } from "@material-ui/core";

export const Banner: React.FC = () => {
  const paper = {
    padding: "30px",
    width: "700px",
  };

  return (
    <div className="container">
      <Header />

      <Wrapper>
        <div className="text">
          <Paper elevation={3} style={paper}>
            <h1>Waarom JR Sign?</h1>

            <p>
              Met meer dan vijf jaar ervaring weten wij zeer goed wat we doen.
              Samen met u bekijken we de mogelijkheden om uw wagen een betere
              uitstraling te geven zoals u het wenst. Dit kan gaan over kleine
              subtiele veranderingen en uitlopen tot het volledig wrappen van de
              auto. Ook bestaat de mogelijkheid om garagepoorten, muren etc. te
              wrappen of te bestickeren.
            </p>
            <p>
              We streven naar de perfecte kwaliteit, zowel voor de klant als
              onszelf. Hierbij zullen we ook ieder project behandelen alsof we
              bezig zijn met ons eigen bezit, want geef toe, iedereen wil dat er
              met respect en kwaliteitsvol wordt omgegaan met zijn spullen.
            </p>
          </Paper>
        </div>
      </Wrapper>
    </div>
  );
};
