import './styles.css';
import ProductImg from '../../assets/images/main-image.svg';
import ButtonComprar from '../ButtonComprar'

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="Audi Supra TT :)" />
      </div>
      <div className="card-bottom-container">
        <div>
          <h1>Audi Supra TT</h1>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
        </div>
        <div>
          <ButtonComprar />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
