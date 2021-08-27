import "../styles/item.css";

const Item = function ({ beer }) {
  return (
    <div className="card mb-3 m-2">
      <h5 className="card-title">{beer.name}</h5>
      <img src={beer.image_url} alt="beer" className="card-pic"></img>

      <div className="card-body">
        <div className="item__data">
          <span>
            <strong>ABV:</strong> {beer.abv}
          </span>
          <span>
            <strong>IBU:</strong> {beer.ibu}
          </span>
          <span>
            <strong>EBC:</strong> {beer.ebc}
          </span>
          <span>
            <strong>yeast:</strong> {beer.ingredients.yeast}
          </span>
          <span>
            <strong>brewed date: </strong> {beer.first_brewed}
          </span>
          <span className="hops">
            <strong>hops:</strong>{" "}
            {beer.ingredients.hops.map((item, index) => (
              <p key={item.name + index}>{item.name}</p>
            ))}
          </span>
          <span>
            <strong>malt:</strong>{" "}
            {beer.ingredients.malt.map((item, index) => (
              <p key={item.name + index}>{item.name}</p>
            ))}
          </span>
          <span>
            <strong>food:</strong>{" "}
            {beer.food_pairing.map((item) => (
              <p key={item}> {item} </p>
            ))}
          </span>
          <span>
            <strong>id:{beer.id}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Item;