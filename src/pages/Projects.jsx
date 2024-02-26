 import React from "react";
 import { experiences } from "../constants";
 import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <section className="max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 bg-transparent min-h-screen">

<div className="head-text text-white">A curated collection of <span className="bg-[#71f487] bg-clip-text text-transparent font-bold">Projects</span></div>
      <div className="mt-5 flex flex-col gap-3 text-gray-300">
        <p>
          I've honed my skills through various projects, including backend development for Mindspace, an app offering spiritual solutions for mental health, frontend development for Coders Point, an e-learning platform, and captivating animations as a Spine 2D Animator, bringing digital media projects to life with fluid movement and expressive gestures.
        </p>
      </div>
   
   <div className="py-16">
      <h3 className="subhead-text text-white">Work Experience</h3>
      <div className="mt-5 flex flex-col gap-3 text-gray-300">
        <p>
          Worked on many projects, levelling up my skills. Some are listed below:
        </p>
      </div>
      <div className="mt-12 flex ">
        <VerticalTimeline>
          {experiences.map((experience) =>(
           <VerticalTimelineElement
           key={experience.company_name}
           date={experience.date}
           icon={
            <div className="flex justify-center items-center w-full h-full">
              {/* <img src={experience.icon}
              alt={experience.company_name} 
              className="w-[60%] h-[60] object-contain"/> */}
            </div>}
            iconStyle={{background: experience.iconBg}}
            contentStyle={{
              borderBottom: '8px',
              borderStyle: 'solid',
              borderBottomColor:experience.iconBg,
              boxShadow:'none'
            }}
          >

            <div>
              <h3 className="text-black
               text-xl font-semibold ">
                {experience.title}
              </h3>
              <p className="text-black font-medium font-base style:{(margin:0)} ">
                {experience.company_name}
              </p>
            </div>
            <ul className="my-5 list-disc ml-5 space-y-2">
            {experience.points.map((point, index) => (
              <li key={`experience-point-${index}`} className="text-500 font-normal pl-1 text-sm">
              {point}
              </li>
              ))}

            </ul>
           </VerticalTimelineElement> 
          ))}
        </ VerticalTimeline>
      </div>
    </div>
    <hr className="border-gray-500" />
    <CTA isProjectsPage={true} />
    <Footer />
    </section>
  )
}

export default Projects