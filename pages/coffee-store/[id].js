import { useRouter } from 'next/router';
import {Link } from 'next/link'

const CoffeeStore = () => {
  const router = useRouter();
  return (
		<div>
			Coffee store page {router.query.id}
			<Link href='/'>
				<a>Back to home</a>
			</Link>
			<Link href='/coffee-store/dynamic'>
				<a>Go to page dynamic</a>
			</Link>
		</div>
	);
};

export default CoffeeStore;

//localhost:3000/coffee-store/1 since it's a dynamic route with []