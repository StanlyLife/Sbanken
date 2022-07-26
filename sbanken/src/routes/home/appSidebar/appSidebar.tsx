import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faTable } from '@fortawesome/free-solid-svg-icons';
import './appSidebar.scss';
import { NavLink } from 'react-router-dom';
export const AppSidebar = () => {
    return (
        <aside className='app-sidebar-component'>
            <div className='profile'>
                <div className='title'>
                    <h1>Sbanken</h1>
                    <h1>Forbruk</h1>
                    {/* <div className='border'></div> */}
                </div>
            </div>
            <div className='links'>
                <div className='border'></div>
                <NavLink className={(navData) => (navData.isActive ? 'link active' : 'link')} to='/'>
                    <div>
                        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                        Home
                    </div>
                </NavLink>
                <NavLink className={(navData) => (navData.isActive ? 'link active' : 'link')} to='/grids'>
                    <div>
                        <FontAwesomeIcon icon={faTable}></FontAwesomeIcon>
                        Lister
                    </div>
                </NavLink>
                <NavLink className={(navData) => (navData.isActive ? 'link active' : 'link')} to='/Categories'>
                    <div>
                        <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
                        Kategorier
                    </div>
                </NavLink>
            </div>
        </aside>
    );
};
