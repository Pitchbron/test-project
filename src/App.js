import React from "react";
import Athlets from "./component/Athlets";
import Players from "./component/Players";

function App() {
  return (
    <div>
      <div className="img-rugby" />
      <Athlets />

      <div className="img-basketball" />
      <Players />
    </div>
  );
}

export default App;
