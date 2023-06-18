function AccountBox(props){

  const handleAccountBoxClick = () => {
    props.showForm();
  };
  return (
    <>
    <div className="account-box">
      <i className="fa-regular fa-comments"></i>
      
      {/* fixing this rn with a line break needs to be margined off 
      to create space between two account boxes */}
      <h3 className="account-header"> {props.type} Account</h3>
      <p className="account-text">{props.text}</p>
      <button className="account-button" onClick={handleAccountBoxClick}>{props.type} Signup</button>
    </div>
    </>
  
  )}
  
  export default AccountBox;