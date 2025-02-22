export const PRODUCT_OPTION = `#graphql
  fragment ProductOption on ProductOption {
    id
    name
    optionValues{
      ...ProductOptionValue
    }
  }
`;
