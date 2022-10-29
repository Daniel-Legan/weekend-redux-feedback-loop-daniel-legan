import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Header from '../Header/Header';

function Feeling() {
    // used to monitor global state in conjunction with the handleReset from the Review component
    const feelingStatus = useSelector(store => store.feeling);
    console.log('feelingStatus is:', feelingStatus);

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

    // useEffect(() => {
    //     console.log(`previous answer: ${previousFeeling}`);
    // }, []);

    return (
        <>
            <Header />
            <h1>How are you feeling today?</h1>
            <form onSubmit={handleSubmit}>
                {/* name must match across all radio buttons to toggle between them */}
                <input type="radio" name="question" id="1" onChange={() => setNewFeeling('1')} required />
                <label htmlFor="one">1</label>
                <input type="radio" name="question" id="2" onChange={() => setNewFeeling('2')} required />
                <label htmlFor="two">2</label>
                <input type="radio" name="question" id="3" onChange={() => setNewFeeling('3')} required />
                <label htmlFor="three">3</label>
                <input type="radio" name="question" id="4" onChange={() => setNewFeeling('4')} required />
                <label htmlFor="four">4</label>
                <input type="radio" name="question" id="5" onChange={() => setNewFeeling('5')} required />
                <label htmlFor="five">5</label>

                <button type="submit">NEXT</button>
            </form>
            <div>Feeling Status: {feelingStatus}</div>
        </>
    );
}

export default Feeling;

