import React, { useEffect, useState } from "react";
import axios from "axios";

import LocationCard from "./LocationCard.js";

export default function LocationsList(props) {

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(res => {
        console.log(res);
        const location = res.data.results;
        setLocations(location);
      })
      .catch(err => console.log(err));
  }, [locations]);

  return (
    <section className="location-list">
      <h2>
        {locations.map(local => {
          return (
            <LocationCard 
              key={local.id}
              name={local.name}
              type={local.type}
              dimension={local.dimension}
              residents={local.residents.length}
            />
          );
        })}
      </h2>
    </section>
  );
}
