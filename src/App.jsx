import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  margin: 4rem;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">Hello Wild Oasis</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button>Check in</Button>
              <Button size="small" variation="secondary">
                Check out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">Your Info</Heading>
            <div>
              <Input placeholder="Enter a number"></Input>
              <Input placeholder="Enter a number"></Input>
            </div>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
