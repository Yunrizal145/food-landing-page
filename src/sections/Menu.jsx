import { sectionMenu } from "../constants/data";
const Menu = () => {
	return (
		<>
			<div id="menu" className="w-full md:mt-10">
				{/* Sub Menu */}
				<div className="mx-6 md:mx-16 lg:mx-[450px]">
					<h2 className="text-xl font-bold mb-4 md:mb-2 md:text-3xl md:mr-60 lg:text-5xl">
						EXTRAORDINARY TASTE AND EXPERIENCE
					</h2>
					<div className="flex flex-col md:flex-row md:justify-between">
						<p className="text-xs text-slate-600 md:flex md:items-center lg:text-xl">
							Continually productize plug-and-play strategic theme
							areas and accurate.
						</p>
						<div className="text-center text-white text-xs mt-4 px-4 py-2 rounded-full bg-[#f58a60] border border-[#f58a60] shadow-xl hover:bg-white hover:text-[#f58a60] duration-300 md:mt-0 lg:px-6 lg:py-3 lg:text-lg">
							Buy Now
						</div>
					</div>
				</div>

				{/* Menu */}
				<div className="mx-6 pb-6 pt-8 md:mx-16 md:pt-4 lg:pt-12 lg:mx-72">
					<div className="flex flex-col gap-4 md:flex-row lg:gap-8">
						{/* Menu Mapping */}
						{sectionMenu.map((item, index) => (
							<div
								key={index}
								className="p-4 border border-[#f58a60] rounded-xl group lg:p-6"
							>
								<div className="overflow-hidden rounded-xl transform translate-y-0 transition-transform duration-300 group-hover:-translate-y-10">
									<img
										src={item.imgMenu}
										alt="Menu"
										className="w-full"
									/>
								</div>
								<h2 className="font-bold text-lg mt-6 mb-2 underline lg:text-2xl">
									{item.titleMenu}
								</h2>
								<p className="text-xs text-slate-600 lg:text-xl">
									{item.descriptionMenu}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Menu;
