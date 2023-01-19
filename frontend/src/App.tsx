import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Note as NoteModel } from './models/note'
import Note from './components/Note';
import styles from "./styles/NotePage.module.css";
import * as NotesApi from "./network/note_api"

function App() {
  const [notes, setNotes] = useState<NoteModel[]>([]);
  
  useEffect(() => {
    async function loadNotes() {
      try{
        const notes = await NotesApi.fetchNotes();
        setNotes(notes);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    loadNotes();
  }, []);
  

  return (
    <Container>
      <Row xs={1} md={2} xl={3} className="g-4">
        {notes.map((note) => (
          <Col key={note._id}>
            <Note note={note} className={styles.note}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;