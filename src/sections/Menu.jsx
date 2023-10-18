import { sectionMenu } from "../constants/data";
import { motion as m } from "framer-motion";
import {
	slideIn,
	staggerContainer,
	textVariants,
	zoomIn,
} from "../utils/motion";

const Menu = () => {
	return (
		<>
			<m.div
				id="menu"
				animate={{ y: [350, -50, 0] }}
				viewport={{ once: true, amount: 0.25 }}
				transition={{ ease: "easeOut", duration: 2 }}
				variants={staggerContainer}
				whileInView="show"
				initial="hidden"
				className="w-full md:mt-10"
			>
				{/* Sub Menu */}
				<m.div
					variants={slideIn("bottom", "tween", 0.1, 1)}
					className="mx-6 md:mx-16 lg:mx-[450px]"
				>
					<m.h2
						variants={textVariants(1.1)}
						className="text-xl font-bold mb-4 md:mb-2 md:text-3xl md:mr-60 lg:text-5xl"
					>
						EXTRAORDINARY TASTE AND EXPERIENCE
					</m.h2>
					<m.div
						variants={slideIn("left", "tween", 0.1, 1)}
						className="flex flex-col md:flex-row md:justify-between"
					>
						<m.p
							variants={textVariants(1.2)}
							className="text-xs text-slate-600 md:flex md:items-center lg:text-xl"
						>
							Continually productize plug-and-play strategic theme
							areas and accurate.
						</m.p>
						<m.div
							variants={textVariants(1.3)}
							className="text-center text-white text-xs mt-4 px-4 py-2 rounded-full bg-[#f58a60] border border-[#f58a60] shadow-xl hover:bg-white hover:text-[#f58a60] duration-300 md:mt-0 lg:px-6 lg:py-3 lg:text-lg"
						>
							Buy Now
						</m.div>
					</m.div>
				</m.div>

				{/* Menu */}
				<div className="mx-6 pb-6 pt-8 md:mx-16 md:pt-4 lg:pt-12 lg:mx-72">
					<div className="flex flex-col gap-4 md:flex-row lg:gap-8">
						{/* Menu Mapping */}
						{sectionMenu.map((item, index) => (
							<m.div
								key={index}
								variants={slideIn("left", "tween", 0.1, 1)}
								className="p-4 border border-[#f58a60] rounded-xl group lg:p-6"
							>
								<m.div
									variants={zoomIn(1.5, 0.75)}
									className="overflow-hidden rounded-xl transform translate-y-0 transition-transform duration-300 group-hover:-translate-y-10"
								>
									<img
										src={item.imgMenu}
										alt="Menu"
										className="w-full"
									/>
								</m.div>
								<m.h2
									variants={textVariants(1.4)}
									className="font-bold text-lg mt-6 mb-2 underline lg:text-2xl"
								>
									{item.titleMenu}
								</m.h2>
								<m.p
									variants={textVariants(1.5)}
									className="text-xs text-slate-600 lg:text-xl"
								>
									{item.descriptionMenu}
								</m.p>
							</m.div>
						))}
					</div>
				</div>
			</m.div>
		</>
	);
};

export default Menu;
