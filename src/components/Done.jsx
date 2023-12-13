export default function Done({tasks, handleCheck })
{
    return(
        tasks.filter((task) => task.done).map((task) => <div key={task.id}><input type="checkbox" checked={task.done} onChange={() => handleCheck(task.id)} />{task.text}</div>)
    )
}