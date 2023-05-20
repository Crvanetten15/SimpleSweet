import './Home.css';
import Products from './Products.js';
import Location from './Location.js';

// onClick={this.handleClick}
function Home() {
  return (
    <>
    <div className="title">
        <div id='sub-title'>
            Welcome to
        </div>
        <div id = 'main-title'>
            Simply Sweets
        </div>
        <div id = 'under-title'>
            Your Premier source for Gourmet Chocolate Candy and Confections right here in Mercer!
        </div>
    </div>
    <div className='home_img'>
    
    </div>
    <Location />
    <Products />
    </>
  );
}

export default Home;