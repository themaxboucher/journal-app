import PageTitle from "../components/PageTitle";

export default function DashboardPage() {
    return(
        <main className="ml-56 py-16 px-24">
            <header className="flex justify-between items-end mb-4">
                <PageTitle title="Timeline" />
                <div className="flex justify-between items-center gap-4">
                    <select className="py-2 px-3 bg-slate-100 rounded-md outline-none cursor-pointer">
                        <option>Day</option>
                        <option>Week</option>
                        <option>Month</option>
                        <option>Quarter</option>
                        <option>Year</option>
                    </select>
                    <button className="py-2 px-3 border rounded-md hover:bg-slate-50">Today</button>
                </div>
            </header>
            <h2 className="text-slate-500">Thursday, September 8, 2022</h2>
            <section className="w-full flex justify-start gap-4 flex-wrap items-start">
                <div className="rounded-md p-6 w-fit border">
                    <ul>
                        <li>🌑 Woke up at 5:30 AM</li>
                        <li>🚀 Worked on new side project</li>
                        <li>💪 Worked out at school</li>
                        <li>✉️ Started new newsletter</li>
                    </ul>
                </div>
                <div className=" flex gap-2 h-56">
                    <img className="rounded-md" src="https://images.unsplash.com/photo-1617741679940-1477d98551f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"  alt="1" />
                    <img className="rounded-md" src="https://images.unsplash.com/photo-1516344924698-57bb260abd96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80"  alt="2" />
                    <img className="rounded-md" src="https://images.unsplash.com/photo-1660866838257-1ce2179b3b79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"  alt="3" />
                    <img className="rounded-md" src="https://images.unsplash.com/photo-1660866838257-1ce2179b3b79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"  alt="3" />
                    <img className="rounded-md" src="https://images.unsplash.com/photo-1660866838257-1ce2179b3b79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"  alt="3" />
                </div>
                <div className="border rounded-md p-6 w-fit">
                    <h2>You listened to:</h2>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>

            </section>
        </main>
    )
}