import React from 'react';
import './nav.css';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDownIcon';
const Nav =() =>{ 
    return(
        <div className = 'nav d-flex align-items-center'>
            <div className='container-fluid ' >
                <div className='row'>
                    <div className='col-sm-3 part 1'>


                        </div>
                    
                             <div className='col-sm-7 part 2'>
                                <nav>
                                    <button className='bg-g text-white catTab'>browse all categories <KeyboardArrowDownIcon/> </button>
                                     //want button which   is used in header.js
                                </nav>

                        </div>
                         <div className='col-sm-2 part 3'>

                        </div>

                </div>
            
        //     </div>
        // </div>
    )
}

export default Nav;