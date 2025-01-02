import {
    FooterContainer,
    SocialIcons,
    Icon,
    EmailForm,
    EmailInput,
    SubmitButton,
    SocialIconsUni,
} from "./Footerstyles";

const Footer = () => {
    const handleEmailSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const emailMessage = formData.get("message");
        const mailto = `mailto:andersondev25@gmail.com?subject=Contact&body=${encodeURIComponent(
            emailMessage
        )}`;
        window.location.href = mailto;
    };

    return (
        <FooterContainer>
            <h2>Connect with Me</h2>
            <SocialIcons>
                <SocialIconsUni>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon className="fab fa-instagram" />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon className="fab fa-linkedin" />
                </a>
                <a
                    href="https://github.com/AndersonReis04"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon className="fab fa-github" />
                </a>
                </SocialIconsUni>


            </SocialIcons>

            <h3>Send me a message</h3>
            <EmailForm onSubmit={handleEmailSubmit}>
                <EmailInput
                    type="text"
                    name="message"
                    placeholder="Type your message here..."
                    required
                />
                <SubmitButton type="submit">Send</SubmitButton>
            </EmailForm>
        </FooterContainer>
    );
};

export default Footer;
