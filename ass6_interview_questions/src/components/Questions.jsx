import React from "react";
import data from "../helpers/data";
import Interview from "./Interview";

const Questions = () => {
    const [selectedId, setSelectedId] = React.useState(""); 
  return (
    <div className="container1">
      {data.map((item) => (
        <Interview item={item} selectedId={selectedId} setSelectedId={setSelectedId} key={item.id}></Interview>
      ))}
      ; 
    </div>
  );
};

export default Questions;
