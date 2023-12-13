import { useRef } from "react"

export default function Home({tasks, setTasks})
{
    const inputRef = useRef(null)
    const handleAddTask = () => {
        setTasks([...tasks, { id: tasks.length + 1, text: inputRef.current.value, done:false }])
        alert('New task added successfuly!')
    }
    return(
        <form action="/add-task" onSubmit={e => e.preventDefault()}>
            <input ref={inputRef} type="text" placeholder="new task" />
            <button type="submit" onClick={handleAddTask}>Add</button>
        </form>
    )
}