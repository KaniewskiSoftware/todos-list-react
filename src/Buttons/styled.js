import styled from "styled-components";

export const ButtonsContainer = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
  }
`;

export const Button = styled.button`
  padding: 20px;
  color: #007382;
  background-color: #fff;
  border: none;
  transition: color 0.5s;

  &:hover {
    color: #00b0c7;
  }

  &:disabled {
    color: rgb(199, 199, 199);

    &:hover {
      color: rgb(199, 199, 199);
    }
  }
`;
