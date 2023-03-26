function Product({ info: { title, image, price } }) {
  return (
    <div className="flex flex-col gap-3 max-w-[300px] p-5  shadow-md">
      <img src={image} alt={title} className="w-full h-[200px] object-fit" />
      <h2 className="font-medium">{title.slice(0, 20)}...</h2>
      <span className="font-medium text-xs">${price}</span>
    </div>
  );
}

export default Product;
