import React from "react";
import LessonStyle from "../LessonCard/LessonCard.module.scss";


const Lesson = (props) => {   
    return (
        <div className="container d-flex gap-3 align-items-center p-5">
            <img src={props.image} alt="" width={"100px"}/>
            <h4 className="text-primary fs-2 fw-bold" style={LessonStyle}> {props.hour} </h4>
            <h1 className="text-danger fs-2 fw-bold text-decoration-underline" style={LessonStyle}> {props.name} </h1>

        </div>
    );
};

export default Lesson;
