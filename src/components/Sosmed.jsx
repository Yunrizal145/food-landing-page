import {
	FaWhatsapp,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
} from "react-icons/fa6";

const Sosmed = () => {
	return (
		<div className="flex gap-2 text-white">
			<div className="p-1 bg-[#f58a60] rounded-full hover:scale-125 duration-300 lg:p-3">
				<FaWhatsapp size="18" />
			</div>
			<div className="p-1 bg-[#f58a60] rounded-full hover:scale-125 duration-300 lg:p-3">
				<FaInstagram size="18" />
			</div>
			<div className="p-1 bg-[#f58a60] rounded-full hover:scale-125 duration-300 lg:p-3">
				<FaLinkedin size="18" />
			</div>
			<div className="p-1 bg-[#f58a60] rounded-full hover:scale-125 duration-300 lg:p-3">
				<FaTwitter size="18" />
			</div>
		</div>
	);
};

export default Sosmed;
