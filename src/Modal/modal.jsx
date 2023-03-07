import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataService from "./../services/notesServices";
import EditIcon from "@mui/icons-material/EditOutlined";

export default function Modal({ setNoteId, setNotes, id, getNotes }) {
  const [showModal, setShowModal] = React.useState(false);
  const [title, setTitle] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  // toast
  const notify = () => toast("note successfully added");

  // useEffect(() => {
  //   getNotes();
  // }, []);

  // const getNotes = async () => {
  //   const data = await DataService.getAllNotes();

  //   console.log(data.docs);
  //   setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

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
    }
    getNotes();
  }, [id]);
  return (
    <div className="">
      <button
        className="  shadow-inner drop-shadow-2xl hover:bg-slate-400 rounded-full cursor-pointer text-white active:bg-pink-100 font-bold uppercase text-sm px-6 py-3  hover:shadow-lg outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <EditIcon />
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center blue-glassmorphism items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="text-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-center">
                    Edit Notes
                  </h3>

                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed"></p>
                  <form className="mr-52" onSubmit={handleSubmit}>
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

                    <div className="flex justify-between">
                      <button
                        className="text-red-500 text-2xl font-extrabold  font-signature10 text-center  rounded-lg  hover:text-slate-600 active:text-slate-700 focus:outline-no shadow-inner outline-none drop-shadow-3xl  "
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <input
                        type="submit"
                        value="save"
                        onClick={() => {
                          getNotes();
                        }}
                        className="ml-52 text-2xl text-blue-500 font-extrabold  font-signature10 text-center  rounded-lg  hover:text-slate-600 active:text-slate-700 focus:outline-no shadow-inner outline-none drop-shadow-3xl  "
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
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
