import Navbar from "@/components/NavBar";
import Servicios from "@/components/Servicios";
import Footer from "@/components/Footer"
import { Hero } from "@/components/Hero"
import Portfolio from "@/components/Portfolio";

export default function Home() {
	return (
		<div className="">
			<Navbar/>
			<Hero/>	
			<Servicios/>
			<Portfolio/>
			<Footer/>	
		</div>
	);
}
