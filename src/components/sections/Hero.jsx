import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { Bio } from "../../data/constants"
import { Typewriter } from 'react-simple-typewriter'
import HeroImg from "../../images/Foto_Perfil.jpg" 
import HeroBgAnimation from "../HeroBgAnimation"
import VanillaTilt from 'vanilla-tilt'
import { motion } from "framer-motion"
import{headContainerAnimation, headContentAnimation, headTextAnimation} from "../../utils/motion"
import StarCanvas from "../canvas/Stars"

const Container = styled.div`
    scroll-margin-top: 1000px;
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    z-index: 1;

    @media(max-width: 1070px) {
        padding: 66px 16px;    
    }

    @media(max-width: 640px) {
        padding: 32px 16px;
    }

    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
 `;

const HeroInnerContainer = styled.div`
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

const HeroLeftContainer = styled.div`
    width: 100%
    order: 1;
    @media(max-width: 1070px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        gap: 6px;
        flex-direction: column;
        align-items: center;
    }
 `;

const HeroRightContainer = styled.div`
    width: 100%
    order: 2;
    display: flex;
    justify-content: end;
      
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
    font-weight: 700px;
    font-size: 50px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;

    @media(max-width: 1070px){
        text-align: center;
    }

    @media(max-width: 640px){
     font-size: 40px;
     line-height: 48px;
     margin-bottom: 8px;
    }
`;

const TextLoop = styled.div`
    font-weight: 600px;
    font-size: 30px;
    display: flex;
    gap: 12px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;
    align-items: center;

    @media(max-width: 1070px){
        text-align: center;
        align-items: center;
        font-size: 24px;
    }

    @media(max-width: 640px){
        font-size: 22px;
        line-height: 48px;
        margin-bottom: 16px;
    }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  justify-content: flex-start; 

  @media(max-width: 640px){
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
  }
`;

const SubTitle = styled.div`
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 42px;
    color: ${({ theme }) => theme.text_primary + 95};

    @media(max-width: 1070px){
        text-aling: center;
    }

    @media(max-width: 640px){
     font-size: 16px;
     line-height: 32px;
    }
`;

const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;

    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    margin-top: 40px;
    color: white;
    
    background: hlsa(271, 100%, 50%, 1);
    background: linear-gradient(
        225deg,
        hsla(271, 100%, 50%, 1) 0%,
        hsla(294, 100%, 50%, 1) 100%
    );
    background: -moz-linear-gradient(
        225deg,
        hsla(271, 100%, 50%, 1) 0%,
        hsla(294, 100%, 50%, 1) 100%
    );
    background: -webkit-linear-gradient(
        225deg,
        hsla(271, 100%, 50%, 1) 0%,
        hsla(294, 100%, 50%, 1) 100%
    );
    box shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
    border-radius: 50px;
    font-weight: 600;
    font-size: 20px;

    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        box-shadow: 20px 20px 60px #1f2634,
        filter: brightness(1);
    }

    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
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
const HeroBg = styled.div`
    position: absolute;
    display: flex;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    max-width: 1360px;
    justify-content: end;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);

    @media (max-width: 1070px) {
        justify-content: center;
        padding: 0 0px;
    }
`;

const Hero = () => {
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
        <Container id="Inicio">
            <HeroBg>
                <StarCanvas/>
                <HeroBgAnimation/>
            </HeroBg>
            <motion.div {...headContainerAnimation}>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <motion.div {...headTextAnimation}>
                            <Title>
                                Olá, eu sou <br /> {Bio.name}
                            </Title>
                            <TextLoop>
                                Eu sou um
                                <Span>
                                    <Typewriter 
                                        words = {Bio.roles}
                                        loop = {false}
                                    />
                                </Span>
                            </TextLoop>
                        </motion.div>
                        <motion.div {...headContentAnimation}>
                            <SubTitle>{Bio.description}</SubTitle>
                        </motion.div>
                        
                        <ResumeButton href={Bio.resume} target="_blank">Ver Currículo</ResumeButton>
                    </HeroLeftContainer>
                    <HeroRightContainer>
                        <motion.div {...headContentAnimation}>
                            <Img ref={imgRef} src={HeroImg} alt="Wesley Franco" />
                        </motion.div>
                    </HeroRightContainer>
                </HeroInnerContainer>
            </motion.div>        
        </Container>
    )
};

export default Hero