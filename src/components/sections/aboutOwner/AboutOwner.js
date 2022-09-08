import { BsInstagram, BsGithub } from 'react-icons/bs';
import { FiTwitter, FiFacebook, FiLinkedin } from 'react-icons/fi';
import './index.css';

const AboutOwner = () => {

    const socialIcon = (icon, link, iconName) => {
        return (
            <div className="tooltip" data-tip={iconName}>
                <a href={link.length !== 0 ? link : null} target="_blank" className="btn btn-circle btn-outline border-0">
                    {icon}
                </a>
            </div>
        );
    };

    return (
        <section className="bg-[#f7fafb]" id="aboutOwner">
            <div className="block md:grid grid-cols-3 gap-4 w-sm lg:w-[60rem] mx-auto py-20">
                <div className='flex md:block justify-center'>
                    <div className="avatar">
                        <div className="w-64 rounded-full">
                            <img src="/assets/images/owner.png" alt="Phani Datta Reddy" />
                        </div>
                    </div>
                </div>
                <div className="col-span-2 ml-0 md:ml-24 content-center mt-7 text-center md:text-start">
                    <h1 className="text-4xl font-bold">Phani Datta Reddy</h1>
                    <p className="text-xl font-semibold flex justify-center md:justify-start mt-2">Owner of Drixico community</p>
                    <p className="about-owner-text mt-7 px-5 md:p-0">Phani is a highly enthusiastic frontend developer with 2+ years of experience in the industry. Phani has founded the Drixico to streamline the social media usability and make the people join at one place to participate in more activities and make the bondage more special. </p>
                    <div className='flex gap-3 mt-7 justify-center md:justify-start'>
                        {socialIcon(<BsGithub className='text-2xl' />, "https://github.com/phani-datta", "Github")}
                        {socialIcon(<FiLinkedin className='text-2xl' />, "https://www.linkedin.com/in/phani-datta/", "Linkedin")}
                        {socialIcon(<BsInstagram className='text-2xl' />, "https://instagram.com/phani_datta_reddy?igshid=YmMyMTA2M2Y=", "Instagram")}
                        {socialIcon(<FiFacebook className='text-2xl' />, "", "Facebook")}
                        {socialIcon(<FiTwitter className='text-2xl' />, "", "Twitter")}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutOwner;