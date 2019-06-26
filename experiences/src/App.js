import React from "react";
// importing route so we can direct a route for a specific url
// import withRouter so App can access location, history, match props?
import { Route, withRouter } from "react-router-dom";
// importing PrivateRoute which displays another component conditionally on the token in localStorage
import PrivateRoute from "./components/PrivateRoute";
// importing UserHome
import UserHome from "./components/UserHome";
// importing Login which is the conditional component being displayed by PrivateRoute
import Login from "./components/Login";
// importing AllExperiences which contain all the experiences inside the data.experiences array
import AllExperiences from "./components/AllExperiences";
// importing specificExperience which is the component that shows when you click on an experiencediv within allexperiences
import SpecificExperience from "./components/SpecificExperience";
// css file at end
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/" component={UserHome} />
      <Route path="/all-experiences" component={AllExperiences} />
      <Route
        path="/experiences/:experienceId"
        component={SpecificExperience}
      />
    </div>
  );
}

export default withRouter(App);
