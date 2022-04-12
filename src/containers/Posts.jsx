import PostList from "components/PostList";
import Container from 'components/common/Container';
import Section from 'components/common/Section';
import Row from 'components/common/Row';
import Heading from 'components/common/Heading';

const Posts = () => {
    return (
        <div className="posts">
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
        </div>
    );
}

export default Posts;