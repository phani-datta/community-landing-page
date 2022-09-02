import React from "react";
import Emoji from "../Emoji";

const HeroStats = () => {
    return (
        <React.Fragment>
            <div className="stats shadow-lg mt-5 hidden md:inline-grid">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <Emoji symbol="🔥" className="text-3xl" />
                    </div>
                    <div className="stat-title">Members</div>
                    <div className="stat-value">18M</div>
                    <div className="stat-desc">Since Feb 2020</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <Emoji symbol="⚡" className="text-3xl" />
                    </div>
                    <div className="stat-title">Groups</div>
                    <div className="stat-value">52</div>
                    <div className="stat-desc">15 elite groups</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <Emoji symbol="🎉" className="text-3xl" />
                    </div>
                    <div className="stat-title">Events</div>
                    <div className="stat-value">25</div>
                    <div className="stat-desc">5 active events</div>
                </div>
            </div>
            <div className="text-sm text-center mb-2 mt-5 block md:hidden">
                18M Members &nbsp; ● &nbsp; 52 Groups &nbsp; ● &nbsp; 25 Events
            </div>
        </React.Fragment>
    );
};

export default HeroStats;