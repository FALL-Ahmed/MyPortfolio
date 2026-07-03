import React, { useRef } from "react";
import Button from "./Button";
import LiveTicker from "./ParallaxText";
import { projectsData} from "../assets/lib/data";
import { ToastContainer} from "react-toastify";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const ProjectSlider: React.FC = () => {
  const { ref } = useSectionInView("Projects");
  const { language } = useLanguage();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["1 1", "1.3 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <React.Fragment>
      <section
        className=" skill-banner relative overflow-x-clip h-100% w-full flex flex-col gap-2 "
        id="projects"
        ref={ref}
      >
        <ToastContainer
          className="w-max text-3xl block p-3 "
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div
          className="quote-outer-container bg-[--darkblue] -rotate-3 flex justify-center items-center scale-110 pt-32 pb-32 max-lg:pt-16 max-lg:pb-16 max-lg:-ml-44 max-lg:-mr-44 max-lg:scale-100 "
          style={{
            backgroundImage:
              "radial-gradient(ellipse at top right, rgba(0,230,118,0.15) 0%, transparent 60%), linear-gradient(135deg, #111111 0%, #0A0A0A 100%)",
          }}
        >
          <div className="title-container flex flex-col gap-6 mb-24 rotate-3 justify-between items-center max-lg:w-[100vw]">
            <motion.div
              ref={animationReference}
              style={{
                scale: scaleProgess,
                opacity: opacityProgess,
                textAlign: "center",
              }}
            >
              <p className="text-[--white] mt-16 mb-6">
                <span className="text-[--orange]">&lt;</span>
                {language === "FR" ? "Projets" : "Projects"}
                <span className="text-[--orange]">/&gt;</span>
              </p>
              <h2 className="text-[--white] mb-16">
                {language === "FR" ? "Mes projets" : "My Projects"}
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 min-[1400px]:grid-cols-3 gap-10 w-[80vw] max-lg:hidden min-[1921px]:px-96">
              {projectsData.map((project, index: number) => (
                <article
                  key={index}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] shadow-2xl"
                >
                  <img
                    src={project.image}
                    alt={`${project.title}-project-mockup`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-10 transition-opacity duration-300 group-hover:opacity-0">
                    <h2 className="text-white bg-[--darkblue] inline-block w-fit px-6 py-3 rounded-xl">{project.title}</h2>
                  </div>
                  <div className="absolute inset-0 bg-[--darkblue] flex flex-col justify-between p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-white text-2xl">{project.title}</h3>
                      <p className="text-white text-lg leading-snug line-clamp-5">
                        {language === "FR"
                          ? project.description
                          : project.description_EN}
                      </p>
                      <div className="technologies">
                        <div className="flex gap-6">
                          {project.technologies.map(
                            (technology, innerIndex: number) => (
                              <img
                                key={innerIndex}
                                src={technology.icon}
                                alt={`${project.title}-icon`}
                                className="h-[3rem]"
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content={technology.name}
                              />
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="buttons flex gap-10 shrink-0">
                      {project.title === "Mammamia gelato" ? (
                        <Button
                          label="(Confidentiel)"
                          onClick={() => alert("Le lien de la démo est confidentiel et ne peut pas être partagé.")}
                          iconSVG={project.deploymenticon}
                          buttoncolor={project.colors.main}
                          iconcolor={project.colors.icon}
                        />
                      ) : (
                        <Button
                          label="Live Demo"
                          link={project.deploymenturl}
                          iconSVG={project.deploymenticon}
                          buttoncolor={project.colors.main}
                          iconcolor={project.colors.icon}
                        />
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {projectsData.map((project, index: number) => (
              <article
                key={index}
                className="bg-darkblue flex flex-col gap-10 w-[80%] h-full  border-lightblue border-[0.4rem] p-8 rounded-xl mb-10 min-[1024px]:hidden max-lg:w-[90%]"
              >
                <h2 className="text-white">{project.title}</h2>
                <img
                  src={project.image}
                  alt={project.image}
                  className="h-[35vh] w-full object-cover object-top rounded-3xl"
                />
                <div className="buttons flex gap-10 max-lg:flex-col">
                {project.title === "Mammamia gelato" ? (
          <Button
            label="(Confidentiel)"
            onClick={() => alert("Le lien de la démo est confidentiel et ne peut pas être partagé.")}
            iconSVG={project.deploymenticon}
            buttoncolor={project.colors.main}
            iconcolor={project.colors.icon}
          />
        ) : (
          <Button
            label="Live Demo"
            link={project.deploymenturl}
            iconSVG={project.deploymenticon}
            buttoncolor={project.colors.main}
            iconcolor={project.colors.icon}
          />
        )}
                 
                </div>
                <p className="text-white  max-lg:text-4xl">
                  {language === "FR"
                    ? project.description
                    : project.description_EN}
                </p>

                <div className="technologies">
                  <h3 className="text-white">
                    {language === "FR" ? "Technologien" : "Technologies"}
                  </h3>
                  <div className="grid grid-cols-3 gap-10 p-4">
                    {project.technologies.map(
                      (technology, innerIndex: number) => (
                        <img
                          key={innerIndex}
                          src={technology.icon}
                          alt={`${project.title}-icon`}
                          className="h-[5rem] w-[60%] "
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content={technology.name}
                          loading="lazy"
                        />
                      )
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <LiveTicker />
      </section>
      <ReactTooltip
        place="top"
        id="my-tooltip"
        style={{
          fontSize: "1.5rem",
          backgroundColor: "var(--orange)",
        }}
      />
    </React.Fragment>
  );
};

export default ProjectSlider;
