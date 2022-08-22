import "./styles/styles.scss";

const Card2 = (props) => {
  return (
    <>
      <div className="card2" key={props.index}>
        <div className="card2__container">
          <h1 className="card2__text">{props.item.name}</h1>
          <img
            src={props.item.img}
            alt={props.item.name}
            className="card2__imgTop"
          />
        </div>
      </div>
    </>
  );
};

export default Card2;
