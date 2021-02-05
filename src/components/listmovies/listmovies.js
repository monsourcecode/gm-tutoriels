import {useState} from "react";
import MovieCard from "../moviecard/moviecard";
import './style.css'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@material-ui/core";

const initList = [
    {
        title:'movie 01',
        description:'des 01',
        rate :7,
        url :'www.test.dz'
    }  ,{
        title:'movie 02',
        description:'des 02',
        rate :9,
        url :'www.tes1t.dz'
    }
]
const ListMovies = ()=>{

    const [movies, setMovies] = useState(initList)
    const [open, setOpen] = useState(false);
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [rate,setRate] = useState('')
    const [url,setUrl] = useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const ajouter = ()=>{
        const newFilm = {
            title,
            description,
            rate,
            url
        }
        movies.push(newFilm);
        setMovies(movies);
        setOpen(false);
     }
    return(
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Ajouter</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Ajouter un nouveau film
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Intitulé"
                        fullWidth
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Description"
                        fullWidth
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Rate"
                        type={'number'}
                        fullWidth
                        value={rate}
                        onChange={event => setRate(event.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Url"
                        fullWidth
                        value={url}
                        onChange={event => setUrl(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Annuler
                    </Button>
                    <Button onClick={ajouter} color="primary">
                        Ajouter
                    </Button>
                </DialogActions>
            </Dialog>
        <div className={'list-style'}>
            { movies && movies.map(movie=>(
                <MovieCard title={movie.title}
                           description ={movie.description}
                           rate={movie.rate}
                           url={movie.url}
                />
            ))}
         </div>
         </div>
    )
}
export default ListMovies;
