import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import personal from "../SVG/user_4_fill.svg";
import business from "../SVG/building_6_fill.svg";
import { Button } from '@mui/material';

function AccountBox(props) {
  const { accountType, setAccountType } = useContext(CurrentUserContext);

  const handleAccountBoxClick = (e) => {
    const type = props.type === "Personal" ? "user" : "business";
    setAccountType(type);
    props.showForm();
  };
  return (
      <div className="account-box">
        <img src={ (accountType == "Organization") ? personal : business} alt="" className="sign-up-icon" />

        {/* fixing this rn with a line break needs to be margined off 
      to create space between two account boxes */}
        <h3 className="account-header">{props.type} Account</h3>
        <p className="account-text">{props.text}</p>
        <Button  variant="contained" color="black" className="account-button btn" onClick={handleAccountBoxClick}>
          {props.type} Signup
        </Button>
      </div>
  );
}

export default AccountBox;
