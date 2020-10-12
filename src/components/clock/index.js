import { h } from 'preact'
import { useEffect, useState } from "preact/hooks"

import dayjs from '../../lib/dayjs'


// Note: `user` comes from the URL, courtesy of our router
const Clock = ({ tz }) => {
	const [ time, setTime ] = useState(Date.now())

	useEffect(() => {
		let timer = setInterval(() => setTime(Date.now()), 1000)
		return () => clearInterval(timer)
	}, [])

	return (
		<div>
			<h2>Profile: {user}</h2>


			<div>{new Date(time).toLocaleString()}</div>
			<div>DATE</div>

		</div>
	)
}

export default Clock
