import styles from "./product-list.module.css";

const ProductList = ({ products }) => {
	if (products.length === 0) {
		return <h1>No Products Found</h1>
	}

	const priceRed = (promo) => {
		return promo ? styles.red : undefined
	}

	const listsItems = products.map((product) => {
		return (<li key={product.id}>{product.name} -
			<span className={priceRed(product.promo)}>{product.price}€</span>
		</li>);
	})

	return (<ul>
		{listsItems}
		{/* Version In Line */}
		{/* {
			products.map((product) => {
				return <li key={product.id}>{product.name} - <span className={product.promo ? styles.red : undefined}>{product.price}€</span>
				</li>;
			})
		} */}
	</ul>)
}

export default ProductList;
