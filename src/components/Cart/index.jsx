import './styles.css'

const Cart = ({ cart }) => {
	return (
		<section>
			{cart.length > 0 &&
				cart.map((product, key) => {
					return (
						<div key={key} className='cards'>
							<p>{product.product.name}</p>
							<p>Valor: R${product.product.price}</p>
							<p>Porcentagem do desconto: {product.discount}%</p>
							<p>
								Valor do Desconto: R$
								{(product.product.price * (product.discount / 100)).toFixed(2)}
							</p>
							<p>
								Valor a pagar: R$
								{(
									product.product.price -
									product.product.price * (product.discount / 100)
								).toFixed(2)}
							</p>
						</div>
					)
				})}
		</section>
	)
}

export default Cart
