import './App.css';
import ProductList from './components/ProductList';

const products = [
	{
		id: 1,
		name: 'Pomme',
		price: 3.00,
		promo: false
	},
	{
		id: 2,
		name: 'Poire',
		price: 3.56,
		promo: true
	},
	{
		id: 3,
		name: 'Melon',
		price: 1.58,
		promo: true
	},
	{
		id: 4,
		name: 'Fraise',
		price: 5.00,
		promo: false
	},
]

function App() {
  return (
    <div className="App">
			<ProductList products={products} />
    </div>
  );
}

export default App;
