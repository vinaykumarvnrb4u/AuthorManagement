import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Book from './Book';

function App() {
  return (
<Router>
		<div className="App">
			<ul className="App-header">
			{/* <li>
				<Link to="/books">Books</Link>
			</li> */}
			{/* <li>
				<Link to="/book">Book</Link>
			</li> */}
			</ul>
		<Routes>
				<Route exact path='/books' element={< Home />}></Route>
				<Route exact path='/books/:id' element={< Book />}></Route>
		</Routes>
		</div>
	</Router>
  );
}

export default App;


