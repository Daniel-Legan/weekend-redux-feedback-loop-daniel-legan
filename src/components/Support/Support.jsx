import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

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
            <Header />
            <h1>How well are you being supported?</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    onChange={evt => setNewSupport(evt.target.value)}
                    value={newSupport}
                    required
                />
                <button type="submit">NEXT</button>
                <Link to='/understanding'>
                    <button>BACK</button>
                </Link>
            </form>
        </>
    );
}

export default Support;