export const PRODUCT_OPTION_VALUE_SWATCH = `#graphql
  fragment ProductOptionValueSwatch on ProductOptionValueSwatch {    
    color
    image{
        id
        previewImage{
            ...Image
        }
    }
  }
`;
