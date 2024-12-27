import { SELECTED_OPTIONS_FRAGMENT } from "./SelectedOptions";

export const VARIANT_FRAGMENT = `#graphql
  ${SELECTED_OPTIONS_FRAGMENT}
  fragment Variant on ProductVariant {
    selectedOptions {
      ...SelectedOptions
    }
    availableForSale
    price {
      ...MoneyProductItem
    }
    compareAtPrice{
      ...MoneyProductItem
    }
    id
    image{
      ...Image
    }
    product {
      title
      handle
    }
    sku
    title
    unitPrice{
      ...MoneyProductItem
    }
  }
`;