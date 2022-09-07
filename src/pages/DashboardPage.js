import PageTitle from "../components/PageTitle";

export default function DashboardPage() {
    return(
        <main className="ml-56 py-16 px-24">
            <header className="flex justify-between items-end">
                <PageTitle title="Dashboard" />
                <div>
                    <select>
                        <option>Day</option>
                        <option>Week</option>
                        <option>Month</option>
                        <option>Quarter</option>
                        <option>Year</option>
                    </select>
                    <button>Today</button>
                </div>
            </header>
            <div className="bg-slate-400 rounded-md w-full h-56"></div>
        </main>
    )
}