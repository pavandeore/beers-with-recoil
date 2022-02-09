import { beerAtoms, filterState } from "./beerAtoms";
import { selector } from "recoil";

const beersSelectorState = selector({
  key: "beersSelectorState",
  get: ({ get }) => {
    const list = get(beerAtoms);
    const filter = get(filterState);
    return filter && filter.length > 0
      ? list.filter((obj) => {
          return obj.name.toLowerCase().indexOf(filter) !== -1;
        })
      : list;
  },
});

export { beersSelectorState };
