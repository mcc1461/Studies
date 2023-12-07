import LessonStyle from "./LessonCard.module.scss";  

const Lesson = ({name, hour, image}) => {   
    return (
        <div className={Lessonss}>
            <div>
                <img src={image} alt="" width={"100px"}/>
            </div>
            <div>
                <h4>Lesson Name: {name}</h4>
                <h4>Lesson Name: {hour}</h4>
            </div>
        </div>
    );
}

export default Lesson;

