import {Link} from 'react-router-dom'
export default function Home(props){
    return(
        <div className="container">
            <h1>Welcome to the hostel pro website !</h1>
            <p>hello {props.name}</p>
            <Link to='/'>Log_out</Link>
        </div>
    );
}