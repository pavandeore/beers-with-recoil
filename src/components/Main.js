import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { beerAtoms } from "../beerAtoms";

function Main() {
//   const [beers, setBeers] = useState([]);
  const [beers, setBeers] = useRecoilState(beerAtoms);

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers/")
      .then(function (response) {
        setBeers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="grid mx-4 grid-cols-4 gap-5">
      {beers.map((beer) => {
        return (
          <div className="bg-cyan-600 card" key={beer.id}>
            <h5 className="text-xl pb-3">{beer.name.slice(0, 25)} -</h5> <hr />
            <p className="pt-3">{beer.tagline}</p>
            <p className="pt-3">
              First Brewed - <span className="badge">{beer.first_brewed}</span>
            </p>
            <img
              src={beer.image_url}
              alt={beer.name}
              className="h-40 mx-auto my-4 mt-5"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Main;
