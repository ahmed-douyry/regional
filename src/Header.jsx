import 'bootstrap/dist/css/bootstrap.css'
import { Link, Outlet } from 'react-router-dom'
export const Header = ()=>{
    return(
        <>
        <nav className='text-center bg-dark'>
            <h1 className='text-light'>Gestions des evenements</h1>
            <div className='d-flex justify-content-center' >
            <Link to={'/Acceuil'}><p className='m-4 text-light'>acceuil</p></Link>
            <Link to={'/Dettaille'}><p className='m-4 text-light'>dettaille</p></Link>
            </div>
            <Outlet />
        </nav>
        </>
    )
}