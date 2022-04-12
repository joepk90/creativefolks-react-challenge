import PostList from 'components/PostList';
import ContextProvidor from 'contexts/Context';
import Container from 'components/common/Container';
import Section from 'components/common/Section';
import Row from 'components/common/Row';
import Heading from 'components/common/Heading';

function App() {
  return (
    <div className="App">
      <ContextProvidor>

        <Section>
          <Container>
            <Heading>React Challenge</Heading>
          </Container>
        </Section>

        <Section>
          <Container>
            <Row>
              <PostList />
            </Row>
          </Container>
        </Section>

      </ContextProvidor>
    </div>
  );
}

export default App;
