import { useContext } from "react";
import { Context } from 'contexts/Context';
import Comment from "components/Comment";
import { filterComments } from "lib/utilities";

const CommentList = ({ postId }) => {

    const { comments } = useContext(Context);

    const postComments = filterComments(postId, comments)

    return (
        <div className="comment-list mb-5">
            {postComments.map(comment => {
                return <Comment key={comment.id} comment={comment} />
            })}
        </div>
    );
}

export default CommentList;