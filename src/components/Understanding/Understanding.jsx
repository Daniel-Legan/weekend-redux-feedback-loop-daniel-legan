import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

function Understanding() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [newUnderstanding, setNewUnderstanding] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();

        dispatch({
            type: 'UNDERSTANDING_DATA',
            payload: newUnderstanding
        });

        history.push('/support');
    }

    return (
        <>
            <h1>How well are you understanding the content?</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    onChange={evt => setNewUnderstanding(evt.target.value)}
                    value={newUnderstanding}
                    required
                />
                <button type="submit">NEXT</button>
                <Link to='/'>
                    <button>BACK</button>
                </Link>
            </form>
        </>
    );
}

export default Understanding;