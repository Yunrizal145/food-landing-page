import { sectionChef } from "../constants/data";
import imgFooter from "../assets/images/condiments.png";

const Contact = () => {
	const backgroundImage = {
		backgroundImage: `url(${imgFooter})`,
	};

	return (
		<>
			<div id="contact" className="w-full ">
				{/* Sub Contact */}
				<div className="mx-6 mb-6 md:mx-16">
					<h2 className="text-xl font-bold mb-4 md:mb-2 md:text-3xl md:mr-60 lg:text-5xl lg:mx-[450px]">
						MEET OUR CHEF
					</h2>
					<p className="text-xs text-slate-600 md:flex md:items-center lg:text-xl">
						Continually productize plug-and-play strategic theme
						areas and accurate.
					</p>
				</div>

				{/* Contact */}
				<div className="mx-6 pb-6 ">
					<div className="flex flex-col gap-4 ">
						{/* Contact Mapping */}
						{sectionChef.map((item, index) => (
							<div key={index} className="rounded-3xl group">
								<div className="overflow-hidden rounded-xl transform translate-y-0 transition-transform duration-300 group-hover:-translate-y-10">
									<img
										src={item.imgChef}
										alt="Menu"
										className="w-full"
									/>
								</div>
								<h2 className="font-bold text-center text-slate-700 text-lg mt-6 mb-2 ">
									{item.nameChef}
								</h2>
							</div>
						))}
						<div className="text-center text-white text-xs mt-4 px-4 py-2 rounded-full bg-[#f58a60] border border-[#f58a60] shadow-xl hover:bg-white hover:text-[#f58a60] duration-300 md:mt-0">
							See More
						</div>
					</div>
				</div>

				{/* Join Us */}
				<div
					className="mx-6 mt-16 text-center bg-cover text-white rounded-3xl"
					style={backgroundImage}
				>
					<h2 className="text-sm mx-16 py-4">
						JOIN US AND GET DISCOUNT UP TO 50%
					</h2>
					<div className="flex justify-between mx-7">
						<input
							type="text"
							name="email"
							id="email"
							placeholder="Write your email..."
							className="rounded-2xl p-3 text-black text-xs"
						/>
						<div className="p-3 bg-[#f58a60] rounded-full text-xs border border-[#f58a60] shadow-xl hover:bg-white hover:text-[#f58a60] duration-300">
							Sign In
						</div>
					</div>
					<div className="text-xs py-4  cursor-pointer">
						<a
							href=""
							className="text-[#f58a60] underline hover:text-white"
						>
							I`m a new member
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
