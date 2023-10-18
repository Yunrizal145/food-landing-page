import {
	FaWhatsapp,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
} from "react-icons/fa6";

const Sosmed = () => {
	return (
		<div className="flex gap-2 text-white lg:gap-4">
			<div className="p-1 bg-[#f58a60] rounded-full hover:scale-125 duration-300 lg:p-3 cursor-pointer">
				<FaWhatsapp size="18" />
			</div>
			<div className="p-1 bg-[#f58a60] rounded-full hover:scale-125 duration-300 lg:p-3 cursor-pointer">
				<FaInstagram size="18" />
			</div>
			<div className="p-1 bg-[#f58a60] rounded-full hover:scale-125 duration-300 lg:p-3 cursor-pointer">
				<FaLinkedin size="18" />
			</div>
			<div className="p-1 bg-[#f58a60] rounded-full hover:scale-125 duration-300 lg:p-3 cursor-pointer">
				<FaTwitter size="18" />
			</div>
		</div>
	);
};

export default Sosmed;
