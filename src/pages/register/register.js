import './register.css'
import {Link} from "react-router-dom";
import {useState} from "react";
import API from "../../api/api";


const Register = () => {
    const [password,setPassword]= useState('')
    const [confirmpassword,setConfirmpassword]= useState('')
    const [email,setEmail]= useState('')
    const [name,setName]= useState('')
    const send = ()=>{
        if (password !==confirmpassword){
            alert('password not ok')
            return;
        }
        const data = {password,email,name}
        API.post('/signup',data)
            .then(res=>{
                if (res.data.error ===false){
                    alert('OK !')
                }else {
                    alert(res.data.msg)
                }
            })
            .catch(err=>{
                console.log(err)
            })
    }
    return (
        <div className={'container-rgister'}>
            <div className={'card-rgister'}>
                <div className={'title-rgister'}>
                    <span className={'title-text-rgister'}>Register</span>
                </div>

                <div className={'inputs-rgister'}>
                    <input
                        value={name}
                        onChange={event => setName(event.target.value)}
                        placeholder={'Nom'}/>
                    <input
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        placeholder={'Login'}/>
                    <input
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        type={'password'} placeholder={'Password'}/>
                    <input
                        value={confirmpassword}
                        onChange={event => setConfirmpassword(event.target.value)}
                        type={'password'} placeholder={'confirm password'}/>
                </div>
                <div className={'actions-rgister'}>
                    <div onClick={send} className={'auth-rgister'}>
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
