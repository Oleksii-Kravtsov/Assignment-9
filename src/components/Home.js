import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
          <img src="https://www.travelleisuretips.com/wp-content/uploads/2019/08/1_RZa8ZmI-pf2YoZCu5vhZnw-880x440.png" alt="bank"/>
          <h1>Bank of Visa</h1>

          <Link to="/userProfile">User Profile</Link>  <br />  <br />

          <Link to="/login">Singn In</Link>  <br />  <br />
           
          

          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Home;