// a component to search for timezone to add
import { h, render, Component } from 'preact'
import TimezoneSelect from '../timezone-select'

class SearchTimezone extends Component {
//= ({resultCallback}) => {
  state = { newTz: '' }

  // wrapping one with another to pass the value up
  onChangeCallback(e)  {
    e.preventDefault()
    let { value } = e.target
    this.setState({ newTz: value })
  }

  addNewTz(e) {
    e.preventDefault()
    this.props.resultCallback(this.state.newTz)
    // reset it
    this.setState({ newTz: '' })
  }


  render() {
    return (
      <form class="form-line">
        <div class="form-group">
          <label>Add new time zone</label>
          <TimezoneSelect onChangeCallback={this.onChangeCallback.bind(this)} initTz="" />
          <input class="form-control col-sm-5" value={this.state.newTz} name="newTimezoneToAdd" readonly />
          <br />
          <button class="btn btn-primary" onClick={this.addNewTz.bind(this)} disabled={this.state.newTz === ''}>
            ADD NEW TIMEZONE
          </button>
        </div>
      </form>
    )
  }
}

export default SearchTimezone
