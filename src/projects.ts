import { ProjectProps } from './Project';

export default [
  {
    image: '/radar.png',
    name: 'Radar',
    description: 'Flight Tracking App',
    link: 'https://radar.hylands.dev/',
    repoLink: 'https://github.com/joshuahylands/radar',
    techStackLogos: [
      '/ts.svg',
      '/react.svg',
      '/sass.png'
    ]
  },
  {
    image: '/jet.png',
    name: 'Jet API',
    description: 'Aviation Data API',
    link: 'https://jet.hylands.dev/',
    repoLink: 'https://github.com/joshuahylands/jet',
    techStackLogos: [
      '/ts.svg',
      '/nodejs.svg'
    ]
  },
  {
    name: 'Portfolio',
    description: 'This Site!',
    repoLink: 'https://github.com/joshuahylands/portfolio',
    techStackLogos: [
      '/ts.svg',
      '/react.svg',
      '/sass.png'
    ]
  }
] as ProjectProps[];
