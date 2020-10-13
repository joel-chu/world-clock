// create a time input component for user to find out a specific time in different timezone
import { h, render, Component } from 'preact'

class TimeInput extends Component {
// ({ hours, minutes, updateCallback }) => {

  state = {
    hours: 0,
    minutes: 0
  }

  onHourInput(e)  {
    const { value } = e.target
    console.log('hour', value)
  }

  onMinuteInput(e) {
    const { value } = e.target
    console.log('minute', value)

  }

  componentDidMount() {
    console.log('this is mounted', this.props.hours, this.props.minutes)
    /*
    this.setState({
      hours: this.props.hours,
      minutes: this.props.minutes
    })
    */
  }



  render() {
    return (
      <form>
        <div class="form-row">
          <div class="col">
            <input type="text" class="form-control" name="hours" value={this.state.hours} onInput={this.onHourInput.bind(this)} size="2" />
          </div>
          <div class="col">
            <input type="text" class="form-control" name="minutes" value={this.state.minutes} onInput={this.onMinuteInput.bind(this)} size="2" />
          </div>
          <div class="col">
            <button type="button" class="btn">
              UPDATE
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default TimeInput
