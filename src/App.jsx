import Card from "./components/Card";
import "./App.css";

import vehicles from "./components/data/List";
import ShowHiden from "./components/ShowHiden";

function App() {
  const Lista = vehicles.map((v) => {
    return <Card title={v.name} description={v.description} />;
  });

  return (
    <>
      <div className="App">
        <h1></h1>
        <div className="container">
          {Lista}

          {/* <ShowHiden /> */}
        </div>
      </div>
    </>
  );
}

export default App;
