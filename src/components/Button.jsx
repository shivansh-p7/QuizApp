import styled from "styled-components";

const ButtonStyle = styled.button`
  background-color: red;
  margin: 2px;
  cursor: pointer;
  border: "none";
  width: 10rem;
`;

const Button = (props) => {
  return <ButtonStyle>{props.name}</ButtonStyle>;
};

export default Button;
