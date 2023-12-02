
const Card = ({title, date, image, desc}) => {
    //   console.log(data);
    return (
      <div>
        <div>{title}</div>
        <div>{date}</div>
        <img
          style={{ width: "100px", height: "100px" }}
          src={image}
          alt="pictures"
        />
        <div>
          <p>{desc}</p>
        </div>
      </div>
    );
  };
  
  export default Card;