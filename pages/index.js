import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
	"pk.eyJ1IjoiY2hlYml2YSIsImEiOiJja3ZyMnEzMHpleHF3MnBtbno0MHNsdDl2In0.vzEwPIN2jsiEj-01wsQvbg";

export default function Home() {
	useEffect(() => {
		const map = new mapboxgl.Map({
			container: "map",
			style: "mapbox://styles/mapbox/streets-v11",
			center: [30.5234, 50.4501],
			zoom: 7,
		});
	}, []);

	return (
		<Wrapper>
			<Map id="map">Map</Map>
			<ActionItems>Start</ActionItems>
		</Wrapper>
	);
}

const Wrapper = tw.div`
  flex flex-col h-screen


`;
const Map = tw.div`
bg-red-500 flex-1`;
const ActionItems = tw.div`flex-1`;
