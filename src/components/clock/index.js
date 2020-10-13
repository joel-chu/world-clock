import { h } from 'preact'
import { useEffect, useState } from "preact/hooks"
import style from './style.css'

import dayjs from '../../lib/dayjs'
import TimeInput from '../time-input'


function getNow(tz) {
  return dayjs(Date.now()).tz(tz)
}

// Note: `user` comes from the URL, courtesy of our router
const Clock = ({ tz }) => {

	const [ time, setTime ] = useState(getNow(tz))

	useEffect(() => {
		let timer = setInterval(() => setTime(getNow(tz), 1000))
		return () => clearInterval(timer)
	}, [tz]) // the key is to provide the dep data

	return (
    <>
      <h6 class="card-subtitle mb-2 text-muted">{time.format('dddd, MMMM D, YYYY')}</h6>
      <p class="card-text">
        <span class={style.clockText}>
          { time.format('h:mm:ss A') }
        </span>
      </p>
    </>
	)
}

export default Clock
