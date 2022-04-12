import { useContext } from 'react';
import { Link, useParams } from "react-router-dom";
import PostCard from "components/PostCard";
import { Context } from "contexts/Context";
import Container from 'components/common/Container';
import Section from 'components/common/Section';
import Row from 'components/common/Row';

const PostDetails = () => {
    let params = useParams();

    const { posts } = useContext(Context);

    const post = posts.filter((post) => parseInt(post.id) === parseInt(params.postId));

    return (
        <div className="post-details">

            <Section>
                <Container>
                    <Link to='/'>&lt; Home</Link>
                </Container>
            </Section>

            <Section>
                <Container>
                    <PostCard post={post[0]} />
                </Container>
            </Section>
        </div>
    );
}

export default PostDetails;