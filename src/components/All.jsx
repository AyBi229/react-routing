export default function All({ tasks, handleCheck })
{
    return(
        tasks.map((task) => <div key={task.id}><input type="checkbox" checked={task.done} onChange={() => handleCheck(task.id)} />{task.text}</div>)
    )
}