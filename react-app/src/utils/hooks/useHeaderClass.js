import {useState, useEffect} from 'react';

const classNames = {
    visible: 'header',
    hidden: 'header--hidden'
};

const useHeaderClassname = (scrollDown, isBottom) => {
    const [className, setClassName] = useState(classNames.visible);

    const changeClass = (hidden = false) => {
        hidden ? setClassName(classNames.hidden) : setClassName(classNames.visible);
    };

    useEffect(() => {
        if (scrollDown) {
            changeClass(true);
            if (isBottom) {
                changeClass();
            }
        } else {
            changeClass();
        }
    }, [scrollDown, isBottom]);

    return className;
};

export default useHeaderClassname;