import './Footer.css';

// onClick={this.handleClick}
function Footer() {
  return (
    <>
        <div id='foot-thing'>
            <div className='left-foot'>
                <div id='foot-title'>
                    Simply Sweets
                </div>
                <div id='foot-address'>
                    823 Franklin Rd, Mercer, PA 16137
                </div>
            </div>
            <div className='right-foot'>
                <table>
                    <thead>
                        <tr>
                        <th>Products</th>
                        <th>Services</th>
                        <th>Follow Us</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Gallery</td>
                        <td>Fundraisers</td>
                        <td>Facebook</td>
                        </tr>
                        <tr>
                        <td>Order Form</td>
                        <td>Events</td>
                        <td>Contact Us</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
  );
}

export default Footer;