import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDownIcon';
import GridviewIcon from '@mui/icons-material/Gridview';
import HeadphonesIcon from '@mui/icons-material/Headphones';
const Nav =() =>{ 
    return(
        <div className = 'nav d-flex align-items-center'>
            <div className='container-fluid ' >
                <div className='row'>
                    <div className='col-sm-3 part 1 d-flex align-items-center'>
                        <button className='bg-g text-white catTab'>
                                <GridviewIcon/> &nbsp;browse all categories <KeyboardArrowDownIcon /> </button>
                                     //want button which   is used in header.js

                        </div>
                    
                         <div className='col-sm-7 part 2'>
                                <nav>
                            <ul className='list list-inline mb-0'>
                                <li className='list list-inline'> 
                                    <Button><Link>Home</Link></Button>
                                </li>
                                  <li className='list list-inline'> 
                                    <Button><Link>About</Link></Button>
                                </li>
                                  <li className='list list-inline'> 
                                    <Button><Link>Shop</Link></Button>
                                </li>
                                  <li className='list list-inline'> 
                                    <Button><Link>Vendors</Link></Button>
                                </li>
                                  <li className='list list-inline'> 
                                    <Button><Link>Mega Menu <KeyboardArrowDownIcon /> </Link></Button>
                                </li>
                                  <li className='list list-inline'> 
                                    <Button><Link>Blog</Link></Button>
                                </li>
                                 <li className='list list-inline'> 
                                  <Button><Link>pages<KeyboardArrowDownIcon /> </Link></Button>
                                  <div className='dropdown_menu'>
                                    <ul>
                        

                                    </ul>
                                  </div>
                                </li>
                                 <li className='list list-inline'> 
                                    <Button><Link>Contact</Link></Button>
                                </li>
                            </ul>
                         </nav>

                        </div>
                         <div className='col-sm-2 part 3 d-flrx align-items-center'>
                            <div className='phNo  d-flrx align-items-center ml-auto'>
                            </div>
                              <span>HeadphonesOutlinedIcon/</span>
                              <div className='info ml-3'>
                                <h3 className='text-g'>9100-9100</h3>
                                <p className='mb-0'>24/7 Support center</p>
                              </div>
                          

                        </div>

                </div>
            
               </div>
           </div>
    )
}

export default Nav;