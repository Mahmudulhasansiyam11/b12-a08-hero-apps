import footerLogo from '../../assets/logo.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';

const Footer = () => {
    return (
        <div className='bg-[#001931] text-white px-15 pt-8 pb-8'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                    <img className='w-10' src={footerLogo} alt="" />
                    <p className='inter-font font-bold'>HERO.IO</p>
                </div>
                <div>
                    <p className='inter-font font-medium text-[20px]'>Social Links</p>
                    <div className='flex items-center gap-3 mt-3'>
                        <img className='w-[20px]' src={twitter} alt="twitter_icon" />
                        <img className='w-[20px]' src={instagram} alt="instagram_icon" />
                        <img className='w-[20px]' src={facebook} alt="facebook_icon" />
                    </div>
                </div>
            </div>

            <hr />

            <div className='flex justify-center items-center mt-[30px]'>
                <h3>Copyright © 2025 - All right reserved</h3>
            </div>
        </div>
    );
};

export default Footer;