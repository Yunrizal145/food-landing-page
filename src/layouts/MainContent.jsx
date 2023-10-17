import About from "../sections/About";
import Contact from "../sections/Contac";
import Home from "../sections/Home";
import Menu from "../sections/Menu";

const MainContent = () => {
	return (
		<div className="mx-auto">
			<section className="w-full pt-28 ">
				<Home />
			</section>
			<div className="w-full pt-16">
				<About />
			</div>
			<div className="w-full pt-16">
				<Menu />
			</div>
			<div className="w-full pt-16">
				<Contact />
			</div>
		</div>
	);
};

export default MainContent;
