import React, { Component } from 'react'
import './App.scss'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      formStatus: ''
    }
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onChange({ name, value }) {
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { email, password } = this.state
    if (email === 'test@test.com' && password === 'qwe') {
      this.setState({ formStatus: 'success' })
    }
    if (email === 'test@test.com' && password !== 'qwe') {
      this.setState({ formStatus: 'fail:pass' })
    }
    if (email !== 'test@test.com' && password === 'qwe') {
      this.setState({ formStatus: 'fail:email' })
    }
  }

  render() {
    const { email, password, formStatus } = this.state
    return (
      <div className="app">
        <h1>React - Login 📦 🚀</h1>
        <div className="container">
          {formStatus === '' && (
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    id="email"
                    className="input"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => this.onChange(e.target)}
                    placeholder="e.g. alexsmith@gmail.com"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    id="password"
                    className="input"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => this.onChange(e.target)}
                  />
                </div>
              </div>
              <div className="control">
                <button className="button is-primary">Submit</button>
              </div>
            </form>
          )}
          {formStatus === 'success' && (
            <p className="has-text-centered help is-success">LoginSuccess</p>
          )}
          {formStatus === 'fail:pass' && (
            <p className="has-text-centered help is-danger">WrongPassword</p>
          )}
          {formStatus === 'fail:email' && (
            <p className="has-text-centered help is-danger">WrongEmail</p>
          )}
        </div>
      </div>
    )
  }
}
