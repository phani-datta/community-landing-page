import React from "react";

const Hero = () => {
    return (
        <React.Fragment>
            <div className="bg-base-200 mx-auto flex justify-center md:hidden">
                <h1 class="text-5xl font-bold mt-6">Drixico</h1>
            </div>
            <div class="hero bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="/assets/images/hero-image.png" className="md:max-w-3xl sm:max-w-sm" />
                    <div>
                        <h1 class="text-5xl font-bold hidden md:block mb-3">Drixico <span className="heading-text-change"></span></h1>
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