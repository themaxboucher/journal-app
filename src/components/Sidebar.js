import { Link } from "react-router-dom";

export default function Sidebar() {
    return(
        <div className="flex flex-col justify-between items-stretch border-r w-48 h-screen fixed">
            <div>
                <h1 className="text-4xl text-sky-400 font-bold p-6">Logo</h1>
                <nav className="flex flex-col">
                    <Link to="/" className="p-2 mx-1 rounded-md hover:bg-sky-400 hover:text-white font-medium">Dashboard</Link>
                    <Link to="/journal" className="p-2 mx-1 rounded-md hover:bg-sky-400 hover:text-white font-medium">Journal</Link>
                    <Link to="/settings" className="p-2 mx-1 rounded-md hover:bg-sky-400 hover:text-white font-medium">Settings</Link>
                </nav>
            </div>
            <div className="flex items-center">
                <img src="../profile-fallback.jpg" alt="Maxime Boucher" className="w-10 rounded-full" />
                <div>
                    <p className="text-sm font-medium">Maxime Boucher</p>
                    <p className="text-xs text-gray-600">View Account</p>
                </div>
            </div>
        </div>
    )
}