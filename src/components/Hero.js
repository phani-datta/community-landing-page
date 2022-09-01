const Hero = () => {
    return (
        <div class="hero bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="/assets/images/hero-image.png" className="md:max-w-3xl sm:max-w-sm" />
                <div>
                    <h1 class="text-5xl font-bold md:visible">Drixico</h1>
                    <h2 className="text-3xl">Easy community access with more options!</h2>
                    <br />
                    <button class="btn btn-primary mx-auto">Join Now</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;