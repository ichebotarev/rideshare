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
					<ActionButton>
						<AcBuImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
						Ride
					</ActionButton>
					<ActionButton>
						<AcBuImage src="https://i.ibb.co/n776JLm/bike.png" />
						Bike
					</ActionButton>
					<ActionButton>
						<AcBuImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
						Reserve
					</ActionButton>
				</ActionButtons>
				<InputSearch>Where to?</InputSearch>
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
//buttons container
const ActionButtons = tw.div`flex`;
//individual button
const ActionButton = tw.div`outline-blue flex-1 m-4 h-32 flex items-center flex-col justify-center rounded-lg transform hover:scale-105 transition`;
//action button image
const AcBuImage = tw.img`;
h-3/5
`;

const Logo = tw.img` w-40 ml-4
`;
const Profile = tw.div`flex items-center flex-col justify-center text-center mr-4`;
const UserName = tw.div`
	w-20 text-small

`;
const UserImage = tw.img`
h-16
w-16 rounded-full
object-cover
border-gray-200 p-px
`;

const InputSearch = tw.div`
h-20 outline-blue text-2xl p-4 flex items-center mt-8`;
