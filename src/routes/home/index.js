import { h, render, Component } from 'preact'
import style from './style.css'
import dayjs from '../../lib/dayjs'
import Clock from '../../components/clock'
import SearchTimezone from '../../components/search'
import TimezoneSelect from '../../components/timezone-select'

const userTz = dayjs.tz.guess()


class Home extends Component {

	state = { userTz, otherTzs: [] }
	// pass to the add new timezone form
	resultCallback = tz => {
		// console.log('add new timezone', tz)
		// check if this timezone already existed
		const all = [this.state.userTz].concat(this.state.otherTzs)
		// console.log('everything', all)
		const found = all.filter(item => item === tz)
		if (!found.length) {
			// this.state.otherTzs.push(tz)
			this.setState({
				otherTzs: this.state.otherTzs.concat([tz])
			})
		}
	}

	onChangeCallback = e => {
		let { value } = e.target
		// console.log('select onChange', value)
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
					<div class="col-sm-4">
						<Clock tz={this.state.userTz} />
					</div>
					{
						this.state.otherTzs.map((otz, i) => (
							<div class="col-sm-4">
								<Clock tz={otz} id={'clock-' + i} canClose="1" />
							</div>
						))
					}
				</div>
				<br />
				<div class="alert alert-info">

					<SearchTimezone resultCallback={this.resultCallback} />
				</div>
			</div>
		)
	}
}

export default Home
