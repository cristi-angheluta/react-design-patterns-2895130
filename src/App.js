import { UserInfo } from './UserInfo'
import { useUser } from './useUser'
import { useResource } from './useResource'
import { ProductInfo } from './ProductInfo'

function App() {
	const user = useUser('345')
	const product = useResource(`/products/3456`)
	return (
		<>
			<UserInfo userId={'234'}/>
			<UserInfo userId={'345'}/>
			<ProductInfo productId={'1234'} />
		</>
	);
}

export default App;
