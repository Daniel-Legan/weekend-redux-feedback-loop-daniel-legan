import { useEffect, useState } from 'react';
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

    // todo: break feedback into feedbackList and feedbackItem and add conditional rendering to each item
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Feeling</th>
                    <th>Understanding</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Review</th>
                </tr>
            </thead>
            <tbody>
                {/* {feedback.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.feeling}</td>
                            <td>{item.understanding}</td>
                            <td>{item.support}</td>
                            <td>{item.comments}</td>
                            <td>{item.flagged}</td>
                        </tr>
                    )
                })} */}
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
    );
}

export default Admin;