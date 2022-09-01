import React from "react";
import './Hero.css';
import { HiChatAlt2 } from 'react-icons/hi';
import { SiHandshake } from 'react-icons/si';
import { HiUserGroup } from 'react-icons/hi';
import { AiFillVideoCamera } from 'react-icons/ai';

const Hero = () => {
    return (
        <React.Fragment>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="/assets/images/hero-image.png" className="md:max-w-3xl sm:max-w-sm" />
                    <div>
                        <div class="content__container">
                            <h1 class="content__container__text text-5xl font-bold">Drixico</h1>
                            <ul class="content__container__list">
                                <li class="content__container__list__item items-end">Chat <HiChatAlt2 className="text-5xl text-sky-800 ml-1" /></li>
                                <li class="content__container__list__item items-baseline">Meets <SiHandshake className="text-4xl text-sky-800 ml-1" /></li>
                                <li class="content__container__list__item items-end">Live <AiFillVideoCamera className="text-5xl text-sky-800 ml-1" /></li>
                                <li class="content__container__list__item items-baseline">Groups <HiUserGroup className="text-4xl text-sky-800 ml-1" /></li>
                            </ul>
                        </div>
                        <h2 className="text-3xl text-center md:text-start mb-6">Easy community access with more options!</h2>
                        <button className="btn btn-primary hidden md:block">Join Now</button>
                        <div className="md:hidden text-center">
                            <button className="btn btn-primary btn-wide">Join Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Hero;