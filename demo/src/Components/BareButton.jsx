
// @flow 
import * as React from 'react';
import { useState } from 'react';
import LoginButton from './LoginButton';
import { LogoutButton } from './LogoutButton';


// function LoginButton(props) {
//     return (
//       <button onClick={props.onClick}>
//         Login
//       </button>
//     );
//   }
  
// function LogoutButton(props) {
//     return (
//       <button onClick={props.onClick}>
//         Logout
//       </button>
//     );
//   }

export const BareButton = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let toggle = isLoggedIn;
    const handleClick = () => {
      // console.log("click")
        setIsLoggedIn(!toggle);
    }
    return(
        <div>
            {
                isLoggedIn ? 
                    <LogoutButton onClick={handleClick} />
                :
                    <LoginButton onClick= {handleClick}/>
            }
        </div>
    )

};