import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName:'bob',
        memberSince: '03/04/97',
      }
    }
  }
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }
  render() {
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />);
    
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>);
  
    return (
        <Router>
          <Routes>
          <Route exact path="/" element= {<Home accountBalance= {this.state.accountBalance}/>} />
          <Route exact path="/userProfile" element={< UserProfileComponent/>} />
          <Route exact path="/login" element={<LogInComponent/>} />
          </Routes>
        </Router>
    );
  }
}

export default App;