import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Card from "./components/Card";
import Collapse from "./components/Collapse";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="card-group text-primary justify-content-evenly">
          <div className="col">
            <Collapse href="collapseExample1">
              <Card
                cardTitle="Card Title I"
                cardText="Lorem Ipsum Text I"
                updatedTime="Last updated 3 mins ago"
                image="https://picsum.photos/id/1/200/300"
              />
            </Collapse>
          </div>

          <div className="col">
            <Collapse href="collapseExample2">
              <Card
                cardTitle="Card Title II"
                cardText="Lorem Ipsum Text II"
                updatedTime="Last updated 2 mins ago"
                image="https://picsum.photos/id/10/200/300"
              />
            </Collapse>
          </div>

          <div className="col">
            <Collapse href="collapseExample3">
              <Card
                cardTitle="Card Title III"
                cardText="Lorem Ipsum Text III"
                updatedTime="Last updated 1 mins ago"
                image="https://picsum.photos/id/100/200/300"
              />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
}

createRoot(document.querySelector("#root")).render(<App />);
