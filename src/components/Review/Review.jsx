import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import axios from 'axios';

function Review() {
    const history = useHistory();
    const dispatch = useDispatch();

    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);


    const feedback = {
        feeling: feeling,
        understanding: understanding,
        support: support,
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
                history.push('/success');
            })
            .catch((err) => {
                console.log('POST /feedback', err);
            });
    };

    const handleReset = () => {
        console.log('in handleReset');
        dispatch({
            type: 'RESET'
        });

        history.push('/');
    };

    return (
        <>
            <h2>Review Your Feedback</h2>
            <h3>Feeling: {feeling}</h3>
            <h3>Understanding: {understanding}</h3>
            <h3>Support: {support}</h3>
            <h3>Comment: {comments}</h3>
            <button onClick={(evt) => handleFeedback(evt)}>SUBMIT</button>
            {/* todo: update global state instead of link to home */}
            <Link to='/comments'>
                <button>BACK</button>
            </Link>
                <button onClick={handleReset}>RESET</button>
        </>
    );
}

export default Review;