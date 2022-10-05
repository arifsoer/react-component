import { useState } from "react";
import "./App.css";

import Table from "./components/table/table";
import Sanbox from "./components/sandbox";

import { tableHeader, tableData } from "./dummyData";

const App = () => {
  const [change, setChange] = useState("change");

  return (
    <div className='container'>
      {/* <Table headers={tableHeader} datas={tableData} /> */}
      <Sanbox />
    </div>
  );
};

export default App;
