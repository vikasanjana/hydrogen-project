import { IMAGE_FRAGMENT } from "./FeaturedImage";
import { MONEY_PRODUCT_ITEM_FRAGMENT } from "./MoneyProductItem";
import { PRICE_RANGE_FRAGMENT } from "./PriceRange";
import { IMAGES_FRAGMENT } from "./ProductImages";
import { PRODUCT_OPTION } from "./ProductOption";
import { PRODUCT_OPTION_VALUE } from "./ProductOptionValue";
import { PRODUCT_OPTION_VALUE_SWATCH } from "./ProductOptionValueSwatch";
import { VARIANT_FRAGMENT } from "./Variant";
import { VARIANTS_COUNT_FRAGMENT } from "./VariantCount";

export const PRODUCT_ITEM_FRAGMENT = `#graphql
   ${MONEY_PRODUCT_ITEM_FRAGMENT}
   ${IMAGE_FRAGMENT}
   ${PRICE_RANGE_FRAGMENT}
   ${VARIANT_FRAGMENT}
   ${VARIANTS_COUNT_FRAGMENT}
   ${PRODUCT_OPTION_VALUE_SWATCH}
   ${PRODUCT_OPTION_VALUE}
   ${PRODUCT_OPTION}
   ${IMAGES_FRAGMENT}
  fragment ProductItem on Product {
    id
    handle
    availableForSale
    title
    options{
     ...ProductOption
    }
    featuredImage {
     ...Image
    }
    priceRange {
      ...PriceRange
    }
    variants(first: 100) {
      nodes {
        ...Variant
      }
    }
    selectedOrFirstAvailableVariant{
      ...Variant
    }
    variantsCount{
      ...VariantsCount
    }
    images(first: 100){
      ...Images
    }

  }
`;