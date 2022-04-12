
interface Props {
    opened: boolean;
}

const NavMenu: React.FC<Props> = ({ opened }) => {

    return (
        <div className={`${opened ? "h-screen" : "h-0"} bg-white md:hidden w-full fixed left-0 top-0 bg-burg -z-10 transition-all overflow-hidden`}>
            <div className={` ${opened ? "h-screen delay-150 duration-300" : "-translate-y-full"} flex justify-center items-center h-screen transition-all `}>
                <button onClick={() => alert("HEYEY")}>
                </button>
            </div>
        </div>
    )
}

export default NavMenu