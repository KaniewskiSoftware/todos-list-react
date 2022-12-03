import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { StyledNavList, StyledNavLink } from "./styled";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";

const App = () => (
  <HashRouter basename="/todos-list-react">
    <nav>
      <StyledNavList>
        <li>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </li>
      </StyledNavList>
      <Switch>
        <Route path={"/zadania/:id"}>
          <TaskPage />
        </Route>
        <Route path={"/zadania"}>
          <TasksPage />
        </Route>
        <Route path={"/autor"}>
          <AuthorPage />
        </Route>
        <Route path={"/"}>
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;
