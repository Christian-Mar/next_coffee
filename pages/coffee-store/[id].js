import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/Head';

import coffeeStoresData from '../../data/coffee-stores.json';

export function getStaticProps(staticProps) {
	console.log(staticProps);
	const params = staticProps.params;
	return {
		props: {
			coffeeStore: coffeeStoresData.find(coffeeStore => {
				return coffeeStore.id.toString() === params.id;
			}),
		},
	};
}

export function getStaticPaths() {
	const paths = coffeeStoresData.map(coffeeStore => {
		return {
			params: {
				id: coffeeStore.id.toString(),
			},
		};
	});
	return {
		paths, 
		fallback: true,
	};
}

const CoffeeStore = props => {
	const router = useRouter();
	if (router.isFallback) {
		return <div>Loading ...</div>;
	}
	return (
		<div>
			<Head>
				<title>{props.coffeeStore.name}</title>
			</Head>

			<Link href='/'>
				<a>Back to home</a>
			</Link>
			<p>{props.coffeeStore.address}</p>
			<p>{props.coffeeStore.name}</p>
			<p>{props.coffeeStore.neighbourhood}</p>
		</div>
	);
};

export default CoffeeStore;

//localhost:3000/coffee-store/1 since it's a dynamic route with []
