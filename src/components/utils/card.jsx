const TopCard = ({ title, number, color}) => {
  return (
    <div className="bg-cyan-700 card-content">
      <p className="title">{title}</p>
      <div className="details">
        <p className="number">$ {number}</p>
        <p>graph</p>
      </div>
      <p>Since last week <span className="growth">+13.4%</span></p>
    </div>
  );
}
 
export default TopCard;