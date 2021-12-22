import { NavLink } from "react-router-dom";

const Header = () => {


	return (
		<header className="header">
			<div className="header__inner">
				<NavLink
					target="_blank"
					onClick={() => window.open("https://roasup.com/")}
					to=""
					className="custom-logo-link">
					<img width="204" height="57" src="https://roasup.com/wp-content/uploads/2020/02/Logo.svg" className="custom-logo" alt="ROASUP" />
				</NavLink>
			</div>
			<div className="tab_menu">
				<p>Образовательная платформа</p>
			</div>
		</header>
	);
};

export default Header;