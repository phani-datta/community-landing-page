const Groups = () => {
    return (

        <section id="groups" className="bg-[#f2f2f2]">
            <div className="block lg:flex w-sm lg:w-[80rem] mx-auto justify-between items-center py-20">
                <div className="text-center lg:text-start">
                    <h1 className="text-4xl font-bold">Groups</h1>
                    <p className="text-xl font-semibold my-5 flex justify-center lg:justify-start">Events, Prizes, Live Sessions & more!</p>
                    <p className="about-owner-text mt-7 px-5 md:p-0 w-full">Join in wide variety of groups to get exposure with different people. Participate in events conducted by your groups & others and win many exclusive gifts & many more offers!</p>
                    <br className="hidden lg:block" />
                    <img src="/assets/images/group1.png" className="block mx-auto lg:hidden max-w-sm md:max-w-xl lg:max-w-3xl mb-4" alt="Group" />
                    <button className="btn btn-primary">Checkout 52+ Groups!</button>
                </div>
                <div className='flex md:block justify-center'>
                    <img src="/assets/images/group1.png" className="hidden lg:block max-w-sm md:max-w-xl lg:max-w-3xl" alt="Group" />
                </div>
            </div>
        </section>
    );
};

export default Groups;