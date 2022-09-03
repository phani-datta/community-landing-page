const Drawer = ({ children }) => {
    return (
        <div className="drawer lg:drawer-end">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content scroll-smooth">
                {/* <!-- Page content here --> */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                    <li className="lg:hidden"><a href="#home" className="active">Home</a></li>
                    <li className="lg:hidden"><a href="#about">About Drixico</a></li>
                    <li className="lg:hidden"><a href="#aboutOwner">About Owner</a></li>
                    <li className="lg:hidden"><a href="#groups">Groups</a></li>
                    <li className="lg:hidden"><a href="#events">Events</a></li>
                    <li className="lg:hidden"><a href="#testimonials">Testimonials</a></li>
                    <li className="lg:hidden"><a href="#faq">FAQ</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Drawer;