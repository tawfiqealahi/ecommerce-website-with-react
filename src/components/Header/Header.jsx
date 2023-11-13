import './Header.css';
import logo from '../../Logo.svg';

const Header = () => {
    return (
        <nav className='header flex justify-between px-10 py-2 bg-gray-800  items-center sticky '>

<img src={logo} alt="logo" />
    
   <div className='link '>
       <a href="/shop">Shop</a>
        <a href="/order">Order</a>
        <a href="/inventory">inventory</a>
        <a href="/login">login</a>
       </div>
        </nav>
    );
};

export default Header;