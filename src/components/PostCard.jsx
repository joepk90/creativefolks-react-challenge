import CommentList from "components/CommentList";

const PostCard = ({ post }) => {

    return (
        <div className="post-card">
            <h2 >{post.title}</h2>
            <p>The post id is {post.id}</p>

            <CommentList postId={post.id} />

        </div>
    );
}

export default PostCard;