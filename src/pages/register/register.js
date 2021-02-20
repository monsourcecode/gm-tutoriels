import './register.css'
import {Link} from "react-router-dom";


const Register = () => {
    return (
        <div className={'container-rgister'}>
            <div className={'card-rgister'}>
                <div className={'title-rgister'}>
                    <span className={'title-text-rgister'}>Register</span>
                </div>

                <div className={'inputs-rgister'}>
                    <input placeholder={'Nom'}/>
                    <input placeholder={'Login'}/>
                    <input type={'password'} placeholder={'Password'}/>
                    <input type={'password'} placeholder={'confirm password'}/>
                </div>
                <div className={'actions-rgister'}>
                    <div className={'auth-rgister'}>
                        <span> S'inscrire</span>
                    </div>
                    <div className={'register-rgister'}>
                        <Link to="/login">Se connecter</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register;
