const NavFooter = () => {
	return (
		<nav className="">
			<ul className=" flex flex-col">
				<li className="group">
					<a
						href="#location"
						className="mx-4 py-3 text-xs font-bold lg:text-2xl hover:text-[#f58a60] hover:-translate-y-1 hover:duration-500"
					>
						Location
					</a>
				</li>
				<li className="group">
					<a
						href="#about"
						className="mx-4 py-3 text-xs font-bold lg:text-2xl hover:text-[#f58a60] hover:-translate-y-1 hover:duration-500"
					>
						About
					</a>
				</li>
				<li className="group">
					<a
						href="#menu"
						className="mx-4 py-3 text-xs font-bold lg:text-2xl hover:text-[#f58a60] hover:-translate-y-1 hover:duration-500"
					>
						Menu
					</a>
				</li>
				<li className="group">
					<a
						href="#contact"
						className="mx-4 py-3 text-xs font-bold lg:text-2xl hover:text-[#f58a60] hover:-translate-y-1 hover:duration-500"
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavFooter;
