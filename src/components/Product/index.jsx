import './styles.css'

const Product = ({
	product,
	setCurrentSale,
	currentSale,
	useProduct,
	discount,
}) => {
	const handleClick = (id) => {
		const product = useProduct.find((product) => product.id === id)
		setCurrentSale([...currentSale, { product, discount: discount }])
	}

	return (
		<div className='product'>
			<p>{product[0].name}</p>
			<p>Valor: R${product[0].price}</p>
			<p>Porcentagem do desconto: {discount}%</p>
			<p>
				Valor do Desconto: R${(product[0].price * (discount / 100)).toFixed(2)}
			</p>
			<p>
				Valor a pagar: R$
				{(product[0].price - product[0].price * (discount / 100)).toFixed(2)}
			</p>
			<button className='cartAdd' onClick={() => handleClick(product[0].id)}>
				ADD TO CART
			</button>
		</div>
	)
}

export default Product
