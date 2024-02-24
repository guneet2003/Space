import { skills,experiences } from "../constants";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 bg-transparent min-h-screen">
      <div className="head-text text-white">Hello I'm <span className="bg-[#b1372f] bg-clip-text text-transparent font-bold">Guneet </span>,</div>
      <div className="mt-5 flex flex-col gap-3 text-gray-300">
        <p>
        Specializing in web development and passionate about crafting 2D game animations using Spine 2D, I bring a blend of leadership experience from an Edtech startup and hands-on expertise in the MERN stack through the project MindSpace. This positions me for success in the realms of web development and 2D animation, reflecting my commitment to excellence in both fields.
        </p>
      </div>
      <div className="py-10 flex flex-col text-white">
        <h3 className="subhead-text">My Skills </h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="block-container w-20 h-20 ">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

   
<hr className="border-gray-500" />
              <CTA />
    </section>
  );
}

export default About;
