import './Featured.css';

// onClick={this.handleClick}
function Featured() {
  return (
    <>    
    <div>
        <div className='title-1'>
        What We Do Best!
        </div>
        <div className='under-title-1'>
        Indulge your taste buds with our exquisite assortment of gourmet chocolate candy and confections, carefully crafted to deliver an irresistible blend of flavors and textures. From velvety truffles to delectable chocolate-covered fruits, our sweet shop offers a divine collection that will satisfy even the most discerning chocolate lover.
        </div>
    </div>
    <div className='highlights'>
        <div className='high-items'>
            <div id='feat_img1' className='img-card'>
            </div>
            <a href='#' className='item-cat'>
                Cakes
            </a>
            <div className='feat-title'>
                Mini Bundt Cakes
            </div>
            <div className='feat-comment'>
                I love to eat these!
            </div>
            {/* <div className='feat-price'>
                1.99
            </div> */}
        </div>
        <div className='high-items'>
            <div  id='feat_img2' className='img-card'>
            </div>
            
            <a href='#' className='item-cat'>
                Chocolates
            </a>
            <div className='feat-title'>
              Chocolate Caramel Apples
            </div>
            <div className='feat-comment'>
                These are good cookies
            </div>
            {/* <div className='feat-price'>
                2.99
            </div> */}
        </div>
        <div className='high-items' id='stop'>
            <div id='feat_img3' className='img-card'>
            </div>
            
            <a href='#' className='item-cat'>
              Sweets
            </a>
            <div className='feat-title'>
              Loaded Pretzels
            </div>
            <div className='feat-comment'>
                I would spend money on these
            </div>
            {/* <div className='feat-price'>
                12.99
            </div> */}
        </div>
    </div>
    </>
  );
}

export default Featured;