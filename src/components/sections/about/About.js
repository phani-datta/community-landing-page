import { HiOutlineUserGroup } from 'react-icons/hi';
import { BiChat } from 'react-icons/bi';
import { GiPartyPopper } from 'react-icons/gi';
import { MdOutlineLiveTv } from 'react-icons/md';
import './index.css';

const About = () => {
    return (
        <section id="about">
            <div className="flex w-sm lg:w-[65rem] mx-auto justify-between items-center py-20">
                <div>
                    <div className="flex items-center gap-1 justify-center md:justify-start">
                        <img src="/assets/images/logo.png" className="h-9" alt="Logo" />
                        <h1 className="text-4xl font-bold ml-2">About Drixico</h1>
                    </div>
                    <p className="text-xl font-semibold my-5 flex justify-center md:justify-start">Learn, Share and Grow!</p>



                    <div className='flex flex-col gap-y-7 md:gap-y-3 px-7 md:p-0'>
                        <div class="grid grid-rows-3 grid-flow-col gap-x-4">
                            <div class="row-span-3">
                                <div className='about-icon-style'>
                                    <HiOutlineUserGroup size={20} color='#008ef4' />
                                </div>
                            </div>
                            <div class="col-span-2">
                                <h3 className="about-icon-heading">Groups</h3>
                            </div>
                            <div class="row-span-2 col-span-2"><p className='about-icon-text'>Join in wide variety of groups to get exposure with different people. Checkout groups section.</p></div>
                        </div>
                        <div class="grid grid-rows-3 grid-flow-col gap-x-4">
                            <div class="row-span-3">
                                <div className='about-icon-style'>
                                    <BiChat size={20} color='#008ef4' />
                                </div>
                            </div>
                            <div class="col-span-2">
                                <h3 className="about-icon-heading">Chat</h3>
                            </div>
                            <div class="row-span-2 col-span-2"><p className='about-icon-text'>Chat with people & learn many things & share your thoughts with exclusive chat features.</p></div>
                        </div><div class="grid grid-rows-3 grid-flow-col gap-x-4">
                            <div class="row-span-3">
                                <div className='about-icon-style'>
                                    <GiPartyPopper size={20} color='#008ef4' />
                                </div>
                            </div>
                            <div class="col-span-2">
                                <h3 className="about-icon-heading">Events</h3>
                            </div>
                            <div class="row-span-2 col-span-2"><p className='about-icon-text'>Participate in events conducted by your groups & others and win many exclusive gifts & offers.</p></div>
                        </div>
                        <div class="grid grid-rows-3 grid-flow-col gap-x-4">
                            <div class="row-span-3">
                                <div className='about-icon-style'>
                                    <MdOutlineLiveTv size={20} color='#008ef4' />
                                </div>
                            </div>
                            <div class="col-span-2">
                                <h3 className="about-icon-heading">Live Sessions</h3>
                            </div>
                            <div class="row-span-2 col-span-2"><p className='about-icon-text'>Create & Join live sessions with highly customizable options like assessments, polls and many more.</p></div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/about.png" className="w-[30rem] hidden md:block" alt="Team Drixico" />
            </div>
        </section>
    );
};

export default About;