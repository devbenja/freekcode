import Navbar from "@/components/NavBar";
import Servicios from "@/components/Servicios";
import { Hero } from "@/components/Hero"

export default function Home() {
	return (
		<div className="">
			<Navbar/>
			<Hero/>	
			<Servicios/>	
		</div>
	);
}
