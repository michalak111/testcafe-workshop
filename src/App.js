import React, { Component } from 'react'
import './App.scss'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange({ name, value }) {
    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state
    return (
      <div className="app">
        <h1>React - Login 📦 🚀</h1>
        <div className="container">
          <form>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
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
        </div>
      </div>
    )
  }
}
