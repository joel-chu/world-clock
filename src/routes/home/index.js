import { h, render, Component } from 'preact'
import style from './style.css'
import dayjs from '../../lib/dayjs'
import Clock from '../../components/clock'
import SearchTimezone from '../../components/search'
import TimezoneSelect from '../../components/timezone-select'

const userTz = dayjs.tz.guess()


class Home extends Component {

	state = { userTz, otherTzs: [] }

	resultCallback = tz => {
		console.log('timezone', tz)
		// this.setState({ userTz: tz })
	}

	onChangeCallback = e => {
		let { value } = e.target
		console.log('select onChange', value)
		this.setState({ userTz: value })
	}

	render() {
		return (
			<div class={style.home}>
				<h1>Pick your timezone</h1>
				<div class="alert alert-primary">
					<form>
						<div class="form-group row">
							<label class="col-sm-5 col-form-label">
								I am guessing your timezone is
							</label>
						</div>
						<TimezoneSelect initTz={this.state.userTz} onChangeCallback={this.onChangeCallback} />
					</form>
				</div>

				<div class="row">
					<Clock tz={this.state.userTz} />
					{
						otherTzs.map((otz, i) => (
							<Clock tz={otz} id={'clock-' + i} />
						))
					}
				</div>

				<div class="alert alert-info">

					<SearchTimezone resultCallback={this.resultCallback} />
				</div>
			</div>
		)
	}
}

export default Home
