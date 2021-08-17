import '../styles/MenuIcon.css';

function MenuIcon({isOpen, setIsOpen}){

    if (isOpen === true ){
        return (
            <div className="small-navbar-open" onClick={() => setIsOpen(false)}>
                <div className="bar1 change"></div>
                <div className="bar2 change"></div>
                <div className="bar3 change"></div>
            </div>
        )
    } else if (isOpen === false) {
        return (
            <div className="small-navbar-close" onClick={() => setIsOpen(true)}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>

        )
    }

}

export default MenuIcon