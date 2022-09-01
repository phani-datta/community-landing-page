const ProgressScroll = () => {
    const progressBarScroll = () => {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
            height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
            scrolled = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
    };

    window.onscroll = function () {
        progressBarScroll();
    };

    return (
        <div className="sticky bg-transparent top-16 z-50">
            <div className="bg-blue-300 h-1 w-0" id="progressBar"></div>
        </div>);
};

export default ProgressScroll;