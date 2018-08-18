import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { userLogout, isLoggedIn, userInfo } from '../helpers/authentication';
import { Menu, Segment } from 'semantic-ui-react'
class Header extends Component {

  logout = (e) => {
    userLogout();
    window.location.href = "/";
  }

  render(){
    const full_name = isLoggedIn() ? userInfo().full_name : null;
    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
            <Menu.Item
              as={NavLink}
              to="/users/"
              name='users'
            />
            {isLoggedIn() ?
              <Menu.Menu position="right">
                <Menu.Item name={full_name} content={full_name} />
                <Menu.Item
                  name='logout'
                  onClick={this.logout}
                />
              </Menu.Menu>  : null }
        </Menu>
      </Segment>
    )
  }
}

export default Header;
