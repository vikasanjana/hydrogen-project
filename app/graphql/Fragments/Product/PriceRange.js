export const PRICE_RANGE_FRAGMENT = `#graphql
  fragment PriceRange on ProductPriceRange {
    minVariantPrice {
      ...MoneyProductItem
    }
    maxVariantPrice {
      ...MoneyProductItem
    }
  }
`;
