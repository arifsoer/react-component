// import { useState } from "react";
import "./App.css";

// import Table from "./components/table/table";
// import Sanbox from "./components/sandbox";
import GraphList from "./components/GraphList/GraphList";

// import { tableHeader, tableData } from "./dummyData";
import { graphListData } from "./dummyData";

const App = () => {
  // const [change, setChange] = useState("change");

  return (
    <div className='container'>
      {/* <Table headers={tableHeader} datas={tableData} /> */}
      {/* <Sanbox /> */}
      <GraphList data={graphListData} />
    </div>
  );
};

export default App;
