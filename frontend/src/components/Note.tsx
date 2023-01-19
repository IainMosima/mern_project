import styles from "../styles/Note.module.css"
import { Card } from 'react-bootstrap';
import { Note as Notemodel } from '../models/note';
import { format } from "path";
import { formatDate } from "../utils/formatDate";

interface NoteProps {
    note: Notemodel,
    className?: string
}

function Note({ note, className }: NoteProps) {
    const {
        title,
        text,
        createdAt,
        updatedAt
    } = note;

    let createUpdatedText: string;

    if (updatedAt > createdAt) {
        createUpdatedText = `Updated: ${formatDate(updatedAt)}`
    } else {
        createUpdatedText = `Created at: ${formatDate(createdAt)}`
    }

    return (
        <Card className={`${styles.noteCard} ${className}`}>
            <Card.Body className={styles.cardBody}>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Text className={styles.cardText}>
                    {text}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                {createUpdatedText}
            </Card.Footer>
        </Card>
    )
}

export default Note;