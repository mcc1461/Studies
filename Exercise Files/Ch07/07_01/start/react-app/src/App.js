import "./App.css";

const daltons = [
  { name: "Joe", grade: 100 },
  { name: "Jack", grade: 80 },
  { name: "william", grade: 70 },
  { name: "Averell", grade: 35 }
];

const nobody = "Nobody from The Daltons Family!";
function List({ data, gangs, empty }) {
  return !data.length ? (
    empty
  ) : (
    <ul>
      {data.map((gang) => (
        <li key={gang.name}>
          {gangs(gang)}
        </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <List
      data={daltons}
      empty={nobody}
      gangs={(gang) => (
        <>
          {gang.name} ::: {gang.grade} points
          <div> ------- </div>
        </>
      )}
    />
  );
}

export default App;
