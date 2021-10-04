import Product from '../Product'
import './styles.css'


const ProductsList = ({
	products,
	discount,
	currentSale,
	setCurrentSale,
	useProduct,
	show,
}) => {
	return (
		<section className='display'>
			{show && (
				<Product
					product={products}
					discount={discount}
					currentSale={currentSale}
					setCurrentSale={setCurrentSale}
					useProduct={useProduct}
				/>
			)}
		</section>
	)
}

export default ProductsList
