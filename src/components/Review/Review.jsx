import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import axios from 'axios';

function Review() {
    const history = useHistory();

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

    return (
        <>
            <h2>Feeling: {feeling}</h2>
            <h2>Understanding: {understanding}</h2>
            <h2>Support: {support}</h2>
            <h2>Comment: {comments}</h2>
            <button onClick={(evt) => handleFeedback(evt)}>SUBMIT</button>
        </>
    );
}

export default Review;