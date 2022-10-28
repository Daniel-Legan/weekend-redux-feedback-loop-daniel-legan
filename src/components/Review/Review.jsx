import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Review() {
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);

    console.log(feeling, understanding, support, comments);

    return (
        <>
            <h2>Feeling: {feeling}</h2>
            <h2>Understanding: {understanding}</h2>
            <h2>Support: {support}</h2>
            <h2>Comment: {comments}</h2>
            <Link to="/success">
                <button type="submit">SUBMIT</button>
            </Link>
        </>
    );
}

export default Review;