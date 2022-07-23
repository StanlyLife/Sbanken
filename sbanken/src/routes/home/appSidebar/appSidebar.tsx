import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faTable, faUser } from '@fortawesome/free-solid-svg-icons';
import './appSidebar.scss';
import { NavLink } from 'react-router-dom';
export const AppSidebar = () => {
    return (
        <aside className='app-sidebar-component'>
            <div className='profile'>
                <div className='title'>
                    <h1>Sbanken</h1>
                    <h1>Forbruk</h1>
                    <div className='border'></div>
                </div>
                <div className='picture'>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </div>
                <div className='name'>{/* <p>Stian Håve</p> */}</div>
            </div>
            <div className='links'>
                <div className='border'></div>
                <NavLink className={(navData) => (navData.isActive ? 'link active' : 'link')} to='/'>
                    <div>
                        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                        Home
                    </div>
                </NavLink>
                <NavLink className={(navData) => (navData.isActive ? 'link active' : 'link')} to='/b'>
                    <div>
                        <FontAwesomeIcon icon={faTable}></FontAwesomeIcon>
                        Grids
                    </div>
                </NavLink>
                <NavLink className={(navData) => (navData.isActive ? 'link active' : 'link')} to='/a'>
                    <div>
                        <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
                        Information
                    </div>
                </NavLink>
            </div>
        </aside>
    );
};
