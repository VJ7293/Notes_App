import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import DataService from "../services/notesServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../Modal/modal";

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
    <div className="m-2 p-auto  text-slate-400   ">
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
      <div className=" ml-5   md:grid grid-cols-3 gap-4 text-lg font-signature12 sm:gap-4  ">
        {posts.map((note, index) => (
          <div className="  " key={index}>
            <div
              className="mb-10 shadow-2xl shadow-black hover:text-slate-600  hover:bg-slate-200   hover:text-clip rounded-2xl p-20 gap-4"
              key={note.id}
            >
              {/* {index + 1} */}

              <blockquote
                key={note.id}
                className="font-thin break-words text-ellipsis "
              >
                <p className="text-extrabold text-2xl break-keep">
                  {" "}
                  {note.title}
                </p>
                <br />
                <p className="text-thin text-lg break-keep"> {note.tagLine}</p>
                <br />
                <p className="break-words"> {note.body}</p>
              </blockquote>

              <div className="flex justify-between items-center ml-5">
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
                  className=" shadow-inner  text-white active:bg-slate-700 font-bold uppercase text-sm px-6 py-3  hover:shadow-lg outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150 font-signature11 shadow-inner-2xl drop-shadow-2xl hover:bg-slate-400 rounded-full cursor-pointer"
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
