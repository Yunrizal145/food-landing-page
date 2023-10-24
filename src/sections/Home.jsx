import homePng from "../assets/images/home.png";
import { BiCurrentLocation } from "react-icons/bi";
import { motion as m } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
	slideIn,
	staggerContainer,
	textVariants,
	zoomIn,
} from "../utils/motion";

const Home = () => {
	return (
		<>
			<div className="w-full md:mt-4 md:flex ">
				{/* Description */}
				<m.div
					animate={{ y: [350, -50, 0] }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ ease: "easeOut", duration: 2 }}
					variants={staggerContainer}
					whileInView="show"
					initial="hidden"
					className="mx-6 mb-6 md:ml-16 md:mt-12 md:w-1/2 lg:pl-52 lg:mt-44 "
				>
					<m.div
						variants={slideIn("left", "tween", 0.1, 1)}
						className="text-slate-800 font-bold text-3xl mt-2 md:text-4xl lg:text-5xl"
					>
						<Typewriter
							options={{
								strings: "BEST FOOD FOR YOUR TASTE",
								autoStart: true,
								loop: true,
							}}
						/>
					</m.div>
					<m.div
						variants={textVariants(1.1)}
						className="text-sm text-slate-600 my-6 md:my-10 md:pr-10 lg:pr-20 lg:text-xl"
					>
						Synergistically network frictionless interfaces via
						timely functionalities. Hosticly pursue e-business
						methods of empowerment
					</m.div>
					<m.div
						variants={zoomIn(1.5, 0.75)}
						className="flex gap-2 lg:gap-6"
					>
						<m.div
							variants={textVariants(1.2)}
							className="text-xs px-4 py-2 bg-[#f58a60] rounded-full text-white border-2 shadow-xl cursor-pointer hover:border-[#f58a60] hover:border-2 hover:bg-white hover:text-[#f58a60] duration-300 md:text-sm lg:text-2xl lg:px-8 lg:py-4"
						>
							Pesan Sekarang
						</m.div>
						<m.div
							variants={textVariants(1.3)}
							className="flex gap-2 text-xs text-[#f58a60] px-4 py-2 border border-[#f58a60] rounded-full shadow-xl cursor-pointer hover:bg-[#f58a60] hover:text-white duration-300 md:text-sm lg:text-2xl lg:px-8 lg:py-4"
						>
							Your Location
							<div className="md:mt-1 lg:mt-2">
								<BiCurrentLocation size="16" />
							</div>
						</m.div>
					</m.div>
				</m.div>

				{/* Image Food */}
				<m.div
					animate={{ x: [350, 0] }}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ ease: "easeOut", duration: 4 }}
					className="mt-2 md:mr-6 md:w-1/2 lg:mr-36 lg:mt-8 lg:flex lg:justify-center "
				>
					<img src={homePng} alt="Food Thumbnail" />
				</m.div>
			</div>
		</>
	);
};

export default Home;
