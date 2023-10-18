import { sectionChef } from "../constants/data";
import imgFooter from "../assets/images/condiments.png";
import { motion as m } from "framer-motion";
import {
	slideIn,
	staggerContainer,
	textVariants,
	zoomIn,
} from "../utils/motion";

const Contact = () => {
	const backgroundImage = {
		backgroundImage: `url(${imgFooter})`,
	};

	return (
		<>
			<m.div
				id="contact"
				animate={{ y: [350, -50, 0] }}
				viewport={{ once: true, amount: 0.25 }}
				transition={{ ease: "easeOut", duration: 2 }}
				variants={staggerContainer}
				whileInView="show"
				initial="hidden"
				className="w-full "
			>
				{/* Sub Contact */}
				<m.div
					variants={slideIn("left", "tween", 0.1, 1)}
					className="mx-6 mb-6 md:mx-16 lg:mx-[450px]"
				>
					<m.h2
						variants={textVariants(1.2)}
						className="text-xl font-bold mb-4 md:mb-2 md:text-3xl md:mr-60 lg:text-5xl"
					>
						MEET OUR CHEF
					</m.h2>
					<m.p
						variants={textVariants(1.3)}
						className="text-xs text-slate-600 md:flex md:items-center lg:text-xl"
					>
						Continually productize plug-and-play strategic theme
						areas and accurate.
					</m.p>
				</m.div>

				{/* Contact */}
				<m.div
					variants={slideIn("top", "tween", 0.1, 1)}
					className="mx-6 py-6 md:mx-16 lg:mx-72"
				>
					<div className="flex flex-col gap-4 md:flex-row lg:justify-between">
						{/* Contact Mapping */}
						{sectionChef.map((item, index) => (
							<div key={index} className="rounded-3xl group">
								<m.div
									variants={textVariants(1.4)}
									className="overflow-hidden rounded-3xl transform translate-y-0 transition-transform duration-300 group-hover:-translate-y-10"
								>
									<img
										src={item.imgChef}
										alt="Menu"
										className="w-full"
									/>
								</m.div>
								<m.h2
									variants={zoomIn(1.5, 0.75)}
									className="font-bold text-center text-slate-700 text-lg my-2 md:mb-10 lg:text-2xl"
								>
									{item.nameChef}
								</m.h2>
							</div>
						))}
					</div>
					<m.div
						variants={zoomIn(1.5, 0.75)}
						className="text-center text-white text-xs px-4 py-2 rounded-full bg-[#f58a60] border border-[#f58a60] shadow-xl hover:bg-white hover:text-[#f58a60] duration-300 md:mt-0 md:mx-60 lg:text-xl lg:px-6 lg:py-3 lg:mx-96"
					>
						See More
					</m.div>
				</m.div>

				{/* Join Us */}
				<m.div
					variants={slideIn("left", "tween", 0.1, 1)}
					className="relative mx-6 mt-16 text-center bg-cover text-white rounded-[50px] font-bold md:mx-16 lg:mx-72 lg:rounded-[100px]"
					style={backgroundImage}
				>
					<m.div
						variants={zoomIn(1.5, 0.75)}
						className="backdrop-brightness-50 rounded-[50px] overflow-hidden md:py-6 lg:rounded-[100px]"
					>
						<m.h2
							variants={textVariants(1.5)}
							className="text-sm mx-16 py-4 md:text-2xl md:mx-48 lg:text-5xl lg:mx-80 lg:py-12"
						>
							JOIN US AND GET DISCOUNT UP TO 50%
						</m.h2>
						<m.div
							variants={slideIn("right", "tween", 0.1, 1)}
							className="flex justify-between mx-7 md:mx-40 lg:mx-80"
						>
							<m.input
								variants={textVariants(1.6)}
								type="text"
								name="email"
								id="email"
								placeholder="Write your email..."
								className="w-36 rounded-full p-3 text-black text-xs md:w-64 lg:w-[450px] lg:p-5 lg:text-xl lg:rounded-full"
							/>
							<m.div
								variants={textVariants(1.7)}
								className="p-3 bg-[#f58a60] rounded-full text-xs border border-[#f58a60] shadow-xl hover:bg-white hover:text-[#f58a60] duration-300 lg:p-5 lg:rounded-full lg:text-xl lg:w-36"
							>
								Sign In
							</m.div>
						</m.div>
						<m.div
							variants={slideIn("left", "tween", 0.1, 1)}
							className="text-xs py-6 lg:text-lg lg:py-12"
						>
							<m.a
								href=""
								variants={textVariants(1.8)}
								className="text-[#f58a60] underline hover:text-white cursor-pointer"
							>
								I`m a new member
							</m.a>
						</m.div>
					</m.div>
				</m.div>
			</m.div>
		</>
	);
};

export default Contact;
