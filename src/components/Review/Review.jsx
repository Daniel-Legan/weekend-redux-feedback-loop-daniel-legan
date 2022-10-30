import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Header from '../Header/Header';

function Review() {
    const history = useHistory();
    const dispatch = useDispatch();

    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);


    const feedback = {
        // Number() not necessary, but good for understanding data types going to the database
        feeling: Number(feeling),
        understanding: Number(understanding),
        support: Number(support),
        comments: comments
    }

    const handleFeedback = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        })
            .then((response) => {
                console.log('POST /feedback', response);
                // resets all the global state reducers to the initial state
                dispatch({
                    type: 'RESET'
                });
                // if post was successful, go to success page
                history.push('/success');
            })
            .catch((err) => {
                console.log('POST /feedback', err);
            });
    };

    const handleReset = () => {
        // resets all the global state reducers to the initial state
        dispatch({
            type: 'RESET'
        });
        history.push('/');
    };

    return (
        <>
            <Header />
            <section>
                <h2><u>Review Your Feedback</u></h2>
                <h3>Feeling: {feeling}</h3>
                <h3>Understanding: {understanding}</h3>
                <h3>Support: {support}</h3>
                <h3>Comments: {comments}</h3>
                <div>
                    <button className="reviewPageButtons" onClick={(evt) => handleFeedback(evt)}>SUBMIT</button>
                    <Link to='/comments'>
                        <button>BACK</button>
                    </Link>
                </div>
                <br />
                <div>
                    <button className="reviewPageButtons" onClick={handleReset}>RESET SURVEY</button>
                </div>
            </section>
        </>
    );
}

export default Review;