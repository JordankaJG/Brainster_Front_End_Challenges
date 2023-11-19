import "./card.css";
interface Props {
  img: string;
  title: string;
  price: number;
}
const Card = ({ img, title, price }: Props) => {
  return (
    <div className="card">
      <div className="img-wrap">
     
        <img src={img} alt="" />
      </div>

      <div className="container">
        <h4 className="cardTitle">{title}</h4>
        <p className="price">{price}</p>
      </div>
    </div>
  );
};

export default Card;
