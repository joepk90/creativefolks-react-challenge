import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from "components/CommentList";
import { Context } from 'contexts/Context';
import { filterComments } from 'lib/utilities';
import CommentForm from 'components/CommentForm';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button';

const PostCard = ({ post }) => {

    let params = useParams();

    const { comments } = useContext(Context)

    const [showComments, setShowComments] = useState(false)

    const postComments = filterComments(post.id, comments)

    const renderTitle = () => {

        const title = <h2 >{post.title}</h2>

        if (parseInt(params.postId) === parseInt(post.id)) return title;

        return (
            <Link to={`/post/${post.id}`}>
                {title}
            </Link>
        )
    }

    const renderToggleCommentsLink = () => {

        let hideCommentText = 'Hide Comments';
        let showCommentText = 'Show Comments';
        const showHideCommentsText = showComments ? hideCommentText : showCommentText;

        return (
            <Button
                className='btn btn-link px-0'
                onClick={() => setShowComments(!showComments)}
            >{showHideCommentsText} ({postComments.length})</Button>
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
            {renderTitle()}
            <p>The post id is {post.id}</p>

            {renderToggleCommentsLink()}
            {renderComments()}

        </div>
    );
}

export default PostCard;