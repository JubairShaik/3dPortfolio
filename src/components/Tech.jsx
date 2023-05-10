import React,{useState} from 'react';
// import {}
 

import { motion } from "framer-motion";
import {staggerContainer ,textVariant2} from "./../utils/motion";
import  SkillCard  from "./SkillCard";
import { exploreWorlds } from "../constants";

const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[44px] text-[30px] text-white  `}
  >
    {title}
  </motion.h2>
);


const Tech = () => {
  const [active, setActive] = useState('skill-3');

  return (

    <section className={`sm:p-16 xs:p-8 px-6 py-0 `}>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`lg:w-[80%] w-[100%] mx-auto flex flex-col`}>
  



    <div className="text-[4rem] mb-10 sm:text-[7rem] font-bold 
    justify-center flex leading-[5rem] sm:leading-[8rem] items-center bigtext  
    my-5 flex-col  ">
    <h2 className="font-Space text-center ">STUDENT FROM <br /></h2>
    
    <span className=" text-[6rem] sm:text-[8.6rem] aimltext">AI<span className="font-poppins font-medium text-violet-600 ">&</span>ML</span>
    </div>


    <TitleText
    
    title={<>The Technologies  I <span className="sm:text-[5rem] text-[2rem]">💜</span></>}
    textStyles="text-center"/>

      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
      {exploreWorlds.map((world, index) => (
        <SkillCard
          key={world.id}
          {...world}
          index={index}
          active={active}
          handleClick={setActive}
        />
      ))}
    </div>



    </motion.div>
    </section>
     
  )
}

export default Tech









































// import React from "react";

// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";
// import { styles } from './../styles/index';

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");































