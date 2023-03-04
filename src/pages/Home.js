import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className='chonkiDonkie'>
        <p>Hmmmmm</p>
      </div>
    );
  }
}

export default Home;














// import { Card } from '../components/Card/Card';
// import { Banner } from '../components/Banner/Banner';
// import { ImageHero } from '../components/ImageHero/ImageHero';
// import { CardGroup } from '../components/CardGroup/CardGroup';
// import { Marquee } from '../components/Marquee/Marquee';
// import { Grid, Column } from '@carbon/react';
// import { Heading } from '../components/Heading/Heading';

// class Home extends Component {
//     render() {
//       const marquee = {
//         text: 'Signal scanning workshop: the future of cultural and creative expression — September 8, 9-11 am — Media Evolution City, Stora Varvsgatan 6a, Malmö',
//       };
//       function clickTest() {
//         console.log('test');
//       }

//       const cards = [
//         {
//           id: 1,
//           category: ['Article'],
//           tags: ['literature', 'cafe'],
//           heading: 'Mindful Technologies Helping Solve Global Water Crisis',
//           speaker: 'Paul Wall & John Tomato',
//           speakerPrefix: 'by',
//           location: 'Malmö Live',
//           dateTime: '21 October  16.00 — 18.00',
//           url: 'newPage',
//           imageSrc:
//             'https://images.unsplash.com/photo-1501419737817-eadda6b445e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80',
//           imageAlt: 'img',
//           paragraph:
//             'Media Evolution City is the hub for the digital and creative industries in Malmö. We offer a wide range of office solutions and meeting rooms and also a restaurant facing the old shipyards and docks of Kockums if you just want to swing by for a coffee or lunch.',
//           variant: 'secondary',
//         },
//         {
//           id: 2,
//           category: ['place'],
//           tags: ['literature', 'cafe'],
//           heading:
//             'We offer a wide range of office solutions and meeting rooms and also a restaurant',

//           url: 'newPage',
//           imageSrc:
//             'https://images.unsplash.com/photo-1501419737817-eadda6b445e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80',
//           imageAlt: 'img',
//           paragraph:
//             'The biggest part of our community works within the digital industries. But you can also find organizations within architecture and culture as well as insurance and management. Everyone’s different, but they all have one thing in common, they want to collaborate to foster innovation and growth.',
//           variant: 'primary',
//         },
//         {
//           id: 3,
//           category: ['article'],
//           tags: ['literature', 'cafe'],

//           heading: 'Deep dive into futures of creative output',

//           url: 'newPage',
//           imageSrc:
//             'https://images.unsplash.com/photo-1501419737817-eadda6b445e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80',
//           imageAlt: 'img',
//           paragraph:
//             'The biggest part of our community works within the digital industries. But you can also find organizations within architecture and culture as well as insurance and management. Everyone’s different, but they all have one thing in common, they want to collaborate to foster innovation and growth.',
//           variant: 'primary',
//         },
//       ];

//       const bannerContent = {
//         id: 'subscribe-banner',
//         title: 'Become a member. Reap the benefits.',
//         buttonText: 'Subscribe',
//         onClick: clickTest,
//       };

//       const imageHeroContent = {
//         src: 'https://images.unsplash.com/photo-1501419737817-eadda6b445e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80',
//         alt: 'water',
//         header: 'This is water',
//         category: 'Article',
//       };

//       return (
//         <div className="chonkiDonkie">
//         <p>Hmmmmm</p>
//           <Marquee {...marquee} />
//           <ImageHero
//             id={1}
//             link={clickTest}
//             variant={'image'}
//             imageSrc={
//               'https://images.unsplash.com/photo-1499988921418-b7df40ff03f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3456&q=80'
//             }
//             imageAlt={'water'}
//             header={
//               'How science fictions’s hopes and fears can inspire humanity’s response '
//             }
//             category={'Article'}
//           />
//           <ImageHero
//             id={1}
//             link={clickTest}
//             variant={'image'}
//             imageSrc={
//               'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3274&q=80'
//             }
//             imageAlt={'water'}
//             header={'If only the forest could talk '}
//             category={'Article'}
//           />
//           <ImageHero
//             id={1}
//             link={clickTest}
//             variant={'image'}
//             imageSrc={
//               'https://images.unsplash.com/photo-1508624217470-5ef0f947d8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80'
//             }
//             imageAlt={'water'}
//             header={
//               'Ocean Blues: a workshop about biodiversity loss in the ocean'
//             }
//             category={'Workshop'}
//             date={'27 October'}
//             time={'15.00 — 16.00'}
//           />
//           <ImageHero
//             id={1}
//             link={clickTest}
//             variant={'image'}
//             imageSrc={
//               'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80'
//             }
//             imageAlt={'water'}
//             header={'Biomimicry — A Regenerative Paradigm'}
//             category={'Book'}
//           />
//           <ImageHero
//             id={1}
//             link={clickTest}
//             variant={'color'}
//             header={'Value Creation in an Era of Climate Disruption'}
//             category={'Article'}
//             backgroundColour={'##F3F1E5'}
//           />
//           <ImageHero
//             id={1}
//             link={clickTest}
//             variant={'color'}
//             header={'Value Creation in an Era of Climate Disruption'}
//             category={'Article'}
//             backgroundColour={'#FFE2D7'}
//           />
//           <ImageHero
//             id={1}
//             link={clickTest}
//             variant={'color'}
//             header={'Value Creation in an Era of Climate Disruption'}
//             category={'Article'}
//             backgroundColour={'#FF6454'}
//           />
//           <Heading heading={'What we offer'} />
//           <CardGroup
//             array={cards}
//             cardVariant={'tertiary'}
//             divider={'right'}
//           ></CardGroup>
//         </div>
//       );
//     }
//   }

//   export default Home;
