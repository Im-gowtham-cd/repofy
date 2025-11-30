export default function Nav() {
    return(
        <>
        <nav>
            <h1 className="nav-title">Repofy</h1>
            <ul className="nav-list">
                <a href="/">Home</a>
                <a href="/about">About</a>  
                <a href="/contact">Contact</a>
            </ul>
            <i className='bx  bx-menu-notification' id="nav-hover"></i>
        </nav>
        </>
    )
}