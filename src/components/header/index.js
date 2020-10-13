import { h } from 'preact'
import { Link } from 'preact-router/match'
import style from './style.css'
import pack from '../../../package.json'


const Header = () => (
	<header class={style.header}>
		<h1>World Clock <small class="text-monospace">{pack.version}</small></h1>
		<nav>
			<Link activeClassName={style.active} href="https://github.com/joel-chu/world-clock">Github</Link>
		</nav>
	</header>
)

export default Header
