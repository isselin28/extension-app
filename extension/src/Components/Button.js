import styled from "styled-components/macro";

const Button = styled.button`
  display: flex;
  height: 32px;
  width: ${(props) => props.width}px;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => (props.primary ? "#ee6352" : "#3f97b9")};
  color: white;
  border: none;
  border-radius: 4px;
  margin: 4px 0;

  &:hover,
  &:active {
    background-color: ${(props) => (props.primary ? "#cc2a14" : "#09688c")};
    cursor: pointer;
  }
`;

export default Button;
