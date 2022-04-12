import { useState } from "react";
import Input from "components/common/Input";
import Button from "components/common/Button";
import Heading from 'components/common/Heading';
import FormGroup from "components/common/FormGroup";

const CommentForm = () => {

    const [postIdValue, setPostIdValue] = useState('');
    const [bodyValue, setBodyValue] = useState('');

    return (
        <form>
            <Heading level={5}>Add Comment</Heading>
            <FormGroup>
                <Input
                    type="number"
                    placeholder="id"
                    min="1"
                    value={postIdValue}
                    onChange={e => setPostIdValue(e.target.value)}
                />

                <Input
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