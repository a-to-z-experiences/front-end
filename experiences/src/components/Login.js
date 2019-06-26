import React, { Component } from "react";
// import connect to connect the action creators and props we want from reducer's state to component
import { connect } from "react-redux";
// import login and register action creators
import { login, register } from "../actions";

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };
  render() {
    return (
      <div className="login">
        <div className="register-login-title">Register/Login</div>
        {this.props.error && <div className="error">{this.props.error}</div>}
        {this.props.message && (
          <div className="message">{this.props.message}</div>
        )}
        <form>
          <input
            name="username"
            type="string"
            placeholder="Enter username here"
            value={this.state.credentials.username}
            onChange={this.changeHandler}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Enter password here"
            value={this.state.credentials.password}
            onChange={this.changeHandler}
            required
          />
          <button onClick={this.loginHandler}>Login</button>
          <button onClick={this.registerHandler}>Register</button>
        </form>
      </div>
    );
  }

  // changeHandler for the user typing
  changeHandler = event => {
    event.preventDefault();
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
    // this.setState(previousState => ({
    //   ...previousState,
    //   credentials: {
    //     ...previousState.credentials,
    //     [event.target.name]: event.target.value
    //   }
    // }));
  };
  // loginHandler for the Login button
  loginHandler = event => {
    event.preventDefault();
    this.props.login(this.state.credentials).then(response => {
      this.props.history.push("/");
    });
    this.setState({
      ...this.state,
      credentials: {
        ...this.state.credentials,
        username: "",
        password: ""
      }
    });
  };
  // registerHandler for the Login button
  registerHandler = event => {
    event.preventDefault();
    this.props.register(this.state.credentials);
    this.setState({
      ...this.state,
      credentials: {
        ...this.state.credentials,
        username: "",
        password: ""
      }
    });
  };
}
// creating mapStateToProps fn that takes in state from reducers. We pass props to Login by utilizing the reducer's state
const mapStateToProps = state => {
  return {
    error: state.error,
    message: state.message
  };
};
// linking mapStateToProps, action creators to Login component
export default connect(
  mapStateToProps,
  { login, register }
)(Login);

// material UI login form

// import React, { Component } from "react";
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";

// const useStyles = makeStyles(theme => ({
//   "@global": {
//     body: {
//       backgroundColor: theme.palette.common.white
//     }
//   },
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1)
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2)
//   }
// }));

// export default function Login(props) {
//   const classes = useStyles();
//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <form className={classes.form} noValidate>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>
//             <Grid item>
//               <Link href="/sign-up" variant="body2">
//                 {"Don't have an account? Sign up"}
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//     </Container>
//   );
// }
