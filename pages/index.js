import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";
import Map from "../components/Map";

export default function Home() {
	return (
		<Wrapper>
			<Map />
			<ActionItems>
				<Header>
					<Logo src="https://i.imgur.com/kenBFj5.jpeg" alt="lgoo" />
					<Profile>
						<UserImage
							src="https://i.imgur.com/cuGo4lU.jpeg"
							alt="user-image"
						/>
						<UserName>Ivan777</UserName>
					</Profile>
				</Header>

				<ActionButtons>
					<ActionButton>Ride</ActionButton>
					<ActionButton>Bike</ActionButton>
					<ActionButton>Reserve</ActionButton>
				</ActionButtons>
				<InputSearch>Whereto</InputSearch>
			</ActionItems>
		</Wrapper>
	);
}

const Wrapper = tw.div`
  flex flex-col h-screen


`;

const ActionItems = tw.div`flex-1`;
const Header = tw.div`
flex items-center justify-between mt-8

`;
const ActionButtons = tw.div``;
const ActionButton = tw.div``;
const InputSearch = tw.div``;
const Logo = tw.img` w-20
`;
const Profile = tw.div`flex flex-col items-center mr-8 justify-center text-center`;
const UserName = tw.div`
	mr-4 w-20 text-small

`;
const UserImage = tw.img`
h-24
w-24 rounded-full
object-cover
border-gray-200 p-px
`;
