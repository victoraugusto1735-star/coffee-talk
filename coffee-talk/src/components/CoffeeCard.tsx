
import { formatPrice } from "../lib/formatPrice"
import type { Coffee } from "../lib/api"
type Props = {
  coffee: Coffee;
  isFavorite: boolean;
  onFavorite: (coffee: Coffee) => void;
  onCart: (coffee: Coffee) => void;
};
export function CoffeeCard({ coffee, isFavorite, onFavorite, onCart }: Props) {
  return (
    <div className="coffee-card">
      <div className="image-container">
        <img src={coffee.image} alt={coffee.name} className="coffee-image" />

        <button className="favorite-btn" onClick={() => onFavorite(coffee)}>
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="card-content">
        <h2>{coffee.name}</h2>

        <p className="description">{coffee.description}</p>

        <p className="price">{formatPrice(coffee.price)}</p>

        <div className="actions">
          <button className="btn-primary" onClick={() => onCart(coffee)}>
            Comprar
          </button>

          <button className="btn-secondary" onClick={() => onFavorite(coffee)}>
            Favoritar
          </button>
        </div>
      </div>
    </div>
  );
}
