import React from "react";
import { atom } from "recoil";

export const beerAtoms = atom({
  key: "beerAtoms", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
