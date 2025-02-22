import { Link } from '@remix-run/react';
import { VariantSelector } from '@shopify/hydrogen';
import { useAside } from '~/components/Aside';
import { AddToCartButton } from './AddToCartButton';
import { slugify } from '~/utils/utilities';
import { useState } from 'react';

/**
 * @param {{
 *   product: ProductFragment;
 *   selectedVariant: ProductFragment['selectedVariant'];
 *   variants: Array<ProductVariantFragment>;
 * }}
 */
export function ProductForm({ product, selectedVariant, variants }) {
  const { open } = useAside();
  const [selectedVariantState, setSelectedVariant] = useState(selectedVariant);

  return (
    <div className="product-form">
      <VariantSelector
        handle={product.handle}
        options={product.options.filter(
          (option) => option.optionValues.length > 1
        )}
        variants={variants}
      >
        {({ option }) => (
          <ProductOptions
            key={option.name}
            option={option}
            selectedVariant={selectedVariantState}
            setSelectedVariant={setSelectedVariant}
            variants={variants.nodes}
          />
        )}
      </VariantSelector>
      <br />
      <AddToCartButton
        disabled={!selectedVariantState || !selectedVariantState.availableForSale}
        onClick={() => {
          open('cart');
        }}
        lines={
          selectedVariantState
            ? [
              {
                merchandiseId: selectedVariantState.id,
                quantity: 1,
                selectedVariant: selectedVariantState,
              },
            ]
            : []
        }
      >
        {
          console.log(selectedVariantState)
        }
        
        {selectedVariantState?.availableForSale ? 'Add to cart' : 'Sold out'}
      </AddToCartButton>
    </div>
  );
}

/**
 * @param {{
 *   option: VariantOption;
 *   selectedVariant: ProductFragment['selectedVariant'];
 *   setSelectedVariant: React.Dispatch<React.SetStateAction<ProductVariantFragment>>;
 *   variants: Array<ProductVariantFragment>;
 * }}
 */
const ProductOptions = ({ option, selectedVariant, setSelectedVariant, variants }) => {
  const handleOptionChange = (optionName, value) => {
    // Clone the selectedOptions to modify the value
    const updatedOptions = selectedVariant.selectedOptions.map((selectedOption) =>
      selectedOption.name === optionName
        ? { ...selectedOption, value }
        : selectedOption
    );

    // Find the matching variant based on updated options
    const matchedVariant = variants.find((variant) =>
      variant.selectedOptions.every(
        ({ name, value: optionValue }) =>
          updatedOptions.find((option) => option.name === name)?.value === optionValue
      )
    );

    // Update the selected variant
    setSelectedVariant(matchedVariant || null);
  };

  return (
    <div className="product-options" key={option.name}>
      <h5>{option.name}</h5>
      <div className="product-options-grid">
        {option.values.map(({ value }) => {
          const id = slugify(option.name + value);
          const isChecked =
            selectedVariant.selectedOptions.find((opt) => opt.name === option.name)?.value === value;

          return (
            <div className="product-options-item" key={id}>
              <input
                id={id}
                name={option.name}
                type="radio"
                value={value}
                onChange={() => handleOptionChange(option.name, value)}
                checked={isChecked}
              />
              <label htmlFor={id}>{value}</label>
            </div>
          );
        })}
      </div>
      <br />
    </div>
  );
};

/** @typedef {import('@shopify/hydrogen').VariantOption} VariantOption */
/** @typedef {import('storefrontapi.generated').ProductFragment} ProductFragment */
/** @typedef {import('storefrontapi.generated').ProductVariantFragment} ProductVariantFragment */
