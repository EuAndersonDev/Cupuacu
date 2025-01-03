import {
    FooterContainer,
    EmailForm,
    EmailInput,
    SubmitButton,
} from "../styles/FooterStyles";
import Swal from "sweetalert2";

const Footer = () => {
    const handleEmailSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const emailTitle = formData.get("title");
        const emailSubject = formData.get("subject");
        const emailMessage = formData.get("message");
        const mailto = `mailto:andersondev25@gmail.com?subject=${encodeURIComponent(
            emailSubject
        )}&body=${encodeURIComponent(
            `Title: ${emailTitle}\n\n${emailMessage}`
        )}`;

        window.location.href = mailto;

        console.log("Email enviado com sucesso!");

        Swal.fire({
            title: "Email Enviado!",
            text: "Seu email foi enviado com sucesso.",
            icon: "success",
            confirmButtonText: "OK",
        });
    };

    return (
        <FooterContainer>
            <h1>Fale conosco</h1>
            <EmailForm onSubmit={handleEmailSubmit}>
                <EmailInput
                    type="text"
                    name="title"
                    placeholder="Title"
                    required
                />
                <EmailInput
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                />
                <EmailInput
                    type="text"
                    name="message"
                    placeholder="Your message"
                    required
                />
                <SubmitButton type="submit">Send</SubmitButton>
            </EmailForm>
        </FooterContainer>
    );
};

export default Footer;
