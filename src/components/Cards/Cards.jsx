import React from "react";
import { experiences } from "../../data/Constants";
import styled from "styled-components";

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border: 0.1px solid #306ee8;
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;

  &hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }
`;
const Top = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;
const Logo = styled.div`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;

  @media screen and (max-width: 768px) {
    height: 40px;
  }
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Company = styled.div``;
const Date = styled.div``;

const Cards = ({ experience }) => {
  return (
    <Card>
      <Top>
        <Logo src={experience.img}></Logo>
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      {/* <Description></Description>
      {experiences.doc && (
        <a href={experience.doc} target="new">
          <Document />
        </a>
      )} */}
    </Card>
  );
};

export default Cards;