import { h } from 'preact';
import { useEffect } from "preact/hooks";
import style from './style.css';
import dayjs from 'dayjs'



// Note: `user` comes from the URL, courtesy of our router
const Profile = ({ tz }) => {
	const [time, setTime] = useState(Date.now());
	// const [count, setCount] = useState(10);

	useEffect(() => {
		let timer = setInterval(() => setTime(Date.now()), 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div class={style.profile}>
			<h2>Profile: {user}</h2>


			<div>{new Date(time).toLocaleString()}</div>
			<div>DATE</div>

		</div>
	);
}

export default Profile;
