import {
	FaWhatsapp,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
} from "react-icons/fa6";

const Sosmed = () => {
	return (
		<div className="flex gap-2 text-white">
			<div className="p-1 bg-[#f58a60] rounded-full hover:scale-125 duration-300">
				<FaWhatsapp size="12" />
			</div>
			<div className="p-1 bg-[#f58a60] rounded-full hover:scale-125 duration-300">
				<FaInstagram size="12" />
			</div>
			<div className="p-1 bg-[#f58a60] rounded-full hover:scale-125 duration-300">
				<FaLinkedin size="12" />
			</div>
			<div className="p-1 bg-[#f58a60] rounded-full hover:scale-125 duration-300">
				<FaTwitter size="12" />
			</div>
		</div>
	);
};

export default Sosmed;
