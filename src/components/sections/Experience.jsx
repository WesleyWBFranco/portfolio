import React from "react";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import { lighten } from 'polished';

const Container = styled.div`
    scroll-margin-top: 100px;
    margin-top: 100px;
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
    justify-content: center; 
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    gap: 40px;
    padding: 0 20px; 

    @media (max-width: 768px) {
        padding: 0 20px;
    }
`;

const Title = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};

    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

const Timeline = styled.div`
    position: relative;
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center; 
`;

const Line = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 4px; 
    height: 100%;
    background-color: ${({ theme }) => theme.primary};
    transform: translateX(-50%);
    z-index: 0; 

    @media (max-width: 768px) {
        left: 10px;
        transform: translateX(0);
    }
`;

const TimelineItem = styled.div`
    display: flex;
    justify-content: ${({ index }) => (index % 2 === 0 ? "flex-start" : "flex-end")};
    margin-bottom: 40px;
    width: 100%;
    padding: 0;
    box-sizing: border-box;
    align-items: center; 
    position: relative; 
`;

const TimelineDot = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 50%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    transform: translateX(-50%); 
    top: 0; 
    margin-top: 0; 

    @media (max-width: 768px) {
        left: 10px;
        transform: translateX(-50%);
    }
`;

const DotImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: contain;
`;

const Card = styled.div`
    color: ${({ theme }) => theme.text_secondary};
    border-radius: 10px;
    padding: 15px;
    backgorund-color: rgba(17, 25, 40, 0.83);
    border: 1px solid rgba(255, 255, 255, 0.125);
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    width: 45%;
    box-sizing: border-box;

    @media (max-width: 768px) {
        width: 90%;
        margin-left: 65px;
        margin-right: 0;
    }
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const CardHeader = styled.div`
display: flex;
align-items: center;
margin-bottom: 8px;
`;

const HeaderLeft = styled.div`
display: flex;
align-items: center;
margin-right: 10px; 
`;

const HeaderRight = styled.div`
display: flex;
flex-direction: column;
`;



const Company = styled.h3`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text_primary};
    margin: 0;
`;

const Date = styled.p`
    font-size: 0.9rem;
    color: ${({ theme }) => lighten(0.4, theme.text_secondary)};
    margin: 0;
`;

const Desc = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
`;

const DateOpposite = styled.p`
    font-size: 0.9rem;
    color: ${({ theme }) => lighten(0.4, theme.text_secondary)};
    margin: 0;
    white-space: nowrap; 
    position: absolute;
    top: 13px; 
    left: ${({ index }) => (index % 2 === 0 ? 'calc(50% + 40px)' : 'auto')};
    right: ${({ index }) => (index % 2 !== 0 ? 'calc(50% + 40px)' : 'auto')};
    opacity: 1;

    @media (max-width: 768px) {
        left: 35px;
        right: auto;
        opacity: 0;
    }
`;

const Experience = () => {
    return (
        <Container id="Trajetoria">
            <Wrapper>
                <Title>Trajetória</Title>
                <Timeline>
                    <Line />
                    {experiences.map((experience, index) => (
                        <TimelineItem key={experience.id} index={index}>
                            <TimelineDot>
                                <DotImage src={experience.img} alt={experience.company} />
                            </TimelineDot>
                            <Card index={index}>
                                <CardContent>
                                <CardHeader>
                                        <HeaderLeft>
                                            <img src={experience.img} alt={experience.company} style={{ width: '40px', height: '40px', borderRadius: '10%', objectFit: 'contain' }} />
                                        </HeaderLeft>
                                        <HeaderRight>
                                            <Company>{experience.company}</Company>
                                            <Date>{experience.date}</Date>
                                        </HeaderRight>
                                    </CardHeader>
                                    <Desc>{experience.desc}</Desc>
                                </CardContent>
                            </Card>
                            <DateOpposite index={index}>{experience.date}</DateOpposite>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Wrapper>
        </Container>
    );
};

export default Experience;