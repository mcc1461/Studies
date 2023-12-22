
import { data } from "../../helper/data";
import Card from "./Card";


  const Main = () => {
    return (
      <>
        {data.map((p) => (
          <Card 
          {...p} 
          />
        ))}
      </>
    );
  };

export default Main;
