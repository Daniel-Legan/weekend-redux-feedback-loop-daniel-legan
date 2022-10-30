import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

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
            <Header />
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={handleSubmit}>
                <input
                    id="feedbackInput"
                    type="text"
                    onChange={evt => setNewComment(evt.target.value)}
                    value={newComment}
                />
                <button type="submit">NEXT</button>
                <Link to='/support'>
                    <button>BACK</button>
                </Link>
            </form>
        </>
    );
}

export default Comments;