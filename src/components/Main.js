import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { beerAtoms } from "../beerAtoms";
import { atom, useAtom } from "jotai";

import { beersSelectorState } from "../selectors";

const countAtom = atom(0);

function Main() {
  const [count, setCount] = useAtom(countAtom);
  const setBeers = useSetRecoilState(beerAtoms);
  const BeersList = useRecoilValue(beersSelectorState);

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

  const clickHandle = () => {
    setCount(count + 1);
  };

  return (
    <div className="grid mx-4 grid-cols-4 gap-5">
      <h2>
        {count} <button onClick={clickHandle}>+</button>
      </h2>
      {BeersList.map((beer) => {
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
