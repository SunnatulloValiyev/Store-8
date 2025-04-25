import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../features/api/apiSlice";

function Home() {
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="w-auto mt-6 ml-11 grid grid-cols-4 gap-4">
      {data?.length > 0 ? (
        data.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="w-96 rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow"
          >
            <img
              className="m-auto h-40 w-full object-cover rounded-md"
              src={product.image}
              alt={product.title}
            />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-600 mt-2">
              {product.description.substring(0, 30)}...
            </p>
            <div className="badge badge-outline mt-2 badge-accent">
              {product.price} $
            </div>
            <p className="mt-2">{product.category}</p>
            <p className="mt-2 text-fuchsia-800">
              Rating: {product.rating?.rate}
            </p>
          </Link>
        ))
      ) : (
        <p className="col-span-4 text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
}

export default Home;
