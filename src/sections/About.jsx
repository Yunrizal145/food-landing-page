import { sectionAbout1, sectionAbout2, sectionAbout3 } from "../constants/data";

const About = () => {
	const { img1, title1, description1 } = sectionAbout1;
	const { img2, title2, description2 } = sectionAbout2;
	const { img3, title3, description3 } = sectionAbout3;

	return (
		<>
			<div id="about" className="w-full md:mt-10">
				{/* Sub About */}
				<div className="text-center mx-6 mb-6 md:mx-36">
					<h2 className="text-xl font-bold mb-4 md:text-3xl md:mx-10 lg:text-5xl lg:mx-[450px]">
						EXTRAORDINARY TASTE AND EXPERIENCE
					</h2>
					<p className="text-xs text-slate-600 lg:text-xl">
						Continually productize plug-and-play strategic theme
						areas and accurate.
					</p>
				</div>

				{/* About */}
				<div className="mx-6 mt-8 md:mx-16 md:mt-16 lg:mx-[275px] lg:mt-32">
					{/* About Section 1 */}
					<div className="flex flex-col-reverse pt-4 md:flex-row lg:mb-24">
						<div className="mb-10 mt-2 md:w-1/2 md:mr-10 lg:mr-52">
							<h4 className="text-lg font-bold md:text-xl lg:text-4xl">
								{title1}
							</h4>
							<p className="my-5 text-xs text-slate-600 lg:text-xl lg:mt-10 lg:mb-8">
								{description1}
							</p>
							<a className="px-6 py-3 text-sm text-white bg-[#f58a60] rounded-full shadow-xl border border-[#f58a60] hover:bg-white hover:text-[#f58a60] duration-300 lg:text-xl lg:px-10 lg:py-4 cursor-pointer">
								READ MORE
							</a>
						</div>
						<div className="overflow-hidden rounded-2xl md:w-1/2 md:h-full ">
							<img src={img1} alt="Delivery Food" />
						</div>
					</div>

					{/* About Section 2 */}
					<div className="flex flex-col pt-4 md:flex-row lg:mb-24">
						<div className="overflow-hidden rounded-2xl md:w-1/2 md:h-full">
							<img src={img2} alt="Delivery Food" />
						</div>
						<div className="mb-10 mt-2 md:w-1/2 md:ml-10 lg:ml-52">
							<h4 className="text-lg font-bold md:text-xl lg:text-4xl">
								{title2}
							</h4>
							<p className="my-5 text-xs text-slate-600 lg:text-xl lg:mt-10 lg:mb-8">
								{description2}
							</p>
							<a className="px-6 py-3 text-sm text-white bg-[#f58a60] rounded-full shadow-xl border border-[#f58a60] hover:bg-white hover:text-[#f58a60] duration-300 lg:text-xl lg:px-10 lg:py-4 cursor-pointer">
								READ MORE
							</a>
						</div>
					</div>

					{/* About Section 3 */}
					<div className="flex flex-col-reverse pt-4 md:flex-row lg:mb-24">
						<div className="mb-10 mt-2 md:w-1/2 md:mr-10 lg:mr-52">
							<h4 className="text-lg font-bold md:text-xl lg:text-4xl">
								{title3}
							</h4>
							<p className="my-5 text-xs text-slate-600 lg:text-xl lg:mt-10 lg:mb-8">
								{description3}
							</p>
							<a className="px-6 py-3 text-sm text-white bg-[#f58a60] rounded-full shadow-xl border border-[#f58a60] hover:bg-white hover:text-[#f58a60] duration-300 lg:text-xl lg:px-10 lg:py-4 cursor-pointer">
								READ MORE
							</a>
						</div>
						<div className="overflow-hidden rounded-2xl md:w-1/2">
							<img src={img3} alt="Delivery Food" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
