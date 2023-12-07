
import {data} from './components/Helper/data';
import Lesson from './components/Pages/Lesson';
import Header from './components/Header/Header';

function App() {
  return (
  <div>
    <h1><Header /></h1>
    {
    data.map((item, i) => {
     return ( 
       <Lesson name={item.name} hour={item.hour} image={item.image} key={item.id}/>
       )})
    };
  </div>
  
  );  };

export default App;
