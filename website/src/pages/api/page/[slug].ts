import { IPage } from 'de-cms';
import type { NextApiRequest, NextApiResponse } from 'next';

const mockHomePage: IPage = {
  id: '1234',
  pageId: 'home',
  title: 'Home',
  description:
    'Australian digital agency specialising in developing websites for small businesses to enterprise solutions and experts in the tourism industry.',
  slug: 'home',
  tags: [],
  type: 'page',
  content: [
    {
      type: 'banner',
      title: 'Take your business to the next level with Data Estate',
      subtitle: 'Tailored web solutions for digital competency',
    },
    {
      type: 'section',
      title: 'Services',
      subtitle: 'View our services',
      styleName: 'services',
      content: [
        {
          type: 'article',
          styleName: 'serviceSummary',
          image: '/images/icon-design-thinking.png',
          title: 'Discovery & Consulting',
          text: 'Identify the correct business needs for the right business solution.',
        },
        {
          type: 'article',
          styleName: 'serviceSummary',
          image: '/images/icon-ux-design.png',
          title: 'UX/UI Design',
          text: `Create the suitable user's experience (UX) and user interface (UI) for your digital solution.`,
        },
        {
          type: 'article',
          styleName: 'serviceSummary',
          image: '/images/icon-development.png',
          title: 'Development',
          text: 'Develop your digital solution with optimised and scalable code.',
        },
        {
          type: 'article',
          styleName: 'serviceSummary',
          image: '/images/icon-hosting-support.png',
          title: 'IT Management',
          text: 'Hosting, email management, migration to the cloud. We’ve got you covered. ',
        },
      ],
    },
    {
      type: 'section',
      title: 'testimonial',
      styleName: 'testimonial',
      text: `<p class"description">Data Estate listened to our needs, responsive in communication via phone & email, worked with us, as well as in conjunction with our copywriter to ensure the best outcome was provided to our website… <a href="/project/floating-images/">read more</a><br /><p class="signoff">Graeme Day <br />- <em>Chief Pilot, <a href="https://www.floatingimages.com.au" target="_blank" rel="noreferrer noopener">Floating Images Hot Air Balloon</a></p>`,
    },
  ],
};

const pageDataHandler = (req: NextApiRequest, res: NextApiResponse<IPage>) => {
  res.status(200).json(mockHomePage);
};

export default pageDataHandler;
