import rawData from './data.json';

const allCategories = rawData.map(obj => obj.category);

const categoriesSet = new Set(allCategories);
const categoriesUnique = Array.from(categoriesSet);

const categoriesWithCountsAll = allCategories.reduce((obj, cat) => {
    obj[cat] = (obj[cat] || 0) + 1;
    return obj;
}, {});

const namesAndCategoriesAll = categoriesUnique.map(name => ({
    name,
    count: categoriesWithCountsAll[name],
}));

export {
    rawData,
    allCategories,
    categoriesUnique,
    categoriesWithCountsAll,
    namesAndCategoriesAll,
    categoriesSet,
};