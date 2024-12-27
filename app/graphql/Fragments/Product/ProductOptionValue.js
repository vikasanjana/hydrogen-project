export const PRODUCT_OPTION_VALUE = `#graphql
  fragment ProductOptionValue on ProductOptionValue {
    name
    swatch{
      ...ProductOptionValueSwatch
    }
  }
`;
