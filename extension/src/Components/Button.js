import styled from "styled-components/macro";

const Button = styled.button`
  display: flex;
  height: 32px;
  width: ${(props) => props.width}px;
  justify-content: center;
  align-items: center;

  background-color: #ee6352;
  color: white;
  border: none;
  border-radius: 4px;
  margin: 4px 0;

  &:hover,
  &:active {
    background-color: #cc2a14;
    cursor: pointer;
  }
`;

export default Button;
