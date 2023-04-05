import React, {useState,useEffect} from 'react';
import MainSlider from '../components/MainSlider';
import AdoptionShop from '../components/AdoptionShop'

function Home() {

	const [dogs,setDogs]=useState([]);

	useEffect(()=>{
		fetch('http://127.0.0.1:5555/dogs')
		.then(res=>res.json())
		.then(data=>{
			setDogs(data)
		})
	},[])
	console.log(dogs)
	return (
			<main>
				<MainSlider/>
				<AdoptionShop
					dogs={dogs}
				/>
				
		</main>
		
	)
}

export default Home;
