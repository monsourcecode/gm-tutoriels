import './App.css';
import {useState} from "react";

const App = ()=> {
     const p = {
         fullName:'Mon nom',
         profession:'Developpeur',
         bio:'www.esi.dz',
         image :'https://www.drshaneholmes.com/wp-content/uploads/2020/03/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
     };
     const [person,setPerson] = useState(p);
     const  [show, setShow] = useState(false)
     const [timer, setTimer] = useState(0)
    const change = ()=>{
         if (show ===true) setShow(false)
         if (show ===false) setShow(true)
     }
    setTimeout(()=>{
        setTimer(timer+1)
    },1000)
  return (
    <div>
        <h1> Notre Timer : {timer}</h1>
        {show === true && (
            <div className={'profile'} style={{display:"flex",flexDirection:'column'}}>
                <h3> full name : {person.fullName}</h3>
                <h3>Profession : {person.profession}</h3>
                <h3>Bio : {person.bio}</h3>
                <img style={{width:50, height:50}} src={person.image}/>
            </div>
        )}
        { show ===false &&(
            <button onClick={change} >Show profile</button>
        )}
        { show ===true &&(
            <button onClick={change} >Hide Profile</button>
        )}
    </div>
  );
}

export default App;
