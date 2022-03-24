import Section from "../Section";


interface Props {
    opened: boolean;
}

const NavMenu: React.FC<Props> = ({ opened }) => {

    return (
        <div className={`${opened ? "h-screen" : "h-0"} md:hidden w-full fixed left-0 top-0 bg-60-light -z-10 transition-all overflow-hidden`}>
            <div className={` ${opened ? "h-screen delay-150 duration-300" : "-translate-y-full"} flex justify-center items-center h-screen transition-all `}>
                <button onClick={() => alert("HEYEY")}>
                    <Section />
                </button>
            </div>
        </div>
    )
}

export default NavMenu