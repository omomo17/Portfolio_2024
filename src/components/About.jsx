import aboutImg from '../assets/myPicture.png';
import { ABOUT_TEXT } from '../constants/index';

const About = () => {
    return (
        <div className="border-b border-neutral-400 pb-4">
            <h2 className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500"> Me</span>
            </h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-10">
                    <div className="flex items-center justify-center">
                        <img className='rounded-2xl' src={aboutImg} alt="about" />
                    </div>

                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;