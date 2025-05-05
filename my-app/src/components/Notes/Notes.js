import "./Notes.css";
import Note from "./Note.js";
const Notes = (props) => {
  console.log("props", props.notes[0]);
  const { notes, deleteNote,  toggleModal,setSelectedNote} = props;
  return (
    <div className="notes">
      {notes.length === 0 ? (
        <h1>No notes</h1>
      ) : (
        notes.map((note, index) => (
          <Note
            key={index}
            note={note}
            deleteNote={deleteNote}
            toggleModal={toggleModal}
            setSelectedNote={setSelectedNote}
          />
        ))
      )}
    </div>
  );
};

export default Notes;
