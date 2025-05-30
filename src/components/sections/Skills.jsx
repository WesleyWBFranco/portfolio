import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import VanillaTilt from 'vanilla-tilt';

const Container = styled.div`
    scroll-margin-top: 80px;
    margin-top: 100px;
    margin-bottom: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
`;

const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    gap: 50px;
    justify-content: center;

`;

const Skill = styled.div`
    width: 100%;
    max-width: 500px;
    backgorund-color: rgba(17, 25, 40, 0.83);
    border: 1px solid rgba(255, 255, 255, 0.125);
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    border-radius: 16px;
    padding: 18px 36px;

    @media (max-width: 768px) {
        max-width: 400px;
        padding: 10px 36px;
    }

    @media (max-width: 500px) {
        max-width: 330px;
        padding: 10px 36px;
    }
`;

const SkillTitle = styled.div`
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
    color: ${({ theme }) => theme.text_secondary};
`;

const SkillList = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 20px;
    flex-wrap: wrap;
`;

const SkillItem = styled.div`
    font-size: 16px;
    font-wight: 400;
    color: ${({ theme }) => theme.text_primary + 80};
    border: 1px solid ${({ theme }) => theme.text_primary + 80};
    border-radius: 12px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    
    @media (max-width: 768px) {
        font-size: 14px;
        padding: 8px 12px;
    }

    @media (max-width: 500px) {
        font-size: 14px;
        padding: 6px 12px;
    }
`;

const SkillImage = styled.img`
     width: 24px;
     height: 24px;
`;

const Skills = () => {
    const skillRefs = useRef([]); 

    useEffect(() => {
      skillRefs.current.forEach(ref => {
        if (ref) {
          VanillaTilt.init(ref, {
            max: 10,
            speed: 300,
            glare: true,
            "max-glare": 0.3,
          });
        }
      });

    return () => {
        skillRefs.current = [];
      };
    }, []);

    return (
        <Container id="Habilidades"> 
            <Wrapper>
                <Title>Habilidades</Title>
                <Desc
                    style={{
                        marginBottom: "40px",
                    }}
                >
                    Aqui estão algumas das habilidades que desenvolvi ao longo da faculdade, emprego e projetos pessoais.
                </Desc>
                <SkillsContainer>
                    {skills.map((skill, index) => (
                        <Skill 
                            key={`skill-${index}`}
                            ref={(el) => (skillRefs.current[index] = el)}
                        >
                            <SkillTitle>{skill.title}</SkillTitle>
                            <SkillList>
                                {skill.skills.map((item, index_x) => (
                                    <SkillItem key={`skill-${index_x}`}>
                                        <SkillImage src={item.image} />
                                        {item.name}
                                    </SkillItem>
                                ))}
                            </SkillList>
                        </Skill>                        
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>
    )
};

export default Skills