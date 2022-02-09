import React from "react";
import { atom } from "recoil";

const beerAtoms = atom({
  key: "beerAtoms", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

const filterState = atom({
  key: "filterState", // unique ID (with respect to other atoms/selectors)
  default: "",
});

export { beerAtoms, filterState };
