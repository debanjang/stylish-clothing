import { createSelector } from "reselect";

const shop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [shop],
  (shop) => shop.collections
);

export const selectHatCollections = createSelector(
  [selectShopCollections],
  (shopCollections) =>
    shopCollections.find((data) => data.title === "Hats").items
);

export const selectMensCollections = createSelector(
  [selectShopCollections],
  (shopCollections) =>
    shopCollections.find((data) => data.title === "Mens").items
);

export const selectWomensCollections = createSelector(
  [selectShopCollections],
  (shopCollections) =>
    shopCollections.find((data) => data.title === "Womens").items
);

export const selectJacketsCollections = createSelector(
  [selectShopCollections],
  (shopCollections) =>
    shopCollections.find((data) => data.title === "Jackets").items
);

export const selectSneakersCollections = createSelector(
  [selectShopCollections],
  (shopCollections) =>
    shopCollections.find((data) => data.title === "Sneakers").items
);
