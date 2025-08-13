import React, { useState } from 'react';
import Note from './Note';

const Workspace = () => {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    const newNote = {
      id: new Date().getTime(),
      content: 'New Note',
      position: { x: 100, y: 100 },
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="workspace">
      <button onClick={addNote} className="add-note-btn">
        + Add Note
      </button>
      {notes.map((note) => (
        <Note
          key={note.id}
          content={note.content}
          position={note.position}
        />
      ))}
    </div>
  );
};

export default Workspace;
