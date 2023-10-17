import imgLogo from "../assets/images/logo.png";
import NavFooter from "../components/NavFooter";
import Sosmed from "../components/Sosmed";

const Footer = () => {
	return (
		<footer className="w-full mt-10 bg-[#fbf5f1]">
			<div className="mx-6 pt-4 flex items-center gap-2">
				<div className="w-20">
					<img src={imgLogo} alt="" />
				</div>
				<NavFooter />
				<Sosmed />
			</div>
			<div className="text-xs text-slate-600 lg:text-base text-center mt-6 pb-4">
				&copy; 2023 Created by Hammad Yunrizal Aushaf, All Right
				Deserved
			</div>
		</footer>
	);
};

export default Footer;
