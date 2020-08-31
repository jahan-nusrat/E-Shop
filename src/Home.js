import React from 'react';
import { HomeImg, StyledHome } from './homeStyle';
import Product from './Product';

function Home () {
	return (
		<StyledHome className="home">
			<HomeImg
				className="home__image"
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt=""
			/>
			<Product id={123} title="The amazon" price={23.99} rating={5} />
		</StyledHome>
	);
}

export default Home;
