import './App.css'
import { useState } from 'react'
import ProductsList from './components/ProductsList'
import Cart from './components/Cart'

function App() {
	const [useProduct, setProduct] = useState([
		{ id: 1, name: 'Smart TV LED 50', price: 1999.0 },
		{ id: 2, name: 'PlayStation 5', price: 12000.0 },
		{ id: 3, name: 'Notebook Acer Nitro 5', price: 5109.72 },
		{ id: 4, name: 'Headset s fio Logitech G935', price: 1359.0 },
		{ id: 5, name: 'Tablet Samsung Galaxy Tab S7', price: 4844.05 },
		{ id: 6, name: 'Cadeira Gamer Cruiser Preta FORTREK', price: 1215.16 },
	])
	const [discount, setDiscount] = useState(0)
	const [randomProduct, setRandomProduct] = useState([])
	const [currentSale, setCurrentSale] = useState([])
	const [show, setShow] = useState(false)

	const generateProduct = () => {
		const randomId = Math.floor(Math.random() * 6) + 1
		setRandomProduct(useProduct.filter((product) => product.id === randomId))
		setDiscount(Math.floor(Math.random() * 51) + 40)
		setShow(true)
	}

	return (
		<main className='App'>
			<h1>
				Promoção de <span>Black Friday</span>
			</h1>
			<button onClick={generateProduct}>GERAR PROMOÇÂO</button>
			<ProductsList
				products={randomProduct}
				discount={discount}
				currentSale={currentSale}
				setCurrentSale={setCurrentSale}
				useProduct={useProduct}
				show={show}
			/>
			<h3>
				Valor Total do Carrinho: R$
				{currentSale
					.reduce((accumulator, currentValue) => {
						return (
							accumulator +
							(currentValue.product.price -
								currentValue.product.price * (currentValue.discount / 100))
						)
					}, 0)
					.toFixed(2)}
			</h3>
			<Cart cart={currentSale} discount={discount} />
		</main>
	)
}

export default App
