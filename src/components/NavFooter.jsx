const NavFooter = () => {
	return (
		<nav className="">
			<ul className=" flex flex-col md:flex-row">
				<div>
					<li className="group">
						<a
							href="#location"
							className="mx-4 py-3 text-xs font-bold hover:text-[#f58a60] hover:-translate-y-1 hover:duration-500 md:text-base md:text-slate-600 lg:text-2xl"
						>
							Location
						</a>
					</li>
					<li className="group">
						<a
							href="#about"
							className="mx-4 py-3 text-xs font-bold hover:text-[#f58a60] hover:-translate-y-1 hover:duration-500 md:text-base md:text-slate-600 lg:text-2xl"
						>
							About
						</a>
					</li>
				</div>
				<div>
					<li className="group">
						<a
							href="#menu"
							className="mx-4 py-3 text-xs font-bold hover:text-[#f58a60] hover:-translate-y-1 hover:duration-500 md:text-base md:text-slate-600 lg:text-2xl"
						>
							Menu
						</a>
					</li>
					<li className="group">
						<a
							href="#contact"
							className="mx-4 py-3 text-xs font-bold hover:text-[#f58a60] hover:-translate-y-1 hover:duration-500 md:text-base md:text-slate-600 lg:text-2xl"
						>
							Contact
						</a>
					</li>
				</div>
			</ul>
		</nav>
	);
};

export default NavFooter;
