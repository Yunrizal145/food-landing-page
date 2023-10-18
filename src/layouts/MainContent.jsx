import About from "../sections/About";
import Contact from "../sections/Contact";
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
			<div className="w-full pt-16 lg:pt-32">
				<Contact />
			</div>
		</div>
	);
};

export default MainContent;
