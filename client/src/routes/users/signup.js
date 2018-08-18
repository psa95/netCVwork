import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { signupRequest } from '../../helpers/network';
import { Form, Header, Button} from 'semantic-ui-react';

const userType = [
    { key: 'job', text: 'Job Seeker', value: 'job seeker' },
    { key: 'emp', text: 'Employer', value: 'employer' },
  ]


const occupations = [
    { key: '1', text: 'UX Designer', value:'UX Designer' },
    { key: '2', text: 'Front End Developer', value: 'Front End Developer' },
    { key: '3', text: 'Full Stack Developer', value: 'Full Stack Developer' }
]

const interestedFilelds = [
    { key: '1', text: 'Web Development', value:'Web Development' },
    { key: '2', text: 'Big Data', value:'Big Data' },
    { key: '3', text: 'Artificial Intelligence', value: 'Artificial Intelligence'}
]
  
class Signup extends Component {
  state = {
    passwordMatchError: false,
    signedup: false
  }
  updateVal = (e, {name, value }) => {
    this.setState({[name] :  value})
    console.log(value);
  }
  updateDropdown = (e) => {
    console.log(e.target)
  }
  submitForm = async(e) => {
    e.preventDefault();
    this.setState({
      error: null
    })
    try {
        // if(!(this.state.password === this.state.confirmPassword)){
        //     this.setState({
        //         passwordMatchError:true
        //     })
        //     e.email = 'Passwords dont match'
        //     throw(e)
        // } else{
        //     this.setState({
        //         passwordMatchError:false
        //     })
        // }
        console.log(this.state.type)
        console.log(this.state.occupation)
        let response = await signupRequest({name: this.state.name, email: this.state.email, password: this.state.password, type: this.state.type, occupation: this.state.occupation, interested_areas: this.state.interested_areas});
        console.log(response)
        this.setState({
            signedup: true
      })
    }catch (e){
      this.setState({
        error: e.email
      })
    }
  }
  render(){
    return (<Layout>
      <Header as='h1'>SignUp</Header>
      <Form onSubmit={this.submitForm}>
        <Form.Input label='Full name' placeholder='John Luke' name='name' onChange={this.updateVal} fluid required />
        <Form.Input label='Email' placeholder='johnny@abc.com' name='email' type='email' onChange={this.updateVal}  fluid required />
        <Form.Select label='Type of user' options={userType} placeholder='Select' name='type' value={userType.value} onChange={this.updateVal} fluid required />
        <Form.Select label='Current Occupation' options={occupations} placeholder='Select' name='occupation' onChange={this.updateVal} fluid required />
        <Form.Select label='Interested Fields' options={interestedFilelds} name='interested_areas' onChange={this.updateVal} fluid />
        <Form.Input label='Password' type='password' name='password' onChange={this.updateVal} error={this.state.passwordMatchError} fluid required />
        <Form.Input label='Confirm Password' type='password' name='confirmPassword'  onChange={this.updateVal} error={this.state.passwordMatchError} fluid required />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Button type='submit'>Signup</Button>
      </Form>

      {this.state.error ?
        <div className="alert alert-danger" role="alert">
          {this.state.error}
        </div>
      : null }


    </Layout>)
  }
}
export default Signup;