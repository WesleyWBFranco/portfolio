import React from "react"
import styled from "styled-components"
import { Bio } from "../../data/constants";

const FooterContainer = styled.div`
    width: 100%;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    margin-top: 200px;
`;

const FooterWrapper = styled.div`
    z-index: 10;
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: center;
    padding: 1rem;
    color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.div`
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.primary};
`;

const Nav = styled.ul`
    width: 100%;
    max-width: 800px;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;

    @media (max-width: 768px) {
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        text-align: center;
        font-size: 12px;
    }
`;

const NavLink = styled.a`

    display: inline-block;
    color: ${({ theme }) => theme.text_primary};
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.2s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const Verse = styled.div`
    font-family: italic;
    font-size: 20px;
    text-align: center;
    line-height: 32px;
    margin-top: 40px;
    color: ${({ theme }) => theme.text_primary + 95};

    @media(max-width: 1070px){
        text-aling: center;
        font-size: 16px
    }

    @media(max-width: 640px){
     font-size: 14px;
     line-height: 32px;
    }
`;

const Button = styled.a`
    display: inline-block;
    color: ${({ theme }) => theme.text_primary};
    font-family: italic;
    text-decoration: none;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    transition: all 0.6s ease-in-out;
    &:hover {
        color: ${({theme}) => theme.primary};
    }
`;

const Copyright = styled.p`
    margin-top: 1.5rem;
    font-size: 0.9rem;
    color: ${({theme}) => theme.soft2};
    text-align: center;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo>WFranco</Logo>
                <Nav>
                    <NavLink href="#Sobre">Sobre</NavLink>
                    <NavLink href="#Habilidades">Habilidades</NavLink>
                    <NavLink href="#Experiencia">Trajetória</NavLink>
                    <NavLink href="#Projetos">Projetos</NavLink>
                    <NavLink href="#Contato">Contato</NavLink>
                </Nav>
                <Verse>{Bio.verse}</Verse>
                <Button href={Bio.verse_link} target="_blank"> 
                    📖 {Bio.verse_ref} 
                </Button>
                <Copyright>&copy; 2025 Wesley Franco. Todos os direitos reservados.</Copyright>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer