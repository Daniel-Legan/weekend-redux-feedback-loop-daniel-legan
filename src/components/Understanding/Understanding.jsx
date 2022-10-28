import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

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
            <h1>HOW WELL DID YOU UNDERSTAND TODAY'S MATERIAL?</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    onChange={evt => setNewUnderstanding(evt.target.value)}
                    value={newUnderstanding}
                    required
                />
                <button type="submit">NEXT</button>
            </form>
        </>
    );
}

export default Understanding;