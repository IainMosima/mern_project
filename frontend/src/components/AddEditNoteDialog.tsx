import { Modal, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Note } from '../models/note';
import { NoteInput } from '../network/note_api';
import * as NoteApi from "../network/note_api";
import TextInputField from './form/TextInputField';


interface AddEditNoteDialogProps {
  noteToEdit?: Note,
  onDismiss: () => void;
  onNoteSaved: (note: Note) => void
}

const AddEditNoteDialog = ({ noteToEdit, onDismiss, onNoteSaved }: AddEditNoteDialogProps) => {
  const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm<NoteInput>({
    defaultValues: {
      title: noteToEdit?.title || "",
      text: noteToEdit?.text || ""
    }
});

  async function onSubmit(input: NoteInput) {
    try {
      let noteResponse: Note;
      if (noteToEdit) {
        noteResponse = await NoteApi.updateNote(noteToEdit._id, input);
      } else {
        noteResponse = await NoteApi.createNote(input);
      }
      onNoteSaved(noteResponse);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <Modal show onHide={onDismiss}>
      <Modal.Header closeButton>
        <Modal.Title>
          {noteToEdit ? "Edit note" : "Add note"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form id="addEditNoteForm" onSubmit={handleSubmit(onSubmit)}>
          <TextInputField 
           name="title"
           label="Title"
           type="text"
           placeholder="Title"
           register={register}
           registerOptions={{ required: true } }
           error={errors.title}
          />

          <TextInputField 
           name="text"
           label="text"
           as="textarea"
           rows={5}
           placeholder="Title"
           register={register}
          />
          
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button
         type="submit"
         form="addEditNoteForm"
         disabled={isSubmitting}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddEditNoteDialog