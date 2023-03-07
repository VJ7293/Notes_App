import React, { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

import CreateArea from "../src/components/CreateArea";

import "../src/css/styles.css";
import PaginationContainer from "./Pagination/PaginationContainer";
function App() {
  const [noteId, setNoteId] = useState("");

  const getNoteIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setNoteId(id);
  };
  return (
    <div className="overflow-auto rounded-3xl m-5 bg-gradient-to-tr from-blue-500 via-blue-900 to-blue-300  drop-shadow-2xl filter-none  border  drop-shadow-3xl shadow-inner ">
      <div className=" ">
        <div className=" ">
          {" "}
          <div>
            <Header />
          </div>
          {/* <div className="">
            <CreateArea id={noteId} setNoteId={setNoteId} />
          </div> */}
          <div className="">
            <PaginationContainer
              setNoteId={setNoteId}
              id={noteId}
              getNoteId={getNoteIdHandler}
            />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
