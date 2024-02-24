 import React from "react";
 import { experiences } from "../constants";
 import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 bg-transparent min-h-screen">

<div className="head-text text-white">A curated collection of <span className="bg-[#71f487] bg-clip-text text-transparent font-bold">Projects</span></div>
      <div className="mt-5 flex flex-col gap-3 text-gray-300">
        <p>
        Specializing in web development and passionate about crafting 2D game animations using Spine 2D, I bring a blend of leadership experience from an Edtech startup and hands-on expertise in the MERN stack through the project MindSpace. This positions me for success in the realms of web development and 2D animation, reflecting my commitment to excellence in both fields.
        </p>
      </div>
   
   <div className="py-16">
      <h3 className="subhead-text">Work Experience</h3>
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
    </section>
  )
}

export default Projects