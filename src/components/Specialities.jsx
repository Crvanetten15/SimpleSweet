import './Specialities.css';
// import Products from './Products.js';

// onClick={this.handleClick}
function Specialities() {
    let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';


  return (
    <>    
    <div>
        <div className='title-2'>
        Services We Offer
        </div>
        <div className='services'>
            <div className='service-item'>
                <div className='service-title'>
                Custom Cakes
                </div>
            </div>
            <div className='service-item'>
            <div className='service-title'>
                Desert Catering </div>
            </div>
            <div className='service-item'>
            <div className='service-title'>
                Gift Baskets and Party Favors</div>
            </div>
            <div className='service-item'>
            <div className='service-title'>
                Personalized Candy Creations </div>
            </div>
            <div className='service-item'>
            <div className='service-title'>
                Speciality Cupcakes </div>
            </div>
            <div className='service-item'>
            <div className='service-title'>
                Gluten andd Dairy Free Options </div>
            </div>
        </div>
    </div>        
    </>
  );
}

export default Specialities;