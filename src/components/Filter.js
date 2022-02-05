import React, { useEffect, useState } from "react";

function Filter() {
  

  return (
    <div className="mx-10 my-7 drop-shadow-sm">
      <input
        type="text"
        placeholder="Search bear by name"
        className="border-2 w-full p-2 px-5"
      />
    </div>
  );
}

export default Filter;
