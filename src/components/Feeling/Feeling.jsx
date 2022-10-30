import { useState } from 'react';
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
                {/* should be structured like this on next two pages? */}
                <label htmlFor="one">
                    <input type="radio" name="question" id="1" onChange={() => setNewFeeling('1')} required />
                    <b>1</b>
                </label>
                {/* <input type="radio" name="question" id="1" onChange={() => setNewFeeling('1')} required /> */}
                <input type="radio" name="question" id="2" onChange={() => setNewFeeling('2')} required />
                <label htmlFor="two"><b>2</b></label>
                <input type="radio" name="question" id="3" onChange={() => setNewFeeling('3')} required />
                <label htmlFor="three"><b>3</b></label>
                <input type="radio" name="question" id="4" onChange={() => setNewFeeling('4')} required />
                <label htmlFor="four"><b>4</b></label>
                <input type="radio" name="question" id="5" onChange={() => setNewFeeling('5')} required />
                <label htmlFor="five"><b>5</b></label>

                <button type="submit">NEXT</button>
            </form>
        </>
    );
}

export default Feeling;

