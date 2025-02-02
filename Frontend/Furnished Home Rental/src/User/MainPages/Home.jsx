import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ItemsGrid from "../Components/ItemsGrid";
import { PropertyProvider } from "../Context/HomeCardDataContext";
import Footer from "../Components/Footer";
const Home=()=>{
    return(
        <>
        <PropertyProvider>
        <Navbar/>

        <Hero/>
        <ItemsGrid/>
        <Footer/>
        </PropertyProvider>
        </>
    )
}

export default Home;