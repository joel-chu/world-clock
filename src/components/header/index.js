import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>World Clock</h1>
		<nav>
			<Link activeClassName={style.active} href="https://github.com/joel-chu/world-clock">Github</Link>
		</nav>
	</header>
);

export default Header;
