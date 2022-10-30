import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

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
            <Header />
            <h1>How well are you understanding the content?</h1>
            <form onSubmit={handleSubmit}>
                {/* <input
                    type="number"
                    onChange={evt => setNewUnderstanding(evt.target.value)}
                    value={newUnderstanding}
                    required
                /> */}
                <input type="radio" name="question" id="1" onChange={() => setNewUnderstanding('1')} required />
                <label htmlFor="one"><b>1</b></label>
                <input type="radio" name="question" id="2" onChange={() => setNewUnderstanding('2')} required />
                <label htmlFor="two"><b>2</b></label>
                <input type="radio" name="question" id="3" onChange={() => setNewUnderstanding('3')} required />
                <label htmlFor="three"><b>3</b></label>
                <input type="radio" name="question" id="4" onChange={() => setNewUnderstanding('4')} required />
                <label htmlFor="four"><b>4</b></label>
                <input type="radio" name="question" id="5" onChange={() => setNewUnderstanding('5')} required />
                <label htmlFor="five"><b>5</b></label>

                <button type="submit">NEXT</button>
                <Link to='/'>
                    <button>BACK</button>
                </Link>
            </form>
        </>
    );
}

export default Understanding;