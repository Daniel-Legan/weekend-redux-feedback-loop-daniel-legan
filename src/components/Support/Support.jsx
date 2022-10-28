import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

function Support() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [newSupport, setNewSupport] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();

        dispatch({
            type: 'SUPPORT_DATA',
            payload: newSupport
        });

        history.push('/comments');
    }

    return (
        <>
            <h1>HOW WELL DID YOU FEEL SUPPORTED?</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    onChange={evt => setNewSupport(evt.target.value)}
                    value={newSupport}
                />
                <button type="submit">NEXT</button>
            </form>
        </>
    );
}

export default Support;