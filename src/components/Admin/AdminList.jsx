import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import AdminItem from '../AdminItem/AdminItem';

function Admin() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchFeedback();
    }, []);

    // GET
    const fetchFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        })
            .then((response) => {
                dispatch({
                    type: 'SET_FEEDBACK',
                    payload: response.data
                });
            })
            .catch(err => console.error('GET /feedback', err));
    };

    // PUT (UPDATE)
    const updateFlagged = (id) => {
        console.log('in updateFlagged with id', id);
        axios.put(`/feedback/flagged/${id}`)
            .then(response => {
                console.log('PUT response.data from server', response.data); // Ok
                fetchFeedback();
            })
            .catch(err => {
                console.log('PUT err from server', err);
            })
    };

    // DELETE
    const deleteFeedback = (id) => {
        axios({
            method: 'DELETE',
            url: `/feedback/flagged/${id}`
        })
            .then(response => {
                console.log('DELETE response from server', response.data); // Ok
                fetchFeedback()
            })
            .catch(err => {
                console.log('DELETE err from server', err);
            })
    };

    const feedback = useSelector(store => store.feedback);
    console.log(feedback);
    return (
        <>
            <h1>Feedback Results</h1>
            <table cellSpacing={0} className='table'>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Needs Review</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {feedback.map(item => (
                        <AdminItem
                            key={item.id}
                            item={item}
                            updateFlagged={updateFlagged}
                            deleteFeedback={deleteFeedback}
                        />
                    ))}
                </tbody>
            </table>
        </>

    );
}

export default Admin;