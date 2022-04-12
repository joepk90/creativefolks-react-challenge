import { useState, useContext } from 'react';
import CommentList from "components/CommentList";
import { Context } from 'contexts/Context';
import { filterComments } from 'lib/utilities';
import CommentForm from 'components/CommentForm';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {

    const { comments } = useContext(Context)

    const [showComments, setShowComments] = useState(false)

    const postComments = filterComments(post.id, comments)

    const renderToggleCommentsLink = () => {

        let hideCommentText = 'Hide Comments';
        let showCommentText = 'Show Comments';
        const showHideCommentsText = showComments ? hideCommentText : showCommentText;

        return (
            <a
                role="button"
                className='small d-block mb-3'
                onClick={() => setShowComments(!showComments)}
            >{showHideCommentsText} ({postComments.length})</a>
        );

    }

    const renderComments = () => {

        if (showComments === false) return (<></>);

        return (
            <>
                <CommentList postId={post.id} />
                <CommentForm postId={post.id} />
            </>
        )
    }

    return (
        <div className="post-card">
            <Link to={`/post/${post.id}`}>
                <h2 >{post.title}</h2>
            </Link>
            <p>The post id is {post.id}</p>

            {renderToggleCommentsLink()}
            {renderComments()}

        </div>
    );
}

export default PostCard;