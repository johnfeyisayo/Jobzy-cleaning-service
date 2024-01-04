import React from 'react';
import cardImage from '../assets/pexels-tima-miroshnichenko-6195125 (3).png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const CardData = [
  {
    id: 1,
    img: cardImage,
    title: 'Janitorial / Commercial',
    description:
      'We specialize in providing quality home cleaning services whenever you have a busy schedule.',
    subtitle: 'Service Includes: ',
    services:
      'Vacuuming, High & Low Dusting, Sweeping of Hard Floors, Cleaning of all Surfaces, Window Cleaning, and Waste Disposal'
  },
  {
    id: 2,
    img: cardImage,
    title: 'Home / Residential',
    description:
      'We specialize in providing quality home cleaning services whenever you have a busy schedule.',
    subtitle: 'Service Includes: ',
    services:
      'Vacuuming, High & Low Dusting, Sweeping of Hard Floors, Cleaning of all Surfaces, Window Cleaning, and Waste Disposal'
  },
  {
    id: 3,
    img: cardImage,
    title: 'Fumigation & Pest Control',
    description:
      'We specialize in providing quality home cleaning services whenever you have a busy schedule.',
    subtitle: 'Service Includes: ',
    services:
      'Vacuuming, High & Low Dusting, Sweeping of Hard Floors, Cleaning of all Surfaces, Window Cleaning, and Waste Disposal'
  },
  {
    id: 4,
    img: cardImage,
    title: 'Post Construction & Pre-moving',
    description:
      'We specialize in providing quality home cleaning services whenever you have a busy schedule.',
    subtitle: 'Service Includes: ',
    services:
      'Vacuuming, High & Low Dusting, Sweeping of Hard Floors, Cleaning of all Surfaces, Window Cleaning, and Waste Disposal'
  },
  {
    id: 5,
    img: cardImage,
    title: 'Hotel / Restaurant',
    description:
      'We specialize in providing quality home cleaning services whenever you have a busy schedule.',
    subtitle: 'Service Includes: ',
    services:
      'Vacuuming, High & Low Dusting, Sweeping of Hard Floors, Cleaning of all Surfaces, Window Cleaning, and Waste Disposal'
  },
  {
    id: 6,
    img: cardImage,
    title: 'Carpet, Rug & Upholstery',
    description:
      'We specialize in providing quality home cleaning services whenever you have a busy schedule.',
    subtitle: 'Service Includes: ',
    services:
      'Vacuuming, High & Low Dusting, Sweeping of Hard Floors, Cleaning of all Surfaces, Window Cleaning, and Waste Disposal'
  },
  {
    id: 7,
    img: cardImage,
    title: 'Event / Pre & After Party',
    description:
      'We specialize in providing quality home cleaning services whenever you have a busy schedule.',
    subtitle: 'Service Includes: ',
    services:
      'Vacuuming, High & Low Dusting, Sweeping of Hard Floors, Cleaning of all Surfaces, Window Cleaning, and Waste Disposal'
  },
  {
    id: 8,
    img: cardImage,
    title: 'Marble & Floor Restoration',
    description:
      'We specialize in providing quality home cleaning services whenever you have a busy schedule.',
    subtitle: 'Service Includes: ',
    services:
      'Vacuuming, High & Low Dusting, Sweeping of Hard Floors, Cleaning of all Surfaces, Window Cleaning, and Waste Disposal'
  },
  {
    id: 9,
    img: cardImage,
    title: 'Facade / Window',
    description:
      'We specialize in providing quality home cleaning services whenever you have a busy schedule.',
    subtitle: 'Service Includes: ',
    services:
      'Vacuuming, High & Low Dusting, Sweeping of Hard Floors, Cleaning of all Surfaces, Window Cleaning, and Waste Disposal'
  }
];

export function Cards() {
  return (
    <div className="">
      <Card sx={{ maxWidth: 345 }}>
        {CardData.map((card) => {
          return (
            <CardActionArea key={card.id}>
              <CardMedia component="img" height="140" image={card.img} alt={card.title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <h3>{card.title}</h3>
                </Typography>
                <Typography variant="body2" color="text.secondary" className="text-sm">
                  <p>{card.description}</p>
                </Typography>
                <Typography gutterBottom variant="h5" component="div" className="text-sm uppercase">
                  <h4>{card.subtitle}</h4>
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  <p>{card.services}</p>
                </Typography>
              </CardContent>
            </CardActionArea>
          );
        })}
      </Card>
    </div>
  );
}
// const filteredThree = CardData.filter(CardData => {
//     const data = ''
//     if(CardData.id === 1)
//     return data;
//     if(CardData.id === 2)
//     return data;
//     if(CardData.id === 3)
//     return data;

//   })
export const DataThree = [
  {
    id: 1,
    img: cardImage,
    title: 'Janitorial / Commercial',
    description:
      'We specialize in providing quality home cleaning services whenever you have a busy schedule.',
    subtitle: 'Service Includes: ',
    services:
      'Vacuuming, High & Low Dusting, Sweeping of Hard Floors, Cleaning of all Surfaces, Window Cleaning, and Waste Disposal'
  },
  {
    id: 2,
    img: cardImage,
    title: 'Home / Residential',
    description:
      'We specialize in providing quality home cleaning services whenever you have a busy schedule.',
    subtitle: 'Service Includes: ',
    services:
      'Vacuuming, High & Low Dusting, Sweeping of Hard Floors, Cleaning of all Surfaces, Window Cleaning, and Waste Disposal'
  },
  {
    id: 3,
    img: cardImage,
    title: 'Fumigation & Pest Control',
    description:
      'We specialize in providing quality home cleaning services whenever you have a busy schedule.',
    subtitle: 'Service Includes: ',
    services:
      'Vacuuming, High & Low Dusting, Sweeping of Hard Floors, Cleaning of all Surfaces, Window Cleaning, and Waste Disposal'
  }
];
// export function Filtered() {
//   return (
//     <div className='bg-[#E5E4E2]'>
//     <Card  className='md:flex  md:flex-row bg-[#E5E4E2] gap-10 md:h-[500px] '>
// { DataThree.map((card)=>{
//     return(
//       <CardActionArea key={card.id} className=''>
//         <CardMedia
//           component="img"
//           height="200"
//           image={card.img}
//           alt={card.title}

//         />
//         <CardContent className=''>
// <Typography  variant="h6" component="div" className='uppercase'>
//   {card.title}
// </Typography>
// <Typography variant="body2" color="text.secondary">
//  {card.description}
// </Typography>
// <Typography gutterBottom variant="subtitle1" component="div" className='uppercase'>
//   {card.subtitle}
// </Typography>
// <Typography gutterBottom variant="body2" component="div" color="text.secondary">
//   {card.services}
// </Typography>
//         </CardContent>
//       </CardActionArea>
//       );
//     })}
//     </Card>
//     </div>
//   )
// }

export function Filtered() {
  return (
    <div>
      <div className="flex  md:flex-row flex-col bg-[#E5E4E2] md:gap-10 gap-5  md:h-[500px] font-inter  text-start ">
        {DataThree.map((card) => {
          return (
            <div
              key={card.id}
              className="bg-white rounded-md shadow-lg hover:scale-110 duration-500">
              <img src={card.img} alt={card.title} className="rounded-t-md" />
              <div className="flex flex-col gap-3 p-5">
                <h3 className="uppercase text-lg ">{card.title}</h3>
                <p className="text-xs text-[#828181]">{card.description}</p>
                <h3 className="uppercase text-sm">{card.subtitle}</h3>
                <p className="text-xs text-[#828181]">{card.services}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
