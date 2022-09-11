import { useState } from "react";
import PageTitle from "../components/PageTitle";

export default function JournalPage() {

    const [pageMode, setPageMode] = useState('entries');

    const [entries] = useState([
        {
            id: 1,
            type: "Week",
            entryPeriod: "Monday, September 5, 2022 → Sunday, September 11, 2022",
            prompt1Content: [
                {
                    symbol: "🌋",
                    title: "Worked on new side project",
                    description: null,
                },
                {
                    symbol: "🌋",
                    title: "Worked out at school",
                    description: null,
                },
            ]
        },
        {
            id: 2,
            type: "Day",
            entryPeriod: "Thursday, September 8, 2022",
            prompt1Content: [
                {
                    symbol: "🌋",
                    title: "Worked on new side project",
                    description: null,
                },
                {
                    symbol: "🌋",
                    title: "Worked out at school",
                    description: null,
                },
            ]
        },
        {
            id: 3,
            type: "Year",
            entryPeriod: "2021",
            prompt1Content: [
                {
                    symbol: "🌋",
                    title: "Worked on new side project",
                    description: null,
                },
                {
                    symbol: "🌋",
                    title: "Worked out at school",
                    description: null,
                },
            ]
        },
    ]);

    const handleEntryClick = (entryId) => {
        setPageMode('entry');

    }

    return(
        <main className="ml-56 py-16 px-24">
            <header className="flex justify-between items-end mb-4">
                <PageTitle title="Journal" />
                {pageMode === 'entries' && (
                        <div className="flex justify-between items-center gap-4">
                            <button className="py-2 px-3 border rounded-md hover:bg-slate-50">Filter</button>
                            <button className="py-2 px-3 border rounded-md hover:bg-slate-50">New</button>
                        </div>
                    )
                }
                {pageMode === 'entry' && (
                        <div className="flex justify-between items-center gap-4">
                            <button className="py-2 px-3 border rounded-md hover:bg-slate-50" onClick={() => setPageMode('entries')}>Back</button>
                            <button className="py-2 px-3 border rounded-md hover:bg-slate-50">Edit</button>
                        </div>
                    )
                }
            </header>
            
            {pageMode === 'entries' && (
                    <ol className="relative border-l">
                        {entries.map((entry) => {

                            return(
                                <li className="mb-10 ml-4 p-4 rounded-md hover:bg-slate-50 cursor-pointer" onClick={() => handleEntryClick(entry.id)}>
                                    <div className="absolute w-3 h-3 bg-slate-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                    <div className="flex justify-start items-center gap-2 mb-1">
                                        <div className="text-xs px-2 py-1 bg-amber-100 text-amber-600 rounded-full">{entry.type}</div>
                                        <time className="text-sm font-normal leading-none text-gray-500">{entry.entryPeriod}</time>
                                    </div>
                                    <h3 className="text-md font-semibold text-gray-900 pt-1">What I did that {entry.type.toLowerCase()}</h3>
                                    <ul className="text-slate-600">
                                        {entry.prompt1Content.map((bullet) => {
                                            return <li>{bullet.symbol} {bullet.title}</li>
                                        })}
                                    </ul>
                                </li>
                            );
                        })}
                    </ol>
                )
            }

            {pageMode === 'entry' && (
                    <div>
                        <p>your in display entry mode</p>
                        {entries.map((entry) => {

                            return(
                                <div className="mb-10 ml-4 p-4 rounded-md hover:bg-slate-50">
                                    <div className="absolute w-3 h-3 bg-slate-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                    <div className="flex justify-start items-center gap-2 mb-1">
                                        <div className="text-xs px-2 py-1 bg-amber-100 text-amber-600 rounded-full">{entry.type}</div>
                                        <time className="text-sm font-normal leading-none text-gray-500">{entry.entryPeriod}</time>
                                    </div>
                                    <h3 className="text-md font-semibold text-gray-900 pt-1">What I did that {entry.type.toLowerCase()}</h3>
                                    <ul className="text-slate-600">
                                        {entry.prompt1Content.map((bullet) => {
                                            return <li>{bullet.symbol} {bullet.title}</li>
                                        })}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                )
            }

        </main>
    )
}