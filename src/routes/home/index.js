import { h } from 'preact'
import style from './style.css'
import dayjs from '../../lib/dayjs'
import Clock from '../../components/clock'

const userTz = dayjs.tz.guess()

const Home = () => (
	<div class={style.home}>
		<h1>Pick your timezone</h1>
		<p>
			I am guessing your timezone is {userTz}
		</p>
	</div>
)

export default Home
