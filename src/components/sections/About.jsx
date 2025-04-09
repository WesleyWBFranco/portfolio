import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import AboutImg from "../../images/Familia.jpg";
import VanillaTilt from 'vanilla-tilt';

const Container = styled.div`
    margin-bottom: 100px;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    z-index: 1;
    align-items: center;

    @media(max-width: 1070px) {
        padding: 66px 16px;
    }

    @media(max-width: 640px) {
        padding: 32px 16px;
    }

`;

const Wrapper = styled.div`
    margin-top: 100px;
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 40px;
    align-items: center;
    width: 100%;
    max-width: 1100px;

    @media(max-width: 1070px) {
        flex-direction: column; 
    }
`;

const AboutLeftContainer = styled.div`
    width: 100%;
    order: 1; 
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media(max-width: 1070px) {
        order: 2;
        margin-bottom: 30px;
        align-items: center; 
    }
`;

const AboutRightContainer = styled.div`
    width: 100%;
    order: 2; 
    display: flex;
    justify-content: flex-end; 

    @media(max-width: 1070px) {
        order: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 80px;
    }

    @media(max-width: 640px) {
        margin-bottom: 30px;
    }
`;

const Title = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    width: 100%; 

    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const SubTitle = styled.div`
    font-weight: 700px;
    font-size: 50px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;
    text-align: left; 

    @media(max-width: 1070px){
        text-align: center;
    }

    @media(max-width: 640px){
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: left; 
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};

    @media (max-width: 768px) {
        font-size: 16px;
        text-align: center; 
    }
`;


const Img = styled.img`
    border-radius: 50%;
    max-width: 400px;
    max-height: 400px;
    border: 2px solid ${({ theme }) => theme.primary};

    @media (max-width: 640px) {
        max-width: 280px;
        max-height: 280px;
    }
`;

const About = () => {
    const imgRef = useRef(null);

    useEffect(() => {
        if (imgRef.current) {
            VanillaTilt.init(imgRef.current, {
                max: 15,
                speed: 300,
                glare: true,
                "max-glare": 0.5,
            });
        }
    }, []);

    return (
        <Container id="Sobre">
            <Title>Sobre mim</Title>
            <Wrapper>
                <AboutLeftContainer>
                    <Img ref={imgRef} src={AboutImg} alt="Wesley Franco" />    
                </AboutLeftContainer>
                <AboutRightContainer>
                    <Desc>{Bio.description_family}</Desc>
                </AboutRightContainer>
            </Wrapper>
        </Container>
    )
};

export default About;