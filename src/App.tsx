import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import MoreProjects from './components/MoreProjects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <a href="#work" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:rounded focus:bg-surface focus:px-3 focus:py-2">
          Skip to work
        </a>
        <Header />
        <main>
          <Hero />
          <FeaturedProjects />
          <MoreProjects />
          <Experience />
          <Skills />
        </main>
        <Contact />
      </MotionConfig>
    </LazyMotion>
  )
}
