

function AdminItem({ updateFlagged, deleteFeedback, item }) {
    return (
        <tr key={item.id}>
            <td>{item.feeling}</td>
            <td>{item.understanding}</td>
            <td>{item.support}</td>
            <td>{item.comments}</td>
            <td>{(item.flagged === true) ? 'review' : 'okay'}</td>
            <td>
                <button onClick={() => { updateFlagged(item.id) }}>Toggle</button>
            </td>
            <td>
                <button onClick={() => { deleteFeedback(item.id) }}>Delete</button>
            </td>
        </tr>
    );
}

export default AdminItem;