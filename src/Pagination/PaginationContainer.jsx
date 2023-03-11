import React, { useState, useEffect } from "react";
import PagNotes from "./PagNotes";
import Pagination from "./Pagination";
import CreateArea from "../components/CreateArea";

import "../App.css";
import DataService from "../services/notesServices";

const PaginationContainer = ({ id, getNoteId, setNoteId }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const data = await DataService.getAllNotes();
    console.log(data.docs);
    setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = notes.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className=" ">
      {/* <h1 className=" font-bold text-slate-300">My Notes</h1> */}

      <CreateArea notes={notes} getNotes={getNotes} />
      <PagNotes
        id={id}
        setNotes={setNotes}
        posts={currentPosts}
        loading={loading}
        getNotes={getNotes}
        notes={notes}
        getNoteId={getNoteId}
        setNoteId={setNoteId}
      />

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={notes.length}
        paginate={paginate}
      />
    </div>
  );
};

export default PaginationContainer;
