import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Header from '../Header/Header';

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

    const previousFeeling = useSelector(store => store.feeling);

    useEffect(() => {
        console.log(`previous answer: ${previousFeeling}`);
    }, []);

    return (
        <>
            <Header />
            <h1>How are you feeling today?</h1>
            <form onSubmit={handleSubmit}>

                <input type="radio" name="question" id="1" onChange={() => setNewFeeling('1')} required/>
                <label htmlFor="one">1</label>
                <input type="radio" name="question" id="2" onChange={() => setNewFeeling('2')} required />
                <label htmlFor="one">2</label>
                <input type="radio" name="question" id="3" onChange={() => setNewFeeling('3')} required />
                <label htmlFor="one">3</label>
                <input type="radio" name="question" id="4" onChange={() => setNewFeeling('4')} required />
                <label htmlFor="one">4</label>
                <input type="radio" name="question" id="5" onChange={() => setNewFeeling('5')} required />
                <label htmlFor="one">5</label>

                <button type="submit">NEXT</button>
            </form>
            <div>Previous Answer: {previousFeeling}</div>
        </>
    );
}

export default Feeling;

