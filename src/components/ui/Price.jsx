const Price = ({ originalPrice, salePrice }) => {
  return salePrice ? (
    <>
      <span className="book__price--normal">${originalPrice.toFixed(2)}</span>$
      {salePrice.toFixed(2)}
    </>
  ) : (
    <>${originalPrice.toFixed(2)}</>
  );
};

export default Price;
