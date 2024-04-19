import { ref } from 'vue'

import image1 from '@/assets/centrum.jpg'
import image2 from '@/assets/commercialPizza.jpg'
import image3 from '@/assets/trapholtWebsite.jpg'
import image4 from '@/assets/trapholtIllustrations.jpg'
import image6 from '@/assets/menu.jpg'
import image7 from '@/assets/marshall.jpg'
import heroPoster from '@/assets/posterHero.jpg'
import MenuHero from '@/assets/MenuHero.jpg'
import trapholtHero from '@/assets/trapholtHero.jpg'
import banner from '@/assets/banner.jpg'

const getPortfolio = () => {
  const portfolioItems = ref([
    {
      id: 1,
      title: 'TRAPHOLT',
      type: '| Website',
      description: "For our final exam project in the first semester, our group was assigned the task of developing a website for Trapholt Museum. Each member contributed to both the design and coding facets of the website. Throughout the project, effective communication and collaboration were paramount, ensuring that our individual contributions harmonized seamlessly. We successfully created a website that not only met the requirements of the exam but also reflected our commitment to delivering a responsive and visually captivating online platform for Trapholt Museum.",
      image: image3,
      picture: trapholtHero,
      category: 'DESIGN & DEVELOPMENT',
      link: 'https://jakubrepa.github.io/',
      tools: 'Tools | Figma, HTML, CSS, Java Script',
    },
    {
      id: 2,
      title: 'TRAPHOLT',
      type: '| Banner',
      description: "As a group, we were tasked with creating graphical elements for our final exam project, following our chosen color palette and design theme of Nanna Ditzel's stripes to represent Trapholt's theme. I took the lead in designing both a poster and a website banner. By incorporating our color palette and the stripes motif, I ensured that the graphical elements aligned seamlessly with Trapholt's aesthetic. The poster and banner served as impactful visual representations of Nanna Ditzel's influence on Trapholt's identity. Our collaborative effort resulted in cohesive and visually striking graphical elements for our exam project.",
      image: image4,
      picture: banner,
      category: 'CONTENT CREATION',
      tools: 'Tools | Adobe Illustrator, Adobe Photoshop'
    },
    {
      id: 3,
      title: 'CENTRUM ESBJERG',
      type: '| Poster',
      description: "For our group project, we were tasked with selecting a specific area of Esbjerg to feature in a magazine and corresponding poster. Choosing the vibrant city center, I took the lead in designing the poster. Using illustrations, I depicted the distinctive buildings of Esbjerg, capturing its unique charm. To enhance interactivity, I integrated a functional QR code, offering viewers an immersive experience. The poster serves as both a visual representation and a gateway to explore the Esbjerg's city center.",
      image: image1,
      category: 'CONTENT CREATION',
      picture: heroPoster,
      tools: 'Tools | Adobe Illustrator'
    },
    {
      id: 4,
      title: 'LA PIZZA FACTORY',
      type: '| Menu',
      description: 'La Pizza Factory approached me to redesign their menu, focusing primarily on altering its layout. Throughout the project, I maintained open communication with them to ensure their specific requirements were addressed. Incorporating their feedback, I emphasized key sections of the menu to enhance visibility and ensure customers needs were met. The redesign process involved close collaboration to achieve a layout that effectively showcased their offerings. The resulting menu showcases their preferences while prioritizing ease of use for their customers.',
      image: image6,
      category: 'CONTENT CREATION',
      picture: MenuHero,
      tools: 'Tools | Adobe Illustrator'
    },
    {
      id: 6,
      title: 'MARSHALL',
      type: '| Commercial',
      description: 'For our school project, we were assigned to create a video commercial, and we decided to promote Marshall. I took charge of video editing, music production, and animated the logo at the end. With meticulous attention to detail, I ensured the visuals and music aligned seamlessly with Marshalls brand image. The animated logo provided a captivating conclusion to our commercial, enhancing its professional appeal. Our collaborative efforts resulted in a compelling advertisement for our school project.',
      image: image7,
      video: 'https://www.youtube.com/embed/xn3XgjieGE0',
      category: 'VIDEO PRODUCTION',
      tools: 'Tools | Adobe Premiere Pro, Adobe After Effects'
    },
    {
      id: 7,
      title: 'LA PIZZA FACTORY',
      type: '| Commercial',
      description: 'We were asked by La Pizza Factory to produce a commercial tailored for Instagram and Facebook advertisements. I managed the filming and editing process, concluding with the creation of an animated logo using After Effects. To enhance its appeal, we integrated trending music, resulting in a dynamic video ad poised to elevate the brands online presence and audience engagement.',
      image: image2,
      video: 'https://www.youtube.com/embed/mEkq1Q1dJDA',
      category: 'VIDEO PRODUCTION',
      tools: 'Tools | Adobe Premiere Pro, Adobe After Effects' 
    },
  ])

  return { portfolioItems }
}

export default getPortfolio


