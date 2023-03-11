import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import DataService from "../services/notesServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../Modal/modal";
import Masonry from "react-masonry-css";
const PagNotes = ({
  id,
  setNotes,
  setNoteId,
  getNoteId,
  notes,
  posts,
  loading,
  getNotes,
}) => {
  useEffect(() => {
    getNotes();
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  // const getNotes = async () => {
  //   const data = await DataService.getAllNotes();

  //   console.log(data.docs);
  //   setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };

  const deleteHandler = async (id) => {
    await DataService.deleteNote(id);
    getNotes();
  };
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // toast
  const notify = () => toast("note recieved  ");
  const notify2 = () => toast("note deleted successFully");

  return (
    <div className="  text-slate-400   ">
      <div className="">
        {notes.length === 0 ? (
          <div>
            {/* <button
              className="bg mr-4 font-signature6  mt-2 border-[1px] p-2 shadow-inner drop-shadow-xl hover:bg-[#3d4f7c] rounded-full cursor-pointer "
              onClick={() => {
                getNotes();
                notify();
              }}
            >
              click to Get Notes
            </button> */}
            {/*Notes not found */}
            <p className=" md:mx-56  p-20 md:text-center font-signature8 font-extrabold text-3xl ">{`Notes-${notes.length} no notes Found Fill the note form`}</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="p-4 ml-5 rounded-lg font-signature12  text-ellipsis overflow-hidden ">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid text-ellipsis overflow-hidden "
          columnClassName="my-masonry-grid_column"
        >
          {/* array of JSX items */}
          <div className="break-words">
            {posts.map((note, index) => (
              <div className="" key={note.id}>
                {/* {index + 1} */}
                <h1 className="font-extrabold text-center">My NOtes</h1>
                <blockquote key={note.id} className="font-thin">
                  <p className="text-extrabold text-2xl text-clip overflow-hidden">
                    {" "}
                    {note.title}
                  </p>
                  <br />
                  <p className="text-thin text-lg text-clip overflow-hidden">
                    {" "}
                    {note.tagLine}
                  </p>
                  <br />
                  <p className="text-clip overflow-hidden"> {note.body}</p>
                </blockquote>
                <span
                  className=""
                  onClick={(e) => {
                    getNoteId(note.id);
                  }}
                >
                  <Modal id={id} setNoteId={setNoteId} getNotes={getNotes} />
                </span>{" "}
                <button
                  onClick={(e) => deleteHandler(note.id)}
                  className=" font-signature11 shadow-inner-2xl drop-shadow-2xl hover:bg-slate-300 rounded-full cursor-pointer"
                >
                  <DeleteIcon onClick={notify2} />
                </button>
              </div>
            ))}
          </div>
        </Masonry>
      </div>
    </div>
  );
};

export default PagNotes;
