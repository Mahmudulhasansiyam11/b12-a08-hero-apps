import React from 'react';
import pageError from '../../assets/error-404.png';

const PageError = () => {
    return (
        <div className='flex justify-center flex-col items-center py-10'>
                    <div>
                        <img src={pageError} alt="" />
                    </div>
                    <div className='text-center'>
                        <h3 className='inter-font text-[20px] md:text-[40px] lg:text-[60px] font-bold'>Opps,  Page Not Found!</h3>
                    </div>

                    <div>
                        <p className='text-[#627382] font-light inter-font'>The page you are looking for is not available.</p>
                    </div>
        
                    <div className='mt-3 flex justify-center items-center'>
        
                        <a href='/' className='btn text-white inter-font font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Go Back!</a>
                    </div>
                </div>
    );
};

export default PageError;