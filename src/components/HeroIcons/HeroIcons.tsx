import { Icon } from '@iconify/react'

const HeroIcons = () => {

    const data = [
        { icon: "fa6-brands:github", link: "https://github.com/PPadilla44" },
        { icon: "fa6-brands:linkedin", link: "https://www.linkedin.com/in/pablo-padilla-6861b5137/" },
        { icon: "fa-solid:envelope", link: "mailto:padilla.pablo1998@gmail.com" }
    ]

    return (
        <div className='flex gap-3'>
            {
                data.map((d, i) => (
                    <a href={d.link} target={"_blank"} key={`${d.icon}-${i}`} className='cursor-pointer rounded-lg w-12 h-12 flex items-center justify-center active:bg-red-800 hover:bg-dom transition-all ease-in-out'>
                        <Icon icon={d.icon} width={40} height={40} />
                    </a>
                ))
            }

        </div>
    )
}

export default HeroIcons