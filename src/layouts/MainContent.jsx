import About from "../sections/About";
import Home from "../sections/Home";

const MainContent = () => {
	return (
		<div className="mx-auto">
			<section className="w-full pt-28 ">
				<Home />
			</section>
			<div className="w-full pt-16">
				<About />
			</div>
		</div>
	);
};

export default MainContent;
