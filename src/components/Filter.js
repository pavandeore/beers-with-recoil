import React, { useEffect, useState, useRef } from "react";

import { useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";
import { beerAtoms } from "../beerAtoms";

function Filter() {

  const inputRef = useRef('');
  const [inp , setInp] = useState('');
  const setBeersAtom = useSetRecoilState(beerAtoms);
  const beersArr = useRecoilValue(beerAtoms);
  const mainBeersArr = [...beersArr];

  useEffect(() => {
   inputRef.current.focus();
console.log(beersArr);
  }, [beersArr]);

  const searchChangeHandler = (e) => {


    let temp = [...mainBeersArr].filter((obj) => obj.name.toLowerCase().includes(inputRef.current.value.toLowerCase()));

    setBeersAtom(temp);

    // setInp(e.target.value)

    // console.log(inp)

    console.log(mainBeersArr);
    // setBeersAtom([{name : 'pawan'}]);  // for test default 1 val
  }


  return (
    <div className="mx-10 my-7 drop-shadow-sm">
      <input
        type="text"
        placeholder="Search bear by name"
        className="border-2 w-full p-2 px-5"
        // value={inp}
        value={inputRef.current.value || ''}
        //onChange={}
        onChange={searchChangeHandler}
        ref={inputRef}
      />
    </div>
  );
}

export default Filter;
