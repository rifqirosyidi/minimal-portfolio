import React from "react";
import {
  RiCss3Fill,
  RiGatsbyFill,
  RiHtml5Fill,
  RiReactjsFill,
} from "react-icons/ri";
import {
  SiDjango,
  SiFigma,
  SiGimp,
  SiGit,
  SiGraphql,
  SiInkscape,
  SiJavascript,
  SiKdenlive,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiTailwindcss,
} from "react-icons/si";
import { Fade } from "react-reveal";
import { useIsomorphicLayoutEffect, useWindowSize } from "react-use";
import Jumbotron from "../../components/general/jumbotron/Jumbotron";
import Layout from "../../components/layout/layout";
import BackToTop from "../../components/navigation/backtotop/BackToTop";

const About = () => {
  const size = useWindowSize();

  useIsomorphicLayoutEffect(() => {
    document.body.style.height = `${size.height}px`;
  }, [size.height]);

  return (
    <Layout>
      <Jumbotron
        firstLabel="BIO"
        secondLabel="GRAPHY."
        description="want to know more about me?"
      />

      <div className="container mx-auto mb-40 sm:px-40">
        <div>
          <Fade bottom>
            <h2 className="font-geometric text-lg tracking-wide">
              MY CHILDHOOD
            </h2>
          </Fade>
          <Fade bottom>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 font-primary">
              I was born in Lamongan, I do not remember much of my early
              childhood, but my mom said I was very active, communicative, but
              very curious. I would ask some of questions that seems very unique
              to my mother. I do remember when my father also buy me the first
              bicycle. it was fun.
            </p>
          </Fade>
          <Fade bottom>
            <h2 className="mt-10 font-geometric text-lg tracking-wide">
              WHO I AM
            </h2>
          </Fade>
          <Fade bottom>
            <div className="mt-4 text-zinc-600 dark:text-zinc-400 font-primary">
              <p>
                Fortunately, my thirst for knowledge did not come to an end when
                I was at school. I was passionate about math, biology, and
                technology. This passion helped me gain a profound knowledge of
                these areas especialy in computer & technology.
              </p>
              <p className="mt-4">
                However I wasn&apos;t admitted to the college of my dreams. But
                i manage to get to one of private university with scholarship in
                Malang, I was a student of Sistem Informasi at STMIK Pradnya
                Paramita Malang, and I feel very happy about it.
              </p>
            </div>
          </Fade>

          <Fade bottom>
            <h2 className="mt-10 font-geometric text-lg tracking-wide">
              GOALS
            </h2>
          </Fade>
          <Fade bottom>
            <div className="mt-4 text-zinc-600 dark:text-zinc-400 font-primary">
              <p>
                I am certain that my degree will become my ticket to a better
                tomorrow. I want to become a great programmer in the field of
                web development. I study hard and devote my free time to build
                some projects, watch online tutorial from many sources, and
                sometimes talking with specialist in the field.
              </p>
            </div>
          </Fade>

          <Fade bottom>
            <h2 className="mt-10 font-geometric text-lg tracking-wide">
              CONCLUSION
            </h2>
          </Fade>
          <Fade bottom>
            <div className="mt-4 text-zinc-600 dark:text-zinc-400 font-primary">
              <p>
                I have come to believe that two main factors determine success.
                The first is a person’s determination and will to succeed.
                <p className="mt-4"></p>Are you ready to make sacrifices to
                achieve your goal?
              </p>
              <p className="mt-4">
                Are you prepared to recover after failure and proceed to your
                goal again?
              </p>
              <p className="mt-4">
                Second one is the support of people around you. Being determined
                to succeed does not mean alienating everyone and stepping on
                other people to achieve your goal. On the contrary, success is
                about recognizing your weaknesses and accepting support from
                people who genuinely want to help you.
              </p>
            </div>
          </Fade>
        </div>
      </div>
      <BackToTop />
    </Layout>
  );
};

export default About;
