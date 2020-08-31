import React from 'react';
import { HomeImg, StyledHome, HomeRow } from './homeStyle';
import Product from './Product';

function Home () {
	return (
		<StyledHome className="home">
			<HomeImg
				className="home__image"
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt=""
			/>
			<HomeRow className="home__row">
				<Product
					id={1}
					title="The Lean StartUp: How Constant Innovation Creates Radically Successful Businesses Paperback"
					price={23.99}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
				/>
				<Product
					id={2}
					title="Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric"
					price={99.99}
					rating={3}
					image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
				/>
			</HomeRow>
			<HomeRow className="home__row">
				<Product
					id={3}
					title="The Lean StartUp: How Constant Innovation Creates Radically Successful Businesses Paperback"
					price={23.99}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
				/>
				<Product
					id={4}
					title="Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric"
					price={99.99}
					rating={3}
					image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
				/>
				<Product
					id={5}
					title="The Lean StartUp: How Constant Innovation Creates Radically Successful Businesses Paperback"
					price={23.99}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
				/>
			</HomeRow>
			<HomeRow className="home__row">
				<Product
					id={6}
					title="The Lean StartUp: How Constant Innovation Creates Radically Successful Businesses Paperback"
					price={23.99}
					rating={2}
					image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
				/>
				<Product
					id={7}
					title="Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric"
					price={99.99}
					rating={3}
					image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
				/>
				<Product
					id={8}
					title="The Lean StartUp: How Constant Innovation Creates Radically Successful Businesses Paperback"
					price={23.99}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
				/>
			</HomeRow>
			<HomeRow className="home__row">
				<Product
					id={9}
					title="The Lean StartUp: How Constant Innovation Creates Radically Successful Businesses Paperback"
					price={23.99}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
				/>
				<Product
					id={10}
					title="Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric"
					price={99.99}
					rating={3}
					image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
				/>
				<Product
					id={11}
					title="The Lean StartUp: How Constant Innovation Creates Radically Successful Businesses Paperback"
					price={99.99}
					rating={4}
					image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
				/>
				<Product
					id={12}
					title="Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric"
					price={23.99}
					rating={1}
					image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
				/>
			</HomeRow>
			<HomeRow className="home__row">
				<Product
					id={13}
					title="The Lean StartUp: How Constant Innovation Creates Radically Successful Businesses Paperback"
					price={23.99}
					rating={2}
					image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
				/>
				<Product
					id={14}
					title="Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric"
					price={99.99}
					rating={3}
					image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
				/>
				<Product
					id={15}
					title="The Lean StartUp: How Constant Innovation Creates Radically Successful Businesses Paperback"
					price={23.99}
					rating={3}
					image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
				/>
			</HomeRow>
			<HomeRow className="home__row">
				<Product
					id={16}
					title="The Lean StartUp: How Constant Innovation Creates Radically Successful Businesses Paperback"
					price={23.99}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
				/>
				<Product
					id={17}
					title="Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric"
					price={23.99}
					rating={3}
					image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
				/>
			</HomeRow>
		</StyledHome>
	);
}

export default Home;
