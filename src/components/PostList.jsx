import { useContext } from "react";
import { Context } from 'contexts/Context';
import PostCard from "components/PostCard";
const PostList = () => {

    const { posts } = useContext(Context)

    return (
        <>
            {posts.map(post => {
                return (
                    <div className="col-sm">
                        <PostCard post={post} key={post.id} />
                    </div>
                )
            })}
        </>
    );
}

export default PostList;