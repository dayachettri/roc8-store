function Product({ info: { title, image, price } }) {
  return (
    <div className="flex flex-col gap-3 mb-4 max-w-[300px] p-5 shadow-[0px_0px_10px_rgba(0,0,0,0.1)] md:mx-auto sm:mx-auto xs:mx-auto mx-auto">
      <img src={image} alt={title} className="w-full h-[200px] object-fit" />
      <h2 className="font-medium">{title.slice(0, 20)}...</h2>
      <span className="font-medium text-xs">${price}</span>
    </div>
  );
}

export default Product;
