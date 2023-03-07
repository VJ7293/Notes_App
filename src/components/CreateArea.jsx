import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataService from "./../services/notesServices";

const NotesEdit = ({ id, setNoteId, notes, getNotes }) => {
  const [title, setTitle] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  // toast
  const notify = () => toast("note successfully added");

  useEffect(() => {
    getNotes();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    getNotes();
    // if (title === "" || tagLine === "" || body === "") {
    //   setMessage({ error: true, msg: "All fields are mandatory!" });
    //   return;
    // }
    const newNote = {
      title,
      tagLine,
      body,
    };
    console.log(newNote);

    try {
      if (id !== undefined && id !== "") {
        await DataService.updateNote(id, newNote);
        setNoteId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await DataService.addNotes(newNote);
        setMessage({ error: false, msg: "New Book added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
    setTitle("");
    setTagLine("");
    setBody("");
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleTagLine = (e) => {
    setTagLine(e.target.value);
  };
  const handleBody = (e) => {
    setBody(e.target.value);
  };

  //Toast

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await DataService.getNote(id);
      console.log("the record is :", docSnap.data());
      setTitle(docSnap.data().title);
      setTagLine(docSnap.data().tagLine);
      setBody(docSnap.data().body);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
      getNotes();
    }
  }, [id]);

  return (
    <div className="m-20">
      <div className="        ">
        {message ? message.mgs : message.err}
        <div className=" flex justify-center outline-none white   ">
          <div className="my-4">
            <form className="" onSubmit={handleSubmit}>
              <div className="">
                <input
                  className=" ml-16 flex justify-center placeholder-slate-800 font-signature11   hover:text-slate-600  hover:bg-slate-100  text-center white-glassmorphism  shadow-3xl md:filter-no  text-lg   shadow-2xl drop-shadow-2xl  bg-gradient-to-tr from-black to-blue-300  shadow-slate-900   mb-4  px-8 py-4 rounded-lg  outline-none"
                  type="text"
                  value={title}
                  onChange={handleTitle}
                  placeholder="Title"
                />
                <br />
                <input
                  className="ml-16 flex justify-center placeholder-slate-800 font-signature11  hover:text-slate-600  hover:bg-slate-100  text-center white-glassmorphism   md:filter-no  text-lg  shadow-2xl drop-shadow-2xl  bg-gradient-to-tr from-black to-blue-300  shadow-slate-900   mb-4  px-8 py-4 rounded-lg  outline-none"
                  type="text"
                  value={tagLine}
                  onChange={handleTagLine}
                  placeholder="TagLine"
                />
                <br />
                <textarea
                  className="active ml-16 flex justify-center font-signature11 text-center  hover:text-slate-600  hover:bg-slate-100  placeholder-slate-800 white-glassmorphism  shadow-3xl md:filter-no  text-lg  shadow-2xl drop-shadow-2xl  bg-gradient-to-tr from-black to-blue-300 shadow-slate-900   mb-4  px-8 py-4 rounded-lg  outline-none "
                  type="text"
                  value={body}
                  onChange={handleBody}
                  placeholder="Body"
                />
                <br />
              </div>

              <div>
                <input
                  type="submit"
                  value="save"
                  onClick={() => {
                    {
                      notify();
                    }
                    getNotes();
                  }}
                  className="ml-28 text-2xl font-extrabold  font-signature10 text-center  rounded-lg  hover:text-white active:text-slate-700 focus:outline-no shadow-inner outline-none drop-shadow-3xl  "
                />

                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesEdit;
