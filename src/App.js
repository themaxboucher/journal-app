import { Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AccountPage from "./pages/AccountPage";
import DashboardPage from "./pages/DashboardPage";
import JournalPage from "./pages/JournalPage";
import SettingsPage from "./pages/SettingsPage";


function App() {
  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route path='/' exact>
          <DashboardPage />
        </Route>
        <Route path='/journal'>
          <JournalPage />
        </Route>
        <Route path='/settings'>
          <SettingsPage />
        </Route>
        <Route path='/account'>
          <AccountPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
