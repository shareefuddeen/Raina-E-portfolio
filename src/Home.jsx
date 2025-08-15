import bg from "./assets/woman-teaching-classroom.webp"
import {motion} from "framer-motion"
import {Link} from "react-router-dom";

export const Home = () => {
  return (
    <section className="min-h-screen relative">
    <div className="absolute bg-black/30 h-full w-full"></div>
    <img src ={bg}  className="h-full w-full object-cover "/>
    	<nav className="absolute top-1 p-10">
    		<div>
    			<motion.h2
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:.6, delay:2.1}}
           className="text-6xl text-white raina" >Raina</motion.h2>
    		</div>
    	</nav>  
    <div className="flex absolute inset-0 gap-2 px-4">
    	<motion.div
    	initial={{}}
    	animate={{width:0}}
    	transition={{duration:.6, delay:.2}}
    	 className="h-full w-3/4 bg-black/60 opacity-85 blur-2xl"></motion.div>
    	<motion.div 
    	initial={{}}
    	animate={{width:0}}
    	transition={{duration:.6, delay:.4}}
    	className="h-full w-3/4 bg-black/60 opacity-85 blur-2xl"></motion.div>
    	<motion.div 
    	initial={{}}
    	animate={{width:0}}
    	transition={{duration:.6, delay:.6}}
    	className="h-full w-3/4 bg-black/60 opacity-85 blur-2xl"></motion.div>
    	<motion.div
    	initial={{}}
    	animate={{width:0}}
    	transition={{duration:.6, delay:.8}}
    	 className="h-full w-3/4 bg-black/60 opacity-85 blur-2xl"></motion.div>
    </div>  	
    <div className="flex-row lg:flex lg:absolute w-full h-2/3 p-12 lg:gap-4 bottom-22 ">
      <motion.div
        initial={{opacity:0, scale:.4}}
        animate={{opacity:1,scale:1}}
        transition={{duration:.6, delay:1}}
        className="lg:w-[62em] w-1/2 shadow-2xl mb-12 overflow-hidden mx-auto relative bg-white rounded-md lg:h-[22em] h-1/2 group p-2 text-center">
    		<div className="transition-all duration-500 z-10 rounded-t-md h-2 w-full bg-orange-600 absolute bottom-0 left-0 group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:right-0 group-hover:bottom-0"></div>
        <Link to="/philosophy">
        <div className="w-full flex flex-col gap-6 h-full group-hover:text-white">
           <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2" 
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mx-auto transition-colors z-60 duration-500"
      >
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
        <path d="M9 18h6"/>
        <path d="M10 22h4"/>
      </svg>
          <h2 className="h1 text-4xl max-w-[12ch] mx-auto group-hover:z-60">Teaching Philosophy</h2>
          <p className = "font-serif text-lg tracking-wider group-hover:z-60">Guiding learners through inspiration, engagement, and purposeful instruction.</p>
        </div>
    	</Link>
      </motion.div>
      <motion.div
      initial={{opacity:0, scale:.4}}
        animate={{opacity:1,scale:1}}
        transition={{duration:.6, delay:1.2}}
       className="lg:w-[62em] w-1/2 shadow-2xl mb-12 overflow-hidden mx-auto relative bg-white rounded-md lg:h-[22em] h-1/2 group p-2 text-center">
        <div className="transition-all duration-500 z-10 rounded-t-md h-2 w-full bg-yellow-600 absolute bottom-0 left-0 group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:right-0 group-hover:bottom-0"></div>
        <Link to="/reflective">
        <div className="w-full flex flex-col gap-6 h-full group-hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2" 
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mx-auto transition-colors z-60 duration-500"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>
          <h2 className="h1 text-4xl max-w-[12ch] mx-auto group-hover:z-60">Reflective Practice</h2>
          <p className = "font-serif text-lg tracking-wider group-hover:z-60">Continually refining practice through critical self-evaluation and experience.</p>
        </div>
      </Link>
      </motion.div>
      <motion.div
      initial={{opacity:0, scale:.4}}
        animate={{opacity:1,scale:1}}
        transition={{duration:.6, delay:1.4}}
       className="lg:w-[62em] w-1/2 shadow-2xl mb-12 overflow-hidden mx-auto relative bg-white rounded-md lg:h-[22em] h-1/2 group p-2 text-center">
        <div className="transition-all duration-500 z-10 rounded-t-md h-2 w-full bg-pink-600 absolute bottom-0 left-0 group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:right-0 group-hover:bottom-0"></div>
        <Link to="/cv">
        <div className="w-full flex flex-col gap-6 h-full group-hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg"         height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2" 
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mx-auto transition-colors z-60 duration-500"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>
          <h2 className="h1 text-4xl max-w-[12ch] mx-auto group-hover:z-60">Curriculum Vitae</h2>
          <p className = "font-serif text-lg tracking-wider group-hover:z-60">A comprehensive record of professional growth, skills, and achievements.</p>
        </div>
      </Link>
      </motion.div>
      <motion.div
        initial={{opacity:0, scale:.4}}
        animate={{opacity:1,scale:1}}
        transition={{duration:.6, delay:1.6}}
       className="lg:w-[62em] w-1/2 shadow-2xl mb-12 overflow-hidden mx-auto relative bg-white rounded-md lg:h-[22em] h-1/2 group p-2 text-center">
        <div className="transition-all duration-500 z-10 rounded-t-md h-2 w-full bg-purple-600 absolute bottom-0 left-0 group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:right-0 group-hover:bottom-0"></div>
        <Link to="/media">
        <div className="w-full flex flex-col gap-6 h-full group-hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg"  height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2" 
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mx-auto transition-colors z-60 duration-500"><path d="M15 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z"/><path d="M21 12.17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"/><path d="m6 21 5-5"/><circle cx="9" cy="9" r="2"/></svg>
          <h2 className="h1 text-4xl max-w-[12ch] mx-auto group-hover:z-60">Pictures and Videos</h2>
          <p className = "font-serif text-lg tracking-wider group-hover:z-60">Visual and multimedia evidence that illustrates practice and impact.</p>
        </div>
      </Link>
      </motion.div>	
    </div>
    </section>
  )
}

export default Home;