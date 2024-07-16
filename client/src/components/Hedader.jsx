import { Link } from "react-router-dom"

const Hedader = () => {
  return (
    <div className="bg-gradient-to-r from-backgroundColor to-brightColor   @apply font-extralight z-10 ">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
            <Link to='/'>
            <h1 className="font-bold text-white text-xl ">Chok House</h1>
            </Link>
               

               <ul className="flex gap-4 text-white @apply font-extralight tracking-widest">
                <Link to='/'
                spy={true}
                smooth={true}
                duration={500}
                className="relative inline-block cursor-pointer group hover:text-white hover:opacity-60 font-semibold">
                <li>HOME</li>
                </Link>
                <Link to='/about'
                spy={true}
                smooth={true}
                duration={500}
                className="relative inline-block cursor-pointer group  hover:text-white hover:opacity-60 font-semibold">
                <li>ABOUT</li>
                </Link>
                <Link to='/product'
                spy={true}
                smooth={true}
                duration={500}
                className="relative inline-block cursor-pointer group  hover:text-white hover:opacity-60 font-semibold">
                <li>PRODUCT</li>
                </Link>
                <Link to='/contact'
                spy={true}
                smooth={true}
                duration={500}
                className="relative inline-block cursor-pointer group  hover:text-white hover:opacity-60 font-semibold">
                <li>CONTACT</li>
                </Link>
                <Link to='/sign-in'
                spy={true}
                smooth={true}
                duration={500}
                className="relative inline-block cursor-pointer group  hover:text-white hover:opacity-60 font-semibold">
                <li>SIGN-IN</li>
                </Link>
               </ul>
        </div>

    </div>
  )
}

export default Hedader
