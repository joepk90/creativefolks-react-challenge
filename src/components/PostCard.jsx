const PostCard = ({ post }) => {

    return (
        <div className="post-card">
            <h2 >{post.title}</h2>
            <div>The post id is {post.id}</div>
        </div>
    );
}

export default PostCard;