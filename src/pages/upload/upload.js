import {Button, Card, TextField} from "@material-ui/core";
import './style.css'
import {useRef, useState} from "react";
import API from "../../api/api";

const URI = (path) => 'http://localhost:3001' + path
const Upload = () => {
    const el = useRef();
    const [file, setFile] = useState('')
    const [src, setSrc] = useState('')
    const [name, setName] = useState('')
    const [cat, setCat] = useState('')
    const handel = (e) => {
        const ff = e.target.files[0]
        setFile(ff)
    }
    const send = () => {
        const formData = new FormData();
        formData.set('file', file);
        formData.set('name', name);
        formData.set('cat', cat)
        API.post('uploadwithdata', formData)
            .then(res => {
                console.log(res.data)
                setSrc(res.data.path)
            })
            .catch(err => {
                alert('Not OK')
            })
    }
    return (
        <Card className={'main'}>
            <Card className={'card'}>
                <h1>Uploader une Image</h1>
                <TextField
                    value={name}
                    onChange={event => setName(event.target.value)}
                    placeholder={'Name'}/>
                <TextField
                    value={cat}
                    onChange={event => setCat(event.target.value)}
                    placeholder={'Ctégorie'}/>
                <input onChange={handel} ref={el} type={'file'}/>
                <Button
                    style={{marginTop: 5}}
                    variant="contained"
                    color="primary"
                    onClick={send}>Envoyer</Button>
            </Card>
            <Card style={{width: '20%', height: '20%'}}>
                <img src={URI(src)} width={'100%'} height={'100%'}/>
            </Card>
        </Card>
    )
}
export default Upload;
