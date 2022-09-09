import PageTitle from "../components/PageTitle";

export default function JournalPage() {
    return(
        <main className="ml-56 py-16 px-24">
            <header className="flex justify-between items-end mb-4">
                <PageTitle title="Journal" />
                <div className="flex justify-between items-center gap-4">
                    <button className="py-2 px-3 border rounded-md hover:bg-slate-50">New</button>
                </div>
            </header>
            <div className="flex flex-col gap-4">
                <p className="font-bold">Thursday, September 8, 2022</p>
                <div className="p-4 rounded-md hover:bg-slate-50">
                    <p className="font-bold">What I did that week</p>
                    <ul>
                        <li>🌑 Woke up at 5:30 AM</li>
                        <li>🚀 Worked on new side project</li>
                        <li>💪 Worked out at school</li>
                        <li>✉️ Started new newsletter</li>
                    </ul>
                </div>
                <p className="font-bold">Thursday, September 8, 2022</p>
                <div className="p-4 rounded-md hover:bg-slate-50">
                    <p className="font-bold">What I did that day</p>
                    <ul>
                        <li>🌑 Woke up at 5:30 AM</li>
                        <li>🚀 Worked on new side project</li>
                        <li>💪 Worked out at school</li>
                        <li>✉️ Started new newsletter</li>
                    </ul>
                </div>

            </div>
        </main>
    )
}