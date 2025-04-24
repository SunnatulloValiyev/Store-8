import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const { data, isPending, error } = useFetch("https://fakestoreapi.com/products");

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-auto mt-6 ml-11 grid grid-cols-4 gap-4">
      {data?.length > 0 ? (
        data.map((productsS) => (
          <Link
            to={`/product/${productsS.id}`}
            key={productsS.id}
            className="w-96 rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow"
          >
            <img
              className="m-auto h-40 w-full object-cover rounded-md"
              src={productsS.image}
              alt={productsS.title}
            />
            <h2 className="text-lg font-semibold mt-2">{productsS.title}</h2>
            <p className="text-gray-600 mt-2">
              {productsS.description.substring(0, 30)}...
            </p>
            <div className="badge badge-outline mt-2 badge-accent">
              {productsS.price} $
            </div>
            <p className="mt-2">{productsS.category}</p>
            <p className="mt-2 text-fuchsia-800">Rating: {productsS.rating?.rate}</p>
          </Link>
        ))
      ) : (
        <p className="col-span-4 text-center text-gray-500">
          Loading products...
        </p>
      )}
    </div>
  );
}

export default Home;
