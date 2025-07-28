import React from "react";

const PopUp = ({ operation, message, setOpen, setConfirm }) => {
  return (
    <div className="isolate aspect-video bg-white/90 shadow-lg ring-1 ring-black/5 rounded-lg w-96 h-32 fixed top-[40%] left-[40%] flex flex-col justify-center items-center p-4">
      <div className="mb-4">
        <h1 className="text-xl text-center font-semibold">{operation}</h1>
        <p>{message}</p>
      </div>
      <div className="flex justify-between items-center gap-2">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-xl" onClick={()=>setConfirm(true)}>
          Update
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-xl"
          onClick={() => setOpen(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PopUp;
