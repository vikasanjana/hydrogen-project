import { PAGE_INFO_FRAGMENT } from "../PageInfo/PageInfo";
import { PRODUCT_ITEM_FRAGMENT } from "../Product/ProductItem";

export const COLLECTION_QUERY = `#graphql
  ${PRODUCT_ITEM_FRAGMENT}
  ${PAGE_INFO_FRAGMENT}
  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
    $identifiers:[HasMetafieldsIdentifier!]!
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ProductItem
          metafields(identifiers: $identifiers) {
          namespace
          key
          value
          type
        }
        }
        pageInfo {
         ...PageInfo
        }
      }
    }
  }
`;