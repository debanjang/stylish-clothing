import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const shop = (state) => state.shop;

export const selectCollections = createSelector(
  [shop],
  (shop) => shop.collections
);

//map always gives a new array back, so the individual collections like hats, jackets etc
//will be consolidated in an array. This is how we can convert an object into an array
export const selectPreviewCollections = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

//Currying. Take two params(collectionUrlParam and state)
//The first function createSelector takes the collectionUrlParam
//the second function:
// (collections) => collections[collectionUrlParam]
//takes the state and uses the collectionUrlParam to modify it and return a value.
//akin to: multiply(3)(6)
// const multiply = (a) =>{
// return (b)=> {
//   return a*b
// }
//}
//we are memoizing this because the function that returns the selector depends on collectionUrl param
//being passed from mapStateToProps in the Collection component. Since mapStateToProps run whenever the
//state changes, irrespective of whether the collectionUrlParam changes or not.
//Since we want to only run this when the collectionUrlParam changes, we are memoizing this.
export const selectIndividualCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);
