import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
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
                <div className='name'>
                    <p>Stian Håve</p>
                </div>
            </div>
            <div className='links'>
                <NavLink className={(navData) => (navData.isActive ? 'link active' : 'link')} to='/'>
                    <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                    <p>Home</p>
                </NavLink>
            </div>
        </aside>
    );
};
