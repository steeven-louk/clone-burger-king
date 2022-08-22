import "./styles/styles.scss";

const Card1 = (props) => {
  return (
    <>
      <div className="card1" key={props.index}>
        <div className="card1__container">
          <img
            src={props.item.img}
            alt={props.item.name}
            className="card1__imgTop"
          />
          <h1 className="card1__text">{props.item.name}</h1>
        </div>
      </div>
    </>
  );
};

export default Card1;
