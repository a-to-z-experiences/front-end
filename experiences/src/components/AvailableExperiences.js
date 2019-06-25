import React, { Component } from 'react'
// import connect to connect the action creators and props we want from reducer's state to component
import { connect } from "react-redux";

class AvailableExperiences extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

// creating mapStateToProps fn that takes in state from reducers. We pass props to Login by utilizing the reducer's state
const mapStateToProps = state => {
  return {
    error: state.error
  };
};
// linking mapStateToProps, action creators to Login component
export default connect(
  mapStateToProps,
  { login, register }
)(AvailableExperiences);