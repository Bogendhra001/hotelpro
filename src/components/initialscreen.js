
import {Link} from 'react-router-dom';

export default function Initial(){
    return(
        <div>
            <h1>Initial Page</h1>
            <nav>
                <ul>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
        </div>
    );
}