import { Link, useResolvedPath, useMatch } from 'react-router-dom'

export default function Navbar() {
    return(
        <nav className="navbar">
            <Link className="site-name" to="/">Task Manager</Link>
            <ul>
                <CustomLink to={'/all'}>All</CustomLink>
                <CustomLink to={'/done'}>Done</CustomLink>
                <CustomLink to={'/undone'}>Undone</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const path = useResolvedPath(to)
    const isActive = useMatch({ path: path.pathname, end: true })
    return(
        <li className={isActive ? 'active' : ''}>
            <Link to={to}>{children}</Link>
        </li>
    )
}