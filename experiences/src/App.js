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
import AvailableExperiences from "./components/AvailableExperiences";
// importing specificExperience which is the component that shows when you click on an experiencediv within allexperiences
import SpecificAvailableExperience from "./components/SpecificAvailableExperience";
// importing PostedExperiences which shows all the experiences the user has posted/added
import HostingExperiences from "./components/HostingExperiences";
// import specifichostingexperience
import SpecificHostingExperience from "./components/SpecificHostingExperience";
// import Form component
import Form from "./components/Form";
import EditForm from "./components/EditForm";
// css file at end
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/" component={UserHome} />
      <Route
        exact
        path="/available-experiences"
        component={AvailableExperiences}
      />
      <Route
        path="/available-experiences/:experienceId"
        component={SpecificAvailableExperience}
      />
      <PrivateRoute
        exact
        path="/hosting-experiences"
        component={HostingExperiences}
      />
      <PrivateRoute
        path="/hosting-experiences/:experienceId"
        component={SpecificHostingExperience}
      />
      <PrivateRoute exact path="/host-an-experience" component={Form} />
      <PrivateRoute path="/edit-experience/:id" component={EditForm} />
    </div>
  );
}

export default withRouter(App);
