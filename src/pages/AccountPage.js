import PageTitle from "../components/PageTitle";

export default function AccountPage() {
    return(
        <main className="ml-56 py-16 px-24">
            <header className="flex justify-between items-end mb-4">
                <PageTitle title="Account" />
            </header>
            <h2>Active Plan</h2>
            <p>Your active plan is:</p>
            <form>
                <label>First Name</label>
                <input type="text" />
                <label>Last Name</label>
                <input type="text" />
                <label>Email</label>
                <input type="email" />
                <button type="submit">Save</button>
            </form>
        </main>
    )
}