import React from "react";

const PopUp = ({ operation, message }) => {
  return (
    <div className="isolate aspect-video bg-white/70 shadow-lg ring-1 ring-black/5 rounded-lg w-72 h-32 fixed top-[40%] left-[40%] flex flex-col justify-center items-center">
      <div>
        <h1>{operation}</h1>
        <p>{message}</p>
      </div>
      <div className="flex justify-between items-center gap-2">
        <button className="bg-red-500 text-white py-2 px-4 rounded-xl">
          Delete
        </button>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-xl">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PopUp;
