import './styles.css';

const ButtonSearch = () => {
  return (
    <div className="search-container">
      <div className="search-button-container">
        <input
          type="text"
          className="form-control"
          placeholder="Digite sua busca"
        ></input>
        <button className="btn btn-primary">BUSCAR</button>
      </div>
    </div>
  );
};

export default ButtonSearch;
