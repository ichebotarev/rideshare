import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
	"pk.eyJ1IjoiY2hlYml2YSIsImEiOiJja3ZyMnEzMHpleHF3MnBtbno0MHNsdDl2In0.vzEwPIN2jsiEj-01wsQvbg";
const Map = () => {

    useEffect(() => {
		const map = new mapboxgl.Map({
			container: "map",
			style: "mapbox://styles/chebiva/ckvtpm78r21wa14s83hwlgy59",
			center: [30.5234, 50.4501], //starting coordinates kiev.ua
			zoom: 7,
		});
	}, []);

    return (
        <Wrapper id='map'></Wrapper>
    )
}


const Wrapper = tw.div`
flex-1`;

export default Map
