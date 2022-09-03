import groups from '../helpers/groups';

const GroupsDropdown = () => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className="grid grid-rows-6 grid-flow-col gap-x-6 gap-y-2 p-3">
            {groups.sort().map(item => {
                return (
                    <div className="w-24
                                    hover:cursor-pointer
                                    hover:bg-primary
                                    hover:text-white
                                    hover:rounded-md
                                    hover:font-semibold
                                    "
                    >
                        <p className='px-1'>{capitalizeFirstLetter(item)}</p>
                    </div>
                );
            })}
            <div className="w-24 
                            text-primary
                            hover:cursor-pointer
                            hover:bg-primary
                            hover:text-white
                            hover:rounded-md
                            hover:font-semibold
                            "
            >
                <p className='px-1'>More...</p>
            </div>
        </div>
    );
};

export default GroupsDropdown;