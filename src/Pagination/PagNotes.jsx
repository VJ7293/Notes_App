import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import DataService from "../services/notesServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../Modal/modal";
import EditIcon from "@mui/icons-material/EditOutlined";
const PagNotes = ({
  id,
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
    <div className="m-4 p-5  text-slate-400   ">
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
            <p className=" mx-56 p-20  text-center font-signature8 font-extrabold text-3xl ">{`Notes-${notes.length} no notes Found Fill the note form`}</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="m-8 flex justify-between sm:grid grid-cols-4 text-lg font-signature12 sm:gap-4  ">
        {posts.map((note, index) => (
          <div className="  ">
            <div
              className=" shadow-2xl shadow-black hover:text-slate-600  hover:bg-slate-200  overflow-hidden  truncate rounded-2xl p-20 gap-4"
              key={note.id}
            >
              {/* {index + 1} */}
              <h1 className="font-extrabold text-center">My NOtes</h1>
              <span key={note.id} className="font-thin">
                <span className="text-extrabold text-2xl"> {note.title}</span>
                <br />
                <span className="text-thin text-lg"> {note.tagLine}</span>
                <br />
                <span> {note.body}</span>
              </span>

              <div>
                <button
                  className="mr-10"
                  onClick={(e) => {
                    getNoteId(note.id);
                  }}
                >
                  <Modal id={id} setNoteId={setNoteId} getNotes={getNotes} />
                </button>{" "}
                <button
                  onClick={(e) => deleteHandler(note.id)}
                  className="ml-5  mt-2  p-2 font-signature11 shadow-inner-2xl drop-shadow-2xl hover:bg-slate-300 rounded-full cursor-pointer"
                >
                  <DeleteIcon onClick={notify2} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PagNotes;
