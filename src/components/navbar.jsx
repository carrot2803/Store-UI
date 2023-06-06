import { handleSwitchToggle, updateBodyClass } from './theme';
import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {
	const [switchOn, setSwitchOn] = useState(false);
	useEffect(() => updateBodyClass(switchOn), [switchOn]);

	return (
		<div className="navbar">
			<label className="switch">
				<input type="checkbox" checked={switchOn} onChange={() => handleSwitchToggle(switchOn, setSwitchOn)} />
				<span className="slider"></span>
			</label>
			<div className="links">
				<Link to="" className="link">Shop</Link>
				<Link to="/cart" className="link">
					<ShoppingCart size={24} />
				</Link>
			</div>
		</div>
	);
};
