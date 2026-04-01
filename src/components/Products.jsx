

import ProductCard from './ProductCard';

const Products = ({ products, onAdd }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={onAdd} />
        ))
      ) : (
        <p className="col-span-3 text-gray-500 italic text-center">Loading products...</p>
      )}
    </div>
  );
};

export default Products;