import imgLogo from "../assets/images/logo.png";
import NavFooter from "../components/NavFooter";
import Sosmed from "../components/Sosmed";

const Footer = () => {
	return (
		<footer className="w-full mt-10 bg-[#fbf5f1] md:mt-16 lg:mt-28">
			<div className="mx-6 pt-10 flex items-center gap-2 md:mx-32 md:justify-between md:pt-16 md:pb-8 md:gap-6 lg:mx-[450px]">
				<div className="w-20 md:w-36 lg:w-52">
					<img src={imgLogo} alt="" />
				</div>
				<NavFooter />
				<Sosmed />
			</div>
			<div className="text-xs text-slate-600 text-center pt-6 pb-4 lg:text-lg lg:pt-8 lg:pb-6">
				&copy; 2023 Created by Hammad Yunrizal Aushaf, All Right
				Deserved
			</div>
		</footer>
	);
};

export default Footer;
