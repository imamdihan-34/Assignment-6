import data from "/data";

const Products = ({ addToCart }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 p-6">
      {data.map((p) => (
        <div key={p.id} className="p-4 shadow rounded-xl">
          <img src={p.icon} className="w-16" />
          <h2>{p.name}</h2>
          <p>{p.description}</p>
          <h3>${p.price} / {p.period}</h3>

          <span className="text-purple-500">{p.tagType}</span>

          <ul>
            {p.features.map((f, i) => (
              <li key={i}>✔ {f}</li>
            ))}
          </ul>

          <button
            onClick={() => addToCart(p)}
            className="btn mt-3"
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};