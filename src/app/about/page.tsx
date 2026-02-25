'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/utils/animations'

import { BsRobot } from "react-icons/bs";

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-32">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I am an aspiring Full Stack Developer with a strong foundation in the MERN stack (MongoDB, Express.js, React, Node.js) & GenAI. Passionate about building scalable web applications and solving complex problems with clean, efficient code. As a fresher, I am eager to apply my skills in a dynamic engineering team, contribute to real-world projects, and continuously learn modern web technologies.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
              <li>Flask</li>
              <li>Streamlit</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>Firebase</li>
              <li>MongoDB</li>
              <li>SQL</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>VS Code</li>
              <li>Android Studio</li>
              <li>Postman</li>
              <li>Jupyter Notebook</li>
              {/* Git, Postman , VS Code, GitHub, AWS , Hoppscotch, Android Studio, Jupyter Notebook */}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md mt-10 w-[340px] "
            variants={fadeInUp}
            {...cardHover}
          >
            <BsRobot size={25} color="#007AFF" />
            <h3 className="text-xl font-semibold mb-2 mt-3">AI</h3>
            <ul className="text-secondary space-y-2">
              <li>LangChain</li>
              <li>LangGraph</li>
            </ul>
          </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Experience
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Frontend Developer Intern</h3>
            <p className="text-primary mb-2">Banaras Locomotive Works (Indian Railways) – Varanasi, Uttar Pradesh  • Jul 2025 – Aug 2025</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Developed the frontend of “RailCinema”, a MERN-stack web app for online ticket booking</li>
              <li>Built a responsive UI with React.js, enhancing usability for railway employees.</li>
              <li>Collaborated with the EDP team to integrate frontend with backend services.</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
            <p className="text-primary mb-2">TheSmartBridge         • Jan 2025 – Mar 2025</p>
            <p className="text-primary mb-2">Intern - Remote</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Developed an online meeting web app with React, Node.js, Express, and MongoDB.</li>
              <li>Implemented user authentication, meeting scheduling, and real-time video calls using Agora.</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Bachelor of Computer Science and Engineering</h3>
            <p className="text-primary mb-2">Rajkiya Engineering Collage Sonbhadra • 2022 - 2026</p>
            <p className="text-secondary">
              <span  className='italic text-white mb-4'>Currently Pursuing</span>
                <br />
                I’m developing a solid foundation in engineering while actively exploring modern technologies that shape today’s digital world. My academic journey is supported by hands-on projects, problem-solving practice, and continuous learning that strengthens my technical mindset.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md "
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Intermediate education</h3>
            <p className="text-primary mb-2">Mahatma Gandhi Inter College Gorakhpur • 2021</p>
            <p className="text-secondary">
              <span  className='italic text-white mb-4'>Grade - A </span>
                <br />
                percentage - 77.6%
            </p>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md "
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">High School education</h3>
            <p className="text-primary mb-2">A.N.Singh Senior Secondary School Gorakhpur • 2019</p>
            <p className="text-secondary">
              <span  className='italic text-white mb-4'>Grade - A </span>
                <br />
                percentage - 85%
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
} 