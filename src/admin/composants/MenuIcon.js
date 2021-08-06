import '../styles/MenuIcon.css';

function MenuIcon({isOpen, setIsOpen}){

    if (isOpen == true ){
        return (
            <div className="small-navbar-open" onClick={() => setIsOpen(false)}>
                <div class="bar1 change"></div>
                <div class="bar2 change"></div>
                <div class="bar3 change"></div>
            </div>
        )
    } else if (isOpen == false) {
        return (
            <div className="small-navbar-close" onClick={() => setIsOpen(true)}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>

        )
    }

}

export default MenuIcon