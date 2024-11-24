import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #fff5f5;
  color: #d32f2f;
`;

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

function Error() {
  return (
    <ErrorContainer>
      <ErrorMessage>Oops! Something went wrong.</ErrorMessage>
    </ErrorContainer>
  );
}

export default Error;
