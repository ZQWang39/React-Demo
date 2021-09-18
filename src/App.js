// import Todo from "./components/Todo";
import { Route, Switch } from "react-router-dom";
import AllMeetups from "./components/pages/AllMeetups";
import Favorites from "./components/pages/Favorites";
import NewMeetup from "./components/pages/NewMeetup";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <AllMeetups />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/new-meetup">
          <NewMeetup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
