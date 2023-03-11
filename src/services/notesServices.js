import { db } from "../config/firebaseConfig";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const notesCollectionRef = collection(db, "notes");
class NotesDataService {
  addNotes = (newNote) => {
    return addDoc(notesCollectionRef, newNote);
  };
  updateNote = (id, updatedNote) => {
    const noteDoc = doc(db, "notes", id);
    return updateDoc(noteDoc, updatedNote);
  };
  deleteNote = (id) => {
    const noteDoc = doc(db, "notes", id);
    return deleteDoc(noteDoc);
  };

  getAllNotes = () => {
    return getDocs(notesCollectionRef);
  };
  getNote = (id) => {
    const noteDoc = doc(db, "notes", id);
    return getDoc(noteDoc);
  };
  getPinned = (id) => {
    const noteDoc = doc(db, "pinned", id);
    return getDoc(noteDoc);
  };
}

const DataService = new NotesDataService();
export default DataService;
