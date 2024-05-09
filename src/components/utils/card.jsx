const TopCard = () => {
  return (
    <div className="card-container">
      <p className="title">Total Sales</p>
      <div className="details">
        <p className="number">$59,069</p>
        <p>graph</p>
      </div>
      <p>Since last week <span className="growth">+13.4%</span></p>
    </div>
  );
}
 
export default TopCard;