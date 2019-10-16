import React from 'react';
const Footer = ()=>{

    return (
    <div className="footer_div">
        <div className="footer">
            <div className="footer_head">
              <h2>Search<span>it</span></h2>
            </div>
            <div className="popular_searches">
                <div className="popular_searches_tag">popular searches</div>
                <div className="popular_searches_list">
                    <ul>
                        <li>Dog</li>
                        <li>Cat</li>
                        <li>Space</li>
                        <li>Nature</li>
                        <li>Business</li>
                    </ul>
                    <ul>
                        <li>Office</li>
                        <li>Coffee</li>
                        <li>World</li>
                        <li>Wildlife</li>
                        <li>Beach&nbsp;trip</li>
                    </ul>
                    <ul>
                        <li>Digital</li>
                        <li>Meeting</li>
                        <li>Cars</li>
                        <li>Games</li>
                        <li>Holiday</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Footer;