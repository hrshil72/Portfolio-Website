import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/Constants";
import ProjectCards from "../Cards/ProjectCards";

const Projects = ({ openModal, setOpenModal }) => {
  let [toggle, setToggle] = useState("all");

  const Container = styled.div`
    background: linear-gradient(
      343.07deg,
      rgba(132, 59, 206, 0.06) 5.71%,
      rgba(132, 59, 206, 0) 64.83%
    );
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
  `;
  const Wrapper = styled.div`
    max-width: 1350px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 12px;
    padding: 10px 0px 100px 0px;
  `;
  const Title = styled.div`
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    margin-top: 12px;
    color: ${({ theme }) => theme.text_primary};

    @media screen and (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
    }
  `;
  const Desc = styled.div`
    font-size: 18px;
    max-width: 600px;
    text-align: center;
    color: ${({ theme }) => theme.text_secondary};

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  `;

  const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0;

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  `;

  const ToggleButton = styled.div`
    padding: 8px 18px;
    cursor: pointer;
    border-radius: 6px;

    ${({ active, theme }) =>
      active && `background-color:${({ theme }) => theme.primary + 20}`}

    &:hover {
      background-color: ${({ theme }) => theme.primary + 80};
    }

    @media screen and (max-width: 768px) {
      padding: 6px 8px;
      border-radius: 4px;
    }
  `;

  const Divider = styled.div`
    width: 1.5px;
    background-color: ${({ theme }) => theme.primary};
  `;

  const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
  `;

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From frontend to backend
          apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "frontend" ? (
            <ToggleButton
              active
              value="frontend"
              onClick={() => setToggle("frontend")}>
              FRONTEND
            </ToggleButton>
          ) : (
            <ToggleButton
              value="frontend"
              onClick={() => setToggle("frontend")}>
              FRONTEND
            </ToggleButton>
          )}
          <Divider />
          {toggle === "backend" ? (
            <ToggleButton
              active
              value="backend"
              onClick={() => setToggle("backend")}>
              BACKEND
            </ToggleButton>
          ) : (
            <ToggleButton value="backend" onClick={() => setToggle("backend")}>
              BACKEND
            </ToggleButton>
          )}
          <Divider />
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCards
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCards
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
