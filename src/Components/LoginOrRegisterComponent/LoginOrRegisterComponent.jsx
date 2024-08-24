import React, { Component } from 'react'
import { Button, Container } from 'react-bootstrap'
import RegisterComponent from '../RegisterComponent/RegisterComponent'
import LoginComponent from '../LoginComponent/LoginComponent'
import './LoginOrRegisterComponent.css'
export default class LoginOrRegisterComponent extends Component {
  constructor() {
    super()
    this.state = {
      isLogin: true,
      isRegister: false,
    }
  }


  isLoginComponent = () => {
    this.setState({ isLogin: true, isRegister: false })
  }

  isRegisterComponent = () => {
    this.setState({ isLogin: false, isRegister: true })
  }
  render() {
    return (
      <>
        <Container>
          {this.state.isLogin? <LoginComponent /> : <RegisterComponent />}
          <div className='d-flex gap-4 mt-3 ms-4'>
            <Button onClick={this.isLoginComponent} className='btn border-0 form-control w-25 fs-4'>Login</Button>
            <Button onClick={this.isRegisterComponent} className='btn border-0 form-control w-25 fs-4'>Register</Button>
          </div>
        </Container>
      </>
    )
  }
}
