import React from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player'; // Importe o ReactPlayer

const Card = styled.div`
    width: 400px;
    height: 750px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    justify-content: space-between;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
        filter: brightness(1.1);
    }
`;

const VideoContainer = styled.div`
    width: 100%;
    height: 180px; /* Ajuste a altura conforme necessário */
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};

    @media only screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Button = styled.a`
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    font-weight: 600;
    text-align: center;
`;

const ProjectCard = ({ project }) => {
    return (
        <Card>
            <VideoContainer>
                <ReactPlayer
                    url={project.video} // URL completa do vídeo do YouTube
                    width="100%"
                    height="100%"
                    controls={true} // Mostra os controles do player
                    loop={true}
                    muted={false} // Você pode definir como false se quiser som por padrão
                    playing={false} // Defina como true para reprodução automática (cuidado com as políticas do navegador)
                />
            </VideoContainer>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Button href={project.github} target="_blank">
                Ver Código
            </Button>
        </Card>
    );
};

export default ProjectCard;