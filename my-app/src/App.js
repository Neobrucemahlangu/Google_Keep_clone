import React,{useState} from "react";
import Navbar from "./components/Navbar/Navbar.js"
import Sidebar from "./components/Sidebar/Sidebar.js"
import Form from "./components/Form/Form.js"
import Notes from "./components/Notes/Notes.js"
import Modal from "./components/Modal/Modal.js"
import Note from "./components/Notes/Note.js"



const NOTES = []

function App() {

  const [notes, setNotes] = useState(NOTES)
  const [selectedNote, setSelectedNote] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  

  const addNote= (note)=>{
    setNotes((prevNotes) =>{
      return  [
        ...prevNotes, 
        note
      ]
     
    })
    
  }

  const editNote = (editedNote) =>{
    setNotes(prevNotes => {
      const newArray = prevNotes.map(note =>{
        if(editedNote.id === note.id){
          note.title = editedNote.title
          note.text = editedNote.title
        }
        return note;
      })

      return newArray;
    })
  }
  const deleteNote= (id)=>{
    setNotes((prevNotes) =>{
      return  [
        prevNotes.filter(note => note.id !== note.id)
      
      ]
    })
  }

  const toggleModal = ()=>{
    setIsModalOpen(prevState => {
      return !prevState

    })}
  
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Form addNote={addNote}/>
      <Notes notes={notes} deleteNote={deleteNote} toggleModal={toggleModal} setSelectedNote={setSelectedNote}/>
      <Modal isModalOpen={isModalOpen} selectedNote={selectedNote} toggleModal={toggleModal} editNote={editNote} />
    </div>
  );
} 

export default App;
