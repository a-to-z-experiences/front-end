import React, { Component } from 'react'

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
)(Available);