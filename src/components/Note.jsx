// import React, { useState, useEffect } from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import DataService from "../services/notesServices";
// import CreateArea from "../components/CreateArea";
// const Note = ({ getNoteId }) => {
//   const [notes, setNotes] = useState([]);
//   useEffect(() => {
//     getNotes();
//   }, []);

//   const getNotes = async () => {
//     const data = await DataService.getAllNotes();

//     console.log(data.docs);
//     setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   };

//   const deleteHandler = async (id) => {
//     await DataService.deleteNote(id);
//     getNotes();
//   };

//   return (
//     <div className=" text-slate-500">
//       <div className="font-bold text-white">
//         <h1>Pinned Notes</h1>
//       </div>

//       <div className="m-5 p-5   ">
//         {/* rounded-lg  shadow-2xl   */}

//         <div className=" grid grid-cols-4 gap-4 ">
//           {notes.map((doc, index) => {
//             return (
//               <div key={doc.id}>
//                 <div
//                   key={doc.index}
//                   className="  truncate mt-5 shadow-2xl hover:bg-slate-100  font-semibold shadow-slate-900  white-glassmorphism rounded-2xl text-center gap-4"
//                 >
//                   {index + 1}
//                   <h1>{doc.title}</h1>
//                   <div className="m-4">
//                     <p>{doc.tagLine}</p>
//                   </div>
//                   <div>
//                     <blockquote>{doc.body}</blockquote>
//                   </div>

//                   <button onClick={(e) => getNoteId(doc.id)}>edit</button>
//                   <button onClick={(e) => deleteHandler(doc.id)}>
//                     <DeleteIcon />
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Note;
