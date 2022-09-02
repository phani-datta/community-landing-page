import React from "react";
import './Hero.css';
import { HiChatAlt2 } from 'react-icons/hi';
import { SiHandshake } from 'react-icons/si';
import { HiUserGroup } from 'react-icons/hi';
import { AiFillVideoCamera } from 'react-icons/ai';
import HeroStats from "./HeroStats";

const Hero = () => {
    return (
        <React.Fragment>
            <section className="hero bg-base-200 h-fit" id="home">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/assets/images/hero-image.png" className="md:max-w-3xl sm:max-w-sm" />
                    <div>
                        <div className="content__container">
                            <h1 className="content__container__text text-5xl font-bold">Drixico</h1>
                            <ul className="content__container__list">
                                <li className="content__container__list__item items-end">Chat <HiChatAlt2 className="text-5xl text-sky-800 ml-1" /></li>
                                <li className="content__container__list__item items-end">Events <AiFillVideoCamera className="text-5xl text-sky-800 ml-1" /></li>
                                <li className="content__container__list__item items-baseline">Meets <SiHandshake className="text-4xl text-sky-800 ml-1" /></li>
                                <li className="content__container__list__item items-baseline">Groups <HiUserGroup className="text-4xl text-sky-800 ml-1" /></li>
                            </ul>
                        </div>

                        <h2 className="text-2xl text-center md:text-start">Large community with huge amounts of talent to share, learn & grow!</h2>
                        <HeroStats />
                        <button className="btn btn-primary hidden md:block mt-6">Join Now</button>
                        <div className="md:hidden text-center">
                            <button className="btn btn-primary btn-wide">Join Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Hero;