import { Link } from "react-router-dom";

export default function Sidebar() {
    return(
        <div className="flex flex-col justify-between items-stretch border-r w-56 h-screen fixed">
            <div>
                <h1 className="text-4xl text-sky-400 font-bold p-6">Logo</h1>
                <nav className="flex flex-col">
                    <Link to="/" className="p-2 mx-1 rounded-md hover:bg-sky-400 hover:text-white font-medium">Dashboard</Link>
                    <Link to="/journal" className="p-2 mx-1 rounded-md hover:bg-sky-400 hover:text-white font-medium">Journal</Link>
                    <Link to="/settings" className="p-2 mx-1 rounded-md hover:bg-sky-400 hover:text-white font-medium">Settings</Link>
                </nav>
            </div>
            <div className="flex justify-start items-center gap-2 p-4 border-t">
                <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1729&q=80" alt="Maxime Boucher" />
                <div>
                    <p className="text-sm font-medium">Maxime Boucher</p>
                    <p className="text-xs text-gray-600">View Account</p>
                </div>
            </div>
        </div>
    )
}