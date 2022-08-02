import './styles.css';

const ButtonSearch = () => {
  return (
    <div className="input-text-container">
      <input type="text" className="form-control" placeholder="Digite sua busca"></input>
      <div className="btn-search">
        <button className="btn btn-primary">BUSCAR</button>
      </div>
    </div>
  );
};

export default ButtonSearch;