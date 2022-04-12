import { Link } from "react-scroll";
import { NavData } from "../../data/NavData";
import Button from "../Button";
import HeroIcons from "../HeroIcons";

interface Props {
    opened: boolean;
    close: () => void;
}

const NavMenu: React.FC<Props> = ({ opened, close }) => {

    return (
        <div className={`${opened ? "h-screen" : "h-0"} bg-white md:hidden w-full fixed left-0 top-0 bg-burg -z-10 transition-all overflow-hidden`}>
            <div className={` ${opened ? "h-screen delay-150 duration-300" : "-translate-y-full"} flex flex-col justify-center items-center pl-4 h-screen transition-all `}>
                <div className="flex flex-col gap-6 h-full justify-center">
                    {
                        NavData.map((n, i) => (
                            <Link
                                onClick={close}
                                smooth={true}
                                offset={-50}
                                spy={true}
                                key={`navMenu-${i}`}
                                activeClass='font-normal underline-offset-4 underline'
                                className='cursor-pointer  text-4xl  hover:font-normal active:translate-y-[2px] '
                                to={n.link} >
                                <span>{n.title}</span>
                            </Link>
                        ))
                    }
                    <Link className=" w-full flex justify-center" onClick={close} smooth={true} to='contact' spy={true}>
                        <Button className={`flex transition-all ease-in-out text-4xl font-normal`} text='Contact Me' />
                    </Link>
                    <HeroIcons />
                </div>
            </div>
        </div>
    )
}

export default NavMenu