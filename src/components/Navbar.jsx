import { useState } from "react";

const Navbar = () => {
	const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
	const [isNavbarHidden, setIsNavbarHidden] = useState(true);

	const handleHamburgerClick = () => {
		setIsHamburgerClicked(!isHamburgerClicked);
		setIsNavbarHidden(!isNavbarHidden);
	};

	return (
		<div className="w-full flex items-center">
			<button
				id="hamburger"
				type="button"
				className={`hamburger ${
					isHamburgerClicked ? "hamburger-click" : ""
				} absolute right-4 mr-8 lg:hidden`}
				onClick={handleHamburgerClick}
			>
				<span className=" hamburger-costum transition duration-300 ease-in-out origin-top-right"></span>
				<span className=" hamburger-costum transition duration-300 ease-in-out"></span>
				<span className=" hamburger-costum transition duration-300 ease-in-out origin-bottom-right"></span>
			</button>
			<nav
				id="navbar"
				className={`navbar ${
					isNavbarHidden ? "hidden" : ""
				} w-full absolute py-4 shadow-lg rounded-bl-lg rounded-br-lg top-full lg:flex lg:justify-end lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none mt-2`}
			>
				<ul className="block text-slate-800 lg:flex lg:justify-end">
					<li className="group">
						<a
							href="#location"
							className="mx-4 flex py-3 text-xl font-bold lg:text-2xl hover:text-[#f58a60] hover:-translate-y-1 hover:duration-500"
						>
							Location
						</a>
					</li>
					<li className="group">
						<a
							href="#about"
							className="mx-4 flex py-3 text-xl font-bold lg:text-2xl hover:text-[#f58a60] hover:-translate-y-1 hover:duration-500"
						>
							About
						</a>
					</li>
					<li className="group">
						<a
							href="#menu"
							className="mx-4 flex py-3 text-xl font-bold lg:text-2xl hover:text-[#f58a60] hover:-translate-y-1 hover:duration-500"
						>
							Menu
						</a>
					</li>
					<li className="group">
						<a
							href="#contact"
							className="mx-4 flex py-3 text-xl font-bold lg:text-2xl hover:text-[#f58a60] hover:-translate-y-1 hover:duration-500"
						>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
