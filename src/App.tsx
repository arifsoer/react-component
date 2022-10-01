import { useState } from "react";
import "./App.css";

import Table from "./components/table/table";

import { tableHeader } from "./dummyData";

const App = () => {
  const [change, setChange] = useState("change");

  return (
    <div className='container'>
      <Table headers={tableHeader} />
    </div>
  );
};

export default App;
