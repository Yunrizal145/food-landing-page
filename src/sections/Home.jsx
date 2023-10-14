import homePng from "../assets/images/home.png";
import { BiCurrentLocation } from "react-icons/bi";

const Home = () => {
	return (
		<>
			<div className="w-full md:mt-4 md:flex ">
				{/* Description */}
				<div className="mx-6 mb-6 md:ml-16 md:mt-12 md:w-1/2 lg:pl-52 lg:mt-44 ">
					<div className="text-slate-800 font-bold text-3xl mt-2 md:text-4xl lg:text-5xl">
						BEST FOOD FOR YOUR TASTE
					</div>
					<div className="text-sm text-slate-600 my-6 md:my-10 md:pr-10 lg:pr-20 lg:text-xl">
						Synergistically network frictionless interfaces via
						timely functionalities. Hosticly pursue e-business
						methods of empowerment
					</div>
					<div className="flex gap-2 lg:gap-6">
						<div className="text-xs px-4 py-2 bg-[#f58a60] rounded-full text-white border-2 shadow-xl cursor-pointer hover:border-[#f58a60] hover:border-2 hover:bg-white hover:text-[#f58a60] duration-300 md:text-sm lg:text-2xl lg:px-8 lg:py-4">
							Pesan Sekarang
						</div>
						<div className="flex gap-2 text-xs text-[#f58a60] px-4 py-2 border border-[#f58a60] rounded-full shadow-xl cursor-pointer hover:bg-[#f58a60] hover:text-white duration-300 md:text-sm lg:text-2xl lg:px-8 lg:py-4">
							Your Location
							<div className="md:mt-1 lg:mt-2">
								<BiCurrentLocation size="16" />
							</div>
						</div>
					</div>
				</div>

				{/* Image Food */}
				<div className="mt-2 md:mr-6 md:w-1/2 lg:mr-36 lg:mt-8 lg:flex lg:justify-center ">
					<img src={homePng} alt="Food Thumbnail" />
				</div>
			</div>
		</>
	);
};

export default Home;
