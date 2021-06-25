import {
	faAngleDown,
	faAngleUp,
	faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useWindowSize from "CustomHook/useWindowSize";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import SearchForm from "Views/HomeView/Components/SearchForm/SearchForm";
import "./style/Navbar.scss";

function Navbar(props) {
	const [width] = useWindowSize();
	const location = useLocation();
	const match = useRouteMatch();
	const [dropdownStatus, setDropdownStatus] = useState(false);
	const [searchBoxStatus, setSearchBoxStatus] = useState(false);

	useEffect(() => {
		if (width > 1024) {
			setDropdownStatus(false);
			setSearchBoxStatus(false);
		}
	}, [width]);

	const handleShowSearchBox = () => {
		setSearchBoxStatus(!searchBoxStatus);
	};

	const handleDropdown = () => {
		setDropdownStatus(!dropdownStatus);
	};

	const handleChangeInput = (values) => {
		console.log(values);
	};
	return (
		<>
			<div className={`overlays ${dropdownStatus ? "show" : ""}`}></div>
			<div className="navbar desktop">
				<div className="navbar__item">
					<ul className="navbar__contentPrimary">
						<li>
							<Link
								to={match.path}
								className={`navbar__link ${
									location.pathname === match.path ? "active" : ""
								}`}
							>
								Discover
							</Link>
						</li>
						<li>
							<Link
								to={`${match.path}/browse`}
								className={`navbar__link ${
									location.pathname === `${match.path}/browse` ? "active" : ""
								}`}
							>
								Browse
							</Link>
						</li>
					</ul>
				</div>
				<div className="navbar__item">
					<ul className="navbar__contentPrimary">
						<li>
							<Link to={`${match.path}/wishlist`} className="navbar__link">
								Wishlist
							</Link>
						</li>
						<li>
							<div className="navbar__SearchBox">
								<SearchForm onChange={handleChangeInput} />
							</div>
						</li>
					</ul>
				</div>
			</div>

			{/* navbar mobile */}
			<div className="navbar mobile">
				<div className="navbar__item"></div>

				<div className="navbar__item">
					<div className="navbar__dropdown">
						<div onClick={handleDropdown} className="navbar__dropdown--group">
							<div className="navbar__dropdown--title">
								<span>EPIC GAMES STORE</span>
								<div>
									{dropdownStatus ? (
										<FontAwesomeIcon icon={faAngleUp} />
									) : (
										<FontAwesomeIcon icon={faAngleDown} />
									)}
								</div>
							</div>
							<span>
								{location.pathname === `${match.path}`
									? "Discover"
									: location.pathname === `${match.path}/browse`
									? "Browse"
									: "Wishlist"}
							</span>
						</div>
						<div
							className={`navbar__dropdown--content ${
								dropdownStatus ? "show-dropdown" : ""
							}`}
						>
							<Link
								to={match.path}
								className="navbar__link"
								onClick={handleDropdown}
							>
								Discover
							</Link>

							<Link
								to={`${match.path}/browse`}
								className="navbar__link"
								onClick={handleDropdown}
							>
								Browse
							</Link>

							<Link
								to={`${match.path}/wishlist`}
								className="navbar__link"
								onClick={handleDropdown}
							>
								Wishlist
							</Link>
						</div>
					</div>
				</div>
				<div className="navbar__item">
					<div className="navbar__SearchBox">
						<FontAwesomeIcon icon={faSearch} onClick={handleShowSearchBox} />
					</div>

					<div
						className={`navbar__SearchBox--content ${
							searchBoxStatus ? "show-dropdown" : ""
						}`}
					>
						<SearchForm onChange={handleChangeInput} />
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
