import React, { useEffect, useState, useRef } from "react";

import { useSetRecoilState } from "recoil";
import { filterState } from "../beerAtoms";

function Filter() {
  const inputRef = useRef("");
  const setFilterName = useSetRecoilState(filterState);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const searchChangeHandler = (e) => {
    setFilterName(e.target.value);
  };

  return (
    <div className="mx-10 my-7 drop-shadow-sm">
      <input
        type="text"
        placeholder="Search bear by name"
        className="border-2 w-full p-2 px-5"
        onChange={searchChangeHandler}
        ref={inputRef}
      />
    </div>
  );
}

export default Filter;
