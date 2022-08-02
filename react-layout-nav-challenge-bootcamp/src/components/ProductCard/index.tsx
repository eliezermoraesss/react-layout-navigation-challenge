import './styles.css';
import ProductImg from '../../assets/images/audi-supra-tt.png';
import ButtonBuy from '../ButtonBuy'

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="Audi Supra TT" />
      </div>
      <div className="card-bottom-container">
        <div>
          <h6>Audi Supra TT</h6>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
        </div>
        <div>
          <ButtonBuy />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
