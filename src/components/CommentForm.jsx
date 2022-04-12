import { useState, useContext } from "react";
import Input from "components/common/Input";
import Button from "components/common/Button";
import Heading from 'components/common/Heading';
import FormGroup from "components/common/FormGroup";
import TextArea from "components/common/TextArea";
import { Context } from "contexts/Context";
import { addComment } from "contexts/reducers";

const CommentForm = ({ postId }) => {

    const [postIdValue, setPostIdValue] = useState('');
    const [bodyValue, setBodyValue] = useState('');
    const [showIdValidationMessage, setShowIdValidationMessage] = useState(false);

    const { dispatch, comments } = useContext(Context);

    const handleIdInputOnChange = (id) => {
        setPostIdValue(id);

        if (isPostIdCorrect(id) === true) {
            setShowIdValidationMessage(false)
            return;
        }

        setShowIdValidationMessage(true)
    }

    const isPostIdCorrect = (id) => {
        if (parseInt(id) === parseInt(postId)) return true
        return false;
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (isPostIdCorrect(postIdValue) === false) {
            return;
        }

        dispatch(addComment({
            body: bodyValue,
            id: comments.length + 1,
            postId: postIdValue,
        }))

        setPostIdValue('');
        setBodyValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <Heading level={5}>Add Comment</Heading>
            <FormGroup>
                <Input
                    type="number"
                    placeholder="id"
                    min="1"
                    value={postIdValue}
                    onChange={e => handleIdInputOnChange(e.target.value)}
                />

                <span className='text-danger' style={{ display: showIdValidationMessage ? 'block' : 'none' }}>ID does not match Post Id</span>

                <TextArea
                    type="text"
                    placeholder="Comment body..."
                    value={bodyValue}
                    onChange={e => setBodyValue(e.target.value)}
                />
                <Button type="submit" value="add comment">Add Comment</Button>
            </FormGroup>
        </form>
    );
}

export default CommentForm;