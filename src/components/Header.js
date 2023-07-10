import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const HeaderPage = ({ items }) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="...">ShoppingCart</Link>
    <div class="collapse navbar-collapse justify-content-end" id="navbarText">
      <ul class="navbar-nav nav justify-content-end">
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Pro">Products</Link>
        </li>
      </ul>
      <span class="navbar-text">
      <button className='btn btn-primary'>
      <Link class="nav-link" to="/Cart">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="ml-1">Cart {items}</span>
      </Link>
    </button>
      </span>
    </div>
  </div>
</nav>
  );
}

export default HeaderPage;
