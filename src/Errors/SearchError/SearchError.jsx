import { Link } from 'react-router';
import appError from '../../assets/App-Error.png';


const SearchError = () => {
    return (
        <div className='flex justify-center flex-col items-center py-10'>
            <div>
                <img src={appError} alt="" />
            </div>
            <div className='text-center'>
                <h3 className='inter-font text-[20px] md:text-[40px] lg:text-[60px] font-bold'>No Apps Found</h3>
            </div>

            <div className='flex justify-center items-center'>

                <a href='/app' className='btn text-white inter-font font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Show All Apps</a>
            </div>
        </div>
    );
};

export default SearchError;