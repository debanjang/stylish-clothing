import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};
const shop = (state) => state.shop;

export const selectCollections = createSelector(
  [shop],
  (shop) => shop.collections
);

//Currying. Take two params(collectionUrlParam and state)
//The first function createSelector takes the collectionUrlParam
//the second function:
// (collections) =>
//   collections.find(
//      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//    )
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
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
);
