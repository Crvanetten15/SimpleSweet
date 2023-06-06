import './Header.css';

// onClick={this.handleClick}
function Header() {
  return (
    <div className="header">
        <a className='nav-item' href="#">
            MENU
        </a>
        <a className='nav-item' href="#">
            GALLERY
        </a>
        <a className='nav-item' href="#">
            FUNDRAISERS
        </a>
        <a className='nav-item' href="#">
            EVENTS
        </a>
        <a className='nav-item' href="#">
            ABOUT US
        </a>
    </div>
  );
}

export default Header;
