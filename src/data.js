// challenge 1
import data from './data.json' // imports data.json

export default data // export the native JS array

// challenge 2
const allCategories = data.map(obj => obj.category)

// challenge 3
// make a set from an array all values of the set will be unique
const categoriesSet = new Set(allCategories);
// make an array from a set with Array.from()
const categoriesUnique = Array.from(categoriesSet);

// challenge 4
const categoriesWithCounts = allCategories.reduce((obj, cat) => {
    // check if cat exists as a key on obj
    if (obj.hasOwnProperty(cat)) {
      // if category key exists, increment its value by 1
      obj[cat]++;
    } else {
      // if category key does not exist, add it with a value of 1
      obj[cat] = 1;
    }
    return obj;
}, {});

// challenge 5
const namesAndCategories = categoriesUnique.map((name) => ({
    // return an object here with the name and count
    name, count: categoriesWithCounts[name]
}));

// challenge 6
// the other exports
export {
    allCategories,
    categoriesUnique,
    categoriesWithCounts,
    namesAndCategories,
    categoriesSet
}