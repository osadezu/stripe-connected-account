import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <h1 className='logo'>Stripefy</h1>
      <ul>
        <li>
          <Link to='create'>Create Account</Link>
        </li>
        <li>
          <Link to='list'>List Accounts</Link>
        </li>
        <li>
          <Link to='/'>About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
