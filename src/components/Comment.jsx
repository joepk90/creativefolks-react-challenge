import Heading from 'components/common/Heading';

const Comment = ({ comment }) => {

    const { body, id, postId } = comment;

    return (
        <div className="bg-faded rounded p-4 mb-2">
            <Heading level={6}>This comment belongs to the post ID: {postId}</Heading>
            <p>{body}</p>
            <p>Comment ID: {id} - Comment Post ID: {postId}</p>
        </div>
    );
}

export default Comment;