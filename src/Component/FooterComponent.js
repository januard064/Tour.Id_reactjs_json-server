import React from 'react';
import {Link} from 'react-router-dom';


function Footer(){
    return(
        <div className="footer">
        <div className="container">
            <div className="row justify-content-center">  
                <div className="col-8 col-sm-4">
                    <h5>Tour.Id</h5>
                   <p>We lead you to the wonderful Indonesia</p>
                   <p>© Copyright 2021 Tour.Id Tour and Travel</p>
                </div>           
                <div className="col-4 col-sm-2">
                    <h5>Menu</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/beranda"  >Beranda</Link></li>
                        <li><Link to="/paket"  >Paket</Link></li>
                        <li><Link to="/custom"  >Custom</Link></li>
                        <li><Link to="/blog"  >Blog</Link></li>
                    </ul>
                </div>
                <div className="col-6 col-sm-4">
                    <h5>Address</h5>
                    <address>
		                <p>Jl. Medan Merdeka Barat No<br />
		                27A, Jakarta 110 Provinsi DKI<br />
		                Jakarta, Indonesia<br /></p>
                    </address>
                </div>
                <div className="col-6 col-sm-2">
                    <h5>Contact Us</h5>
                    <ul className="list-unstyled">
                        <li><a href="" className="fa fa-whatsapp">081288880000</a></li>
                        <li><a href="" className="fa fa-instagram">Tour.Id</a></li>
                        <li><a href="" className="fa fa-twitter">Tour.Id</a></li>
                        <li><a href="" className="fa fa-youtube">Tour.Id</a></li>
                       
                        
                    </ul>
                </div> 
               
            </div>
        </div>
    </div> 


    );
}

export default Footer;