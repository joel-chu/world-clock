import { h, render, Component } from 'preact'
import style from './style.css'
import dayjs from '../../lib/dayjs'
import Clock from '../../components/clock'
import SearchTimezone from '../../components/search'

const userTz = dayjs.tz.guess()


class Home extends Component {

	state = { userTz }

	resultCallback = tz => {
		console.log('timezone', tz)
		this.setState({ userTz: tz })
	}

	render() {
		return (
			<div class={style.home}>
				<h1>Pick your timezone</h1>
				<p>
					I am guessing your timezone is <em>{this.state.userTz}</em>
				</p>
				<Clock tz={this.state.userTz} />
				<p>
					<SearchTimezone resultCallback={this.resultCallback} />
				</p>

			</div>
		)
	}
}

export default Home
