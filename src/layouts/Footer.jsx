import imgLogo from "../assets/images/logo.png";
import NavFooter from "../components/NavFooter";
import Sosmed from "../components/Sosmed";
import { motion as m } from "framer-motion";
import {
	slideIn,
	staggerContainer,
	textVariants,
	zoomIn,
} from "../utils/motion";

const Footer = () => {
	return (
		<m.footer
			animate={{ y: [350, -50, 0] }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ ease: "easeOut", duration: 2 }}
			variants={staggerContainer}
			whileInView="show"
			initial="hidden"
			className="w-full mt-10 bg-[#fbf5f1] md:mt-16 lg:mt-28"
		>
			<m.div
				variants={slideIn("top", "tween", 0.1, 1)}
				className="mx-6 pt-10 flex items-center gap-2 md:mx-32 md:justify-between md:pt-16 md:pb-8 md:gap-6 lg:mx-[450px]"
			>
				<m.div
					variants={zoomIn(1.5, 0.75)}
					className="w-20 md:w-36 lg:w-52"
				>
					<img src={imgLogo} alt="" />
				</m.div>
				<m.div variants={zoomIn(1.5, 0.75)}>
					<NavFooter />
				</m.div>
				<m.div variants={zoomIn(1.5, 0.75)}>
					<Sosmed />
				</m.div>
			</m.div>
			<m.div
				variants={textVariants(1.5)}
				className="text-xs text-slate-600 text-center pt-6 pb-4 lg:text-lg lg:pt-10 lg:pb-8"
			>
				&copy; 2023 Created by Hammad Yunrizal Aushaf, All Right
				Deserved
			</m.div>
		</m.footer>
	);
};

export default Footer;
