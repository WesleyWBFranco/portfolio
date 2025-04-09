import React, { useRef } from "react"
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Container = styled.form`
    scroll-margin-top: 50px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    padding: 0 16px; 
    position: relative;
    z-index: 1;
    align-items: center;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 12px;

    @media (max-width: 1070px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
  
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;


const ContactForm = styled.div`
    width: 95%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    background-color: rgba(17, 25, 40, 0.83);
    border: 1px solid rgba(255, 255, 255, 0.125);
    padding: 32px;
    border-radius: 12px;
    box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
    margin-top: 28px;
    gap: 12px;
`;

const ContactTilte = styled.div`
    justify-content: center;
    text-align: center; 
    font-size: 28px;
    margin-bottom: 6px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
    flex: 1;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text_secondary + 50};
    outline: none;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 12px;
    padding: 12px 16px;
    &:focus {
        border: 1px solid ${({ theme }) => theme.primary};
    }
`;

const ContactInputMessage = styled.textarea`
    flex: 1;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text_secondary + 50};
    outline: none;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 12px;
    padding: 12px 16px;
    &:focus {
        border: 1px solid ${({ theme }) => theme.primary};
    }
`;

const ContactButton = styled.input`
    width: 100%;
    text-decoration: none;
    text-align: center;
    background: hsla(271, 100%, 50%, 1);
    padding: 13px 16px;
    margin-top: 2px;
    cursor: pointer;
    border-radius: 12px;
    border: none;
    color: ${({ theme }) => theme.text_primary};
    font-size: 18px;
    font-weight: 600;
`;

const Contact = () => {
    const form = useRef(); // <- 1. Cria o useRef

    const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs.sendForm(
            'gmailMessage',
            'template_yh2upiz',
            form.current, // <- 3. Usa o form.current aqui
            'b0BFn4EsTd7DArc20'
        )
        .then(
            (result) => {
                alert("Mensagem Enviada");
            },
            (error) => {
                alert("Erro ao enviar: " + error.text);
            }
        );

        e.target.reset();
    };

    return (
        <Container id="Contato" ref={form} onSubmit={handleSubmit}> {/* <- 2. Aplica ref e onSubmit aqui */}
            <Wrapper>
                <Title>Contato</Title>

                <ContactForm>
                    <ContactTilte>Envie uma mensagem</ContactTilte>
                    <ContactInput placeholder="Seu email" name="email" />
                    <ContactInput placeholder="Seu nome" name="name" />
                    <ContactInput placeholder="Assunto" name="subject" />
                    <ContactInputMessage placeholder="Mensagem" name="message" rows={4} />
                    <ContactButton type="submit" value="Enviar" />
                </ContactForm>
            </Wrapper>
        </Container>
    );
}
export default Contact