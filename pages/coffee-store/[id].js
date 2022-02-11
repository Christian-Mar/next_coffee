import { useRouter } from 'next/router';

const CoffeeStore = () => {
  const router = useRouter();
  return (<div>Coffee store page</div>)
};

export default CoffeeStore;

//localhost:3000/coffee-store/1 since it's a dynamic route with []