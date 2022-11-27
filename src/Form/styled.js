import styled from "styled-components";

export const ContentCreator = styled.form`
  display: flex;
  margin: 0;
  padding: 20px;
  border-top: 2px solid #ededed;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 10px 20px;
  border: 1px solid #b9b9b9;
`;

export const Button = styled.button`
  border: none;
  margin-left: 20px;
  padding: 10px 20px;
  background-color: #007382;
  color: #fff;
  transition: background-color 0.5s, transform 1s;

  @media (max-width: 767px) {
    margin-top: 20px;
    margin-left: 0;
  }

  @media (max-width: 475px) {
    margin-top: 20px;
    margin-left: 0;
  }

  &:hover {
    background-color: #00b0c7;
    transform: scale(1.1);
  }
`;
