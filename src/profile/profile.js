import {PropTypes} from "proptype";
import styles from "./style";

const Profile = ({fullname ='Notre name',
                     profession='DEV',
                     bio= 20})=>{

     return (
        <div style={styles.main}>
            <h1 style={styles.monh1}>Profile</h1>
            <h3>Full Name : {fullname}</h3>
            <h3>Profession : {profession}</h3>
            <h3>Bio : {bio}</h3>
         </div>
    )
}
Profile.propTypes = {
    fullname:  PropTypes.string.isRequired,
    profession :PropTypes.string.isRequired,
    bio : PropTypes.number.isRequired
}
export default Profile;
