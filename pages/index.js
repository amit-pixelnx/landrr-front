import React, { Component } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Auth.module.css'
import Navbar from '../components/Navbar'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      email: "" ,
      password: "" ,
      rememberMe: false ,
    };

  }

  render() {
    return (
      <>
        <Head>
          <title>Landder:: Login</title>
        </Head>
        <div className={`${styles.authMain}`}>
          <section className={`${styles.authHeader}`}>
            <Link href="/">
              <a className={`${styles.authLogo}`}>
                <Image src="/images/logo.png" width={189} height={60} alt="Landder" />
              </a>
            </Link>
            <div className={`${styles.authHeaderRight}`}>
              <Navbar></Navbar>
              <Link href="/">
                <a className={`btn btn_green shadow createAccount`}>Create Account</a>
              </Link>
            </div>
          </section>
          <section className={`${styles.authContent}`}>
            <div className={`${styles.authLeftImg}`}>
              <Image src="/images/login_left_img.png" width={828} height={573} alt=""></Image>
            </div>
            <div className={`${styles.authLogin}`}>
              <div className={`${styles.authLoginIn}`}>
                <h1>Hello There,<br/> Welcome to <span>Landrr.</span></h1>
                <p>To Keep Connected With Us Please Enter Your Account Information Below.</p>
                <ul className={`${styles.formFields}`}>
                  <li>
                    <input id="email" type="email" name=""  placeholder="Enter your email address..." 
                      value={this.state.email}
                      onChange={e => {
                        this.setState({
                          email: e.target.value
                        })
                      }} 
                    />
                    <label htmlFor="email">Email Address</label>
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <path d="M15.8 0L2.2 0C0.99 0 0 1.01 0 2.25L0 11.75C0 12.99 0.99 14 2.2 14L15.8 14C17.01 14 18 12.99 18 11.75L18 2.25C18 1.01 17.02 0 15.8 0ZM16.8 11.67C16.8 12.34 16.26 12.83 15.6 12.83L2.4 12.83C1.74 12.83 1.2 12.34 1.2 11.67L1.2 2.33C1.2 1.66 1.74 1.17 2.4 1.17L15.6 1.17C16.26 1.17 16.8 1.66 16.8 2.33L16.8 11.67L16.8 11.67ZM11.35 6.88L15.75 2.85C15.96 2.66 15.98 2.33 15.79 2.12C15.6 1.91 15.29 1.89 15.08 2.08L9.01 7.65L7.82 6.57C7.82 6.57 7.82 6.56 7.82 6.56C7.79 6.53 7.76 6.51 7.73 6.49L2.92 2.08C2.71 1.89 2.39 1.91 2.2 2.12C2.02 2.33 2.04 2.66 2.25 2.85L6.7 6.92L2.26 11.16C2.06 11.35 2.05 11.68 2.24 11.89C2.34 11.99 2.48 12.05 2.61 12.05C2.73 12.05 2.86 12.01 2.95 11.91L7.46 7.61L8.68 8.72C8.77 8.81 8.89 8.85 9.01 8.85C9.13 8.85 9.25 8.81 9.35 8.72L10.6 7.57L15.08 11.92C15.18 12.01 15.3 12.06 15.43 12.06C15.56 12.06 15.69 12.01 15.79 11.9C15.98 11.69 15.97 11.37 15.77 11.17L11.35 6.88Z" />
                    </svg>
                  </li>
                  <li>
                    <input id="password" type="password" name="" 
                    value={this.state.password}
                      onChange={e => {
                        this.setState({
                          password: e.target.value
                        })
                      }} 
                    />
                    <label htmlFor="password">Password</label>
                    <svg viewBox="0 0 14 16" width="14" height="16">
                      <path d="M10.56 10.19C10.91 10.19 11.19 10.47 11.19 10.81C11.19 11.16 10.91 11.44 10.56 11.44C10.22 11.44 9.94 11.16 9.94 10.81C9.94 10.47 10.22 10.19 10.56 10.19ZM13.37 11.31C13.72 11.31 14 11.03 14 10.69L14 8.37C14 7 12.88 5.87 11.5 5.87L10.75 5.87L10.75 3.67C10.75 1.65 9.07 0 7 0C4.93 0 3.25 1.65 3.25 3.67L3.25 5.87L2.5 5.87C1.12 5.87 0 7 0 8.37L0 13.5C0 14.88 1.12 16 2.5 16L11.5 16C12.88 16 14 14.88 14 13.5C14 13.15 13.72 12.87 13.37 12.87C13.03 12.87 12.75 13.15 12.75 13.5C12.75 14.19 12.19 14.75 11.5 14.75L2.5 14.75C1.81 14.75 1.25 14.19 1.25 13.5L1.25 8.37C1.25 7.69 1.81 7.12 2.5 7.12L11.5 7.12C12.19 7.12 12.75 7.69 12.75 8.37L12.75 10.69C12.75 11.03 13.03 11.31 13.37 11.31ZM9.5 5.87L4.5 5.87L4.5 3.67C4.5 2.34 5.62 1.25 7 1.25C8.38 1.25 9.5 2.34 9.5 3.67L9.5 5.87ZM5.84 10.19C6.19 10.19 6.47 10.47 6.47 10.81C6.47 11.16 6.19 11.44 5.84 11.44C5.5 11.44 5.22 11.16 5.22 10.81C5.22 10.47 5.5 10.19 5.84 10.19ZM3.5 10.19C3.84 10.19 4.12 10.47 4.12 10.81C4.12 11.16 3.84 11.44 3.5 11.44C3.15 11.44 2.87 11.16 2.87 10.81C2.87 10.47 3.15 10.19 3.5 10.19ZM8.19 10.19C8.53 10.19 8.81 10.47 8.81 10.81C8.81 11.16 8.53 11.44 8.19 11.44C7.84 11.44 7.56 11.16 7.56 10.81C7.56 10.47 7.84 10.19 8.19 10.19Z" />
                    </svg>
                  </li>
                </ul>
                <div className={`${styles.tbLoginOpt}`}>
                  <label className={`${styles.customCheck}`}>Remember me
                    <input type="checkbox" onChange={e => {
                      this.setState({
                        rememberMe: !this.state.rememberMe
                      })
                    }}/>
                    <span className={`${styles.checkmark}`}></span>
                  </label>
                  <a href="" className={`${styles.forgotPass}`}>Forgot Password ?</a>
                </div>
                <input className={`${styles.btn}`} type="submit" name="" value="Login" />
                <p className={`${styles.signUpLink}`}>Don’t have an account? <a href="#"> Create Account</a></p>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}
export default Home;