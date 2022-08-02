import { ReactComponent as MainImage } from '../../assets/images/main-image.svg';
import ButtonCatalog from '../../components/ButtonCatalog';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
      <div className="base-card button-content-card">
        <div className='btn-catalog'>
          <Link to="/products">
            <ButtonCatalog />
          </Link>
        </div>
        <div className='text-catalog'>
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
