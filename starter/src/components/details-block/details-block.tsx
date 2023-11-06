interface Props {
  header: string;
  imagePath: string;
}


const DetailsBlock = (props: Props) => {
  return (
    <div className="detailsBlockWrapper">
      <div className="container1">
        <h3>About</h3>
        <h2>{props.header}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          eum. Quo voluptate ea fuga minus nulla mollitia perferendis debitis
          natus quae sed? Error nobis suscipit quas molestias nulla, magni
          laborum nisi itaque ab expedita ratione maxime delectus, a veritatis
          eligendi corrupti, quos nesciunt? Voluptatibus sequi provident eum
          qui! Ad, eos!
        </p>
      </div>
      <div className="container2">
      
        <img className="circleImage" src={props.imagePath} alt="" />
   
      </div>
    </div>
  );
};
export default DetailsBlock;
