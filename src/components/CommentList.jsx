import { useContext } from "react";
import { Context } from 'contexts/Context';
import Comment from "components/Comment";

const CommentList = ({ postId }) => {

    const { comments } = useContext(Context);

    const filterComments = (postId) => {
        return comments.filter(comment => parseInt(comment.postId) === parseInt(postId))
    }

    return (
        <div className="comment-list">
            {filterComments(postId).map(comment => {
                return <Comment key={comment.id} comment={comment} />
            })}
        </div>
    );
}

export default CommentList;