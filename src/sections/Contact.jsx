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
				<div className="mx-6 mb-6 md:mx-16 lg:mx-[450px]">
					<h2 className="text-xl font-bold mb-4 md:mb-2 md:text-3xl md:mr-60 lg:text-5xl">
						MEET OUR CHEF
					</h2>
					<p className="text-xs text-slate-600 md:flex md:items-center lg:text-xl">
						Continually productize plug-and-play strategic theme
						areas and accurate.
					</p>
				</div>

				{/* Contact */}
				<div className="mx-6 py-6 md:mx-16 lg:mx-72">
					<div className="flex flex-col gap-4 md:flex-row lg:justify-between">
						{/* Contact Mapping */}
						{sectionChef.map((item, index) => (
							<div key={index} className="rounded-3xl group">
								<div className="overflow-hidden rounded-3xl transform translate-y-0 transition-transform duration-300 group-hover:-translate-y-10">
									<img
										src={item.imgChef}
										alt="Menu"
										className="w-full"
									/>
								</div>
								<h2 className="font-bold text-center text-slate-700 text-lg my-2 md:mb-10 lg:text-2xl">
									{item.nameChef}
								</h2>
							</div>
						))}
					</div>
					<div className="text-center text-white text-xs px-4 py-2 rounded-full bg-[#f58a60] border border-[#f58a60] shadow-xl hover:bg-white hover:text-[#f58a60] duration-300 md:mt-0 md:mx-60 lg:text-xl lg:px-6 lg:py-3 lg:mx-96">
						See More
					</div>
				</div>

				{/* Join Us */}
				<div
					className="relative mx-6 mt-16 text-center bg-cover text-white rounded-[50px] font-bold md:mx-16 lg:mx-72 lg:rounded-[100px]"
					style={backgroundImage}
				>
					<div className="backdrop-brightness-50 rounded-[50px] overflow-hidden md:py-6 lg:rounded-[100px]">
						<h2 className="text-sm mx-16 py-4 md:text-2xl md:mx-48 lg:text-5xl lg:mx-80 lg:py-12">
							JOIN US AND GET DISCOUNT UP TO 50%
						</h2>
						<div className="flex justify-between mx-7 md:mx-40 lg:mx-80">
							<input
								type="text"
								name="email"
								id="email"
								placeholder="Write your email..."
								className="w-48 rounded-full p-3 text-black text-xs md:w-64 lg:w-[450px] lg:p-5 lg:text-xl lg:rounded-full"
							/>
							<div className="p-3 bg-[#f58a60] rounded-full text-xs border border-[#f58a60] shadow-xl hover:bg-white hover:text-[#f58a60] duration-300 lg:p-5 lg:rounded-full lg:text-xl lg:w-36">
								Sign In
							</div>
						</div>
						<div className="text-xs py-6 lg:text-lg lg:py-12">
							<a
								href=""
								className="text-[#f58a60] underline hover:text-white cursor-pointer"
							>
								I`m a new member
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
