import React, { useState } from 'react';
import data, { categoriesUnique } from './data';
import CategoryButton from './CategoryButton';
import Product from './Product';
import './styles.css';

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryClick = (category) => {
    // toggle selected category
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // calculate the sum of all prices for all products
  const totalPrices = data.reduce((sum, product) => {
    const price = parseFloat(product.price.slice(1));
    return sum + price;
  }, 0);

  // the sum of prices for currently selected products
  const selectedTotalPrices = data.reduce((sum, product) => {
    const price = parseFloat(product.price.slice(1));
    return selectedCategories.length === 0 || selectedCategories.includes(product.category) ? sum + price : sum;
  }, 0);

  // number of products in each category
  const categoryCounts = categoriesUnique.reduce((counts, category) => {
    const count = data.filter(product => selectedCategories.length === 0 || selectedCategories.includes(product.category)).length;
    return { ...counts, [category]: count };
  }, {});

  // update filteredProducts 
  const filteredProducts = data.filter(item => selectedCategories.length === 0 || selectedCategories.includes(item.category));

  // deselect other category buttons 
  const handleAllClick = () => {
    setSelectedCategories([]);
  };

  // display category buttons
  const categoryButtons = categoriesUnique.map(category => (
    <CategoryButton
      key={category}
      label={`${category} (${categoryCounts[category] || 0})`}
      onClick={() => handleCategoryClick(category)}
      isSelected={selectedCategories.includes(category)}
    />
  ));

  // add the all button
  categoryButtons.push(
    <CategoryButton
      key="All"
      label={`All (${data.length})`}
      onClick={handleAllClick}
      isSelected={selectedCategories.length === 0}
    />
  );

  // display the number of units for each product
  const productElements = filteredProducts.map(product => (
    <Product key={product.id} {...product} />
  ));

  return (
    <div className="App">
    <h1>Product List</h1>
    <div className="CategoryList">
      {categoryButtons}
    </div>
    <div className="ProductList">
      {productElements}
    </div>
    <div className="InfoContainer">
      <p className="TotalPrices">Total Prices: ${totalPrices.toFixed(2)}</p>
      <p className="SelectedTotalPrices">Selected Total Prices: ${selectedTotalPrices.toFixed(2)}</p>
    </div>
  </div>
  );
}

export default App;





