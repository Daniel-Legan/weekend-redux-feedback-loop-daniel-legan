import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

function Comments() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [newComment, setNewComment] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();

        dispatch({
            type: 'COMMENT_DATA',
            payload: newComment
        });

        history.push('/review');
    }

    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={evt => setNewComment(evt.target.value)}
                    value={newComment}
                />
                <button type="submit">NEXT</button>
            </form>
        </>
    );
}

export default Comments;