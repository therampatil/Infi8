import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css';

const Note = ({ content, position }) => {
  const [size, setSize] = useState({ width: 200, height: 150 });

  const onResize = (event, { element, size, handle }) => {
    setSize({ width: size.width, height: size.height });
  };

  return (
    <Draggable handle=".handle" defaultPosition={position}>
      <Resizable
        className="note"
        width={size.width}
        height={size.height}
        onResize={onResize}
      >
        <div style={{ width: size.width, height: size.height }}>
          <div className="handle"></div>
          <textarea
            defaultValue={content}
            className="note-textarea"
          ></textarea>
        </div>
      </Resizable>
    </Draggable>
  );
};

export default Note;
