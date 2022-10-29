import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

function Feeling() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [newFeeling, setNewFeeling] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();

        dispatch({
            type: 'FEELING_DATA',
            payload: newFeeling
        });

        history.push('/understanding');
    }

    return (
        <>
            <h1>How are you feeling today?</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    onChange={evt => setNewFeeling(evt.target.value)}
                    value={newFeeling}
                    required
                />
                <button type="submit">NEXT</button>
            </form>
        </>
    );
}

export default Feeling;

