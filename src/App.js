import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopContextProvider } from './context/shop-context';
import { Navbar } from './components/navbar';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import './utils/App.css';

function App() {
	return (
		<ShopContextProvider>
			<div className="App">
				<Router>
					<Navbar />
					<Routes>
						<Route path="Store-UI/" element={<Shop />} />
						<Route path="Store-UI/cart" element={<Cart />} />
					</Routes>
				</Router>
			</div>
		</ShopContextProvider>
	);
}

export default App;
