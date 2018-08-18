import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Redirect } from 'react-router-dom';
import { getDashboard } from '../../helpers/network';
import { userLogout } from '../../helpers/authentication';
import { Header, Tab } from 'semantic-ui-react';
import Home from '../tabs/home';

const Loading = (props) => {
  return <div className="alert alert-info" role="alert">
    Logging In Please Wait
  </div>
}
const panes = [
  { menuItem: 'Home', render: () => <Tab.Pane attached={false}><Home/></Tab.Pane> },
  { menuItem: 'CV Design', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Share CV', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
  { menuItem: 'Recommended Skills', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>}
]
class Dashboard extends Component {
  state = {
    authenticated: false,
    data: null,
    error: false
  }
  async componentDidMount(){
    try {
      const response = await getDashboard();
      this.setState({
        authenticated: true
      });
    }catch(e){
      userLogout();
      this.setState({
        error: true,
        authenticated: false
      })
    }
  }
  render() {
    return (
      <Layout>
        <Tab menu={{ pointing: true }} panes={panes} />
        
      </Layout>
    );
  }
}

export default Dashboard;
