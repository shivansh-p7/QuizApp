import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: column;
  width: 90%;
`;
const Button = styled.button`
  background-color: rgb(115, 197, 197);
  margin: 5px;
  padding: 2px;
  cursor: pointer;
  border: "none";
  width: 15rem;
  height: 2.5rem;
`;

const Options = (props) => {
  return (
    <Container>
      <Button onClick={() => props.nextQuestion(0)}>
        {props.options[0].answer}
      </Button>

      <Button onClick={() => props.nextQuestion(1)}>
        {props.options[1].answer}
      </Button>

      <br />

      <Button onClick={() => props.nextQuestion(2)}>
        {props.options[2].answer}
      </Button>

      <Button onClick={() => props.nextQuestion(3)}>
        {props.options[3].answer}
      </Button>
    </Container>
  );
};

export default Options;
