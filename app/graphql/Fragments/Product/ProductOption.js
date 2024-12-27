export const PRODUCT_OPTION = `#graphql
  fragment ProductOption on ProductOption {
    name
    optionValues{
      ...ProductOptionValue
    }
  }
`;
