import styled from "styled-components";

const Container = styled.div`
  margin: 2rem;
  height: 50%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Questions = (props) => {
  return (
    <Container>
      <h1> {props.questions}</h1>
    </Container>
  );
};

export default Questions;
