import { h } from 'preact'
import { useEffect, useState } from "preact/hooks"

import dayjs from '../../lib/dayjs'

function getNow(tz) {
  return dayjs(Date.now()).tz(tz)
}

// Note: `user` comes from the URL, courtesy of our router
const Clock = ({ tz }) => {

	const [ time, setTime ] = useState(getNow(tz))

	useEffect(() => {
		let timer = setInterval(() => setTime(getNow(tz), 1000))
		return () => clearInterval(timer)
	}, [])

	return (
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{tz}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{time.format('dddd, MMMM D, YYYY')}</h6>
        <p class="card-text">
          {time.format('h:mm:ss A')}
        </p>
    </div>
  </div>
	)
}

export default Clock
