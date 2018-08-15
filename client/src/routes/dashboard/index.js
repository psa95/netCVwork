import React, { Component } from 'react';
import { getDashboard } from '../../helpers/network';
import Layout from '../../components/Layout';

class Dashboard extends Component {
  state = {
    dashboardData: [],
    loading: true
  }
  async componentDidMount(){
    const dashboardData = await getDashboard();
    console.log(dashboardData);
    this.setState({
      dashboardData: dashboardData.data,
      loading: false
    })
  }
  render(){
    return <Layout>
    <h1>CIA Database</h1>
    {this.state.loading && <Loading/>}
    {this.state.dashboardData && !(this.state.loading) && <Table data={this.state.dashboardData} />}
    </Layout>
  }
}
const Loading = (props) =>{
    return <div>
        Loading
    </div>
}
const Row = (props) => {
  return <tr>
    <th scope="row">{props.row.name}</th>
    <td>{props.row.profession}</td>
    <td>{props.row.location}</td>
  </tr>
}
const Table = (props) => {
  return <div>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Profession</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>
        {props.data ? props.data.map(row => <Row key={row.name} row={row} />) : null}
      </tbody>
    </table>
  </div>
}
export default Dashboard;