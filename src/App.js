import React, { useState } from 'react';
import {
    rawData,
    categoriesUnique,
    namesAndCategoriesAll,
} from './data';
import CategoryButton from './CategoryButton';
import Product from './Product';
import './styles.css';

function App() {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryClick = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const totalPrices = rawData.reduce((sum, product) => {
        const price = parseFloat(product.price.slice(1));
        return sum + price;
    }, 0);

    const selectedTotalPrices = rawData.reduce((sum, product) => {
        const price = parseFloat(product.price.slice(1));
        return selectedCategories.length === 0 || selectedCategories.includes(product.category) ? sum + price : sum;
    }, 0);

    const categoryCounts = namesAndCategoriesAll.reduce((counts, { name, count }) => {
        counts[name] = count;
        return counts;
    }, {});

    const filteredProducts = rawData.filter(item => selectedCategories.length === 0 || selectedCategories.includes(item.category));

    const handleAllClick = () => {
        setSelectedCategories([]);
    };

    const categoryButtons = categoriesUnique.map(category => (
        <CategoryButton
            key={category}
            label={`${category} (${categoryCounts[category] || 0})`}
            onClick={() => handleCategoryClick(category)}
            isSelected={selectedCategories.includes(category)}
        />
    ));

    categoryButtons.push(
        <CategoryButton
            key="All"
            label={`All (${rawData.length})`}
            onClick={handleAllClick}
            isSelected={selectedCategories.length === 0}
        />
    );

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