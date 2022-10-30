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
                {/* <input
                    type="number"
                    onChange={evt => setNewSupport(evt.target.value)}
                    value={newSupport}
                    required
                /> */}
                <div className="radio-box">
                    <input type="radio" name="question" id="1" onChange={() => setNewSupport('1')} required />
                    <label htmlFor="two"><b>1</b></label>
                </div>
                <div className="radio-box">
                    <input type="radio" name="question" id="2" onChange={() => setNewSupport('2')} required />
                    <label htmlFor="two"><b>2</b></label>
                </div>
                <div className="radio-box">
                    <input type="radio" name="question" id="3" onChange={() => setNewSupport('3')} required />
                    <label htmlFor="three"><b>3</b></label>
                </div>
                <div className="radio-box">
                    <input type="radio" name="question" id="4" onChange={() => setNewSupport('4')} required />
                    <label htmlFor="four"><b>4</b></label>
                </div>
                <div className="radio-box">
                    <input type="radio" name="question" id="5" onChange={() => setNewSupport('5')} required />
                    <label htmlFor="five"><b>5</b></label>
                </div>
                <button type="submit">NEXT</button>
                <Link to='/understanding'>
                    <button>BACK</button>
                </Link>
            </form>
        </>
    );
}

export default Support;