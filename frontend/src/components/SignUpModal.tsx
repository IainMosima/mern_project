import { useForm } from "react-hook-form";
import { User } from "../models/user";
import { signUpCredentials } from "../network/note_api";
import * as NotesApi from "../network/note_api";
import { Modal, Form, Button, Alert } from 'react-bootstrap';
import TextInputField from './form/TextInputField';
import styleUtils from "../styles/utils.module.css";
import { ConflictError } from "../errors/http_errors";
import { useState } from "react";



interface SignUpModalProps {
    onDismiss: () => void;
    onSignUpSuccessfull: (user: User) => void;
}
const SignUpModal = ({onDismiss, onSignUpSuccessfull}: SignUpModalProps) => {

    const [errorText, seterrorText] = useState<String | null>(null);

    const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm<signUpCredentials>();

    async function onSubmit(credentials: signUpCredentials) {
        try {
            const newUser = await NotesApi.signUp(credentials);
            onSignUpSuccessfull(newUser);
        } catch (error){   
            if (error instanceof ConflictError) {
                seterrorText(error.message);
            } else {
                alert(error);
                console.error(error);
            }
        }
    }

    return (
        <Modal show onHide={onDismiss}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Sign Up
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {errorText &&
                    <Alert variant="danger">
                        {errorText}
                    </Alert>
                }
                <Form onSubmit={handleSubmit(onSubmit )}>
                    <TextInputField
                     name="username"
                     label="UserName"
                     type="text"
                     placeHolder="Username"
                     register={register}
                     registerOptions={{ required: "Required" }}
                     error={errors.username}
                    />
    
                    <TextInputField
                     name="email"
                     label="Email"
                     type="email"
                     placeHolder="Email"
                     register={register}
                     registerOptions={{ required: "Required" }}
                     error={errors.email}
                    />

                    <TextInputField
                     name="password"
                     label="Password"
                     type="password"
                     placeHolder="Password"
                     register={register}
                     registerOptions={{ required: "Required" }}
                     error={errors.password}
                    />

                    <Button
                     type="submit"
                     disabled={isSubmitting}
                     className={styleUtils.width100}
                    >
                        Sign Up
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
      )
}
 
export default SignUpModal;