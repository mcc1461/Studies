import React from "react";
import { arrowDown, arrowUp } from "../helpers/icons";
import Card from "react-bootstrap/Card";
import "./Interview.module.scss";
// import { useState } from "react"; //^ "React.useState" is the same as useState from "react"

// const Interview = ({ item , selectedId, setSelectedId}) => {

  // return (
    // <div className="card-group" key={item.id}>
    //   <Card style={{ width: "33rem" }}>
    //     <Card.Body className="q-a text-danger">
    //       <Card.Title className="text-danger">
    //           <h4>{item.question}</h4>
    //           <button
    //             className="upDown"
    //             onClick={() => setSelectedId(item.id)}
    //             onDoubleClick={() => setSelectedId("")}
    //           >
    //             {selectedId === item.id ? arrowUp : arrowDown}
    //           </button>
    //       </Card.Title>
    //       <Card.Subtitle className="mb-2 text-primary">
    //         <h5>{selectedId === item.id ? item.answer : ""}</h5>
    //       </Card.Subtitle>
    //     </Card.Body>
    //   </Card>
    // </div>
//   );
// };

// export default Interview;

// *******************************!SECTION 2: with "Details" ************************************

const Interview = ({item}) => {
  return (
    <div className="card-group">
      <Card style={{ width: "41rem" }}>
        <Card.Body className="q-a text-danger">
          <details>
            <summary className="summary">
              {item.question}
            </summary>
              <p className="pElement">{item.answer}</p>
          </details>
        </Card.Body>
      </Card>
    </div>
  );

};

export default Interview;