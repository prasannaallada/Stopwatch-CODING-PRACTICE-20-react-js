// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                className="timer-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{time}</h1>
            <div className="timer-buttons">
              <button
                type="button"
                className="start-button button"
                onClick={this.onStartTimer}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button button"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch

/*

import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timer: 0, isTimerRunning: false}

  componentWillUnmount = () => {
    clearInterval(this.timerID)
  }

  updatedTime = () => {
    this.setState(preState => ({timer: preState.timer + 1}))
  }

  onStartTimer = () => {
    this.timerID = setInterval(this.updatedTime, 1000)
    this.setState({isTimerRunning: true})
  }

  clearInterval = () => {}

  onStopTimer = () => {
    clearInterval(this.timerID)
    this.setState({isTimerRunning: false})
  }

  onResetTimer = () => {
    clearInterval(this.timerID)
    this.setState({isTimerRunning: false, timer: 0})
  }

  renderMinutes = () => {
    const {timer} = this.state
    const minutes = Math.floor(timer / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timer} = this.state
    const seconds = Math.floor(timer % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const {isTimerRunning} = this.state
    console.log(isTimerRunning)
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="bg-container">
        <h1 className="title">Stopwatch</h1>

        <div className="stopwatch-card">
          <div className="timer-text-image">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-logo"
            />
            <p className="timer-text">Timer</p>
          </div>
          <h1 className="timer">{time}</h1>
          <div className="buttons">
            <button
              type="button"
              className="btn start"
              onClick={this.onStartTimer}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              type="button"
              className="btn stop"
              onClick={this.onStopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="btn reset"
              onClick={this.onResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
*/
