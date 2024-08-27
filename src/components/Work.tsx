"use client";
import Link from 'next/link';
import { Button } from './ui/button';
import React from 'react'

// Swipper styles
import 'swiper/css';
import 'swiper/css/pagination'
import {Swiper,SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules'

// components
import ProjectCard from './ProjectCard';


const projectData = [
    {
        image: '/images/nuxt.png',
        category: 'Nuxt.js',
        name: 'Culinary Delight - Restaurant Website',
        description: 'A visually appealing and responsive restaurant website crafted using Nuxt.js and Tailwind CSS, showcasing the best of culinary experiences with modern design.',
        link: '/',
        github: 'https://github.com/shaniAbeywick/test.com',
      },
      {
        image: '/images/ITfirm.png',
        category: 'Next.js',
        name: 'Tech Innovators - IT Firm Website',
        description: 'A dynamic website for a leading IT firm, built using Next.js and Tailwind CSS, with a focus on performance and scalability to meet modern web demands.',
        link: '/',
        github: 'https://github.com/shaniAbeywick/it-company-website/tree/main',
      },
    {
      image: '/images/react.png',
      category: 'React.js',
      name: 'Pedal Power - Bike Shop Showcase',
      description: 'A sleek and modern bike shop website built with React.js and Tailwind CSS, featuring responsive design and a seamless browsing experience for cycling enthusiasts.',
      link: '/',
      github: 'https://github.com/shaniAbeywick/BikeShop',
    },
    {
      image: '/images/React-App.png',
      category: 'React.js',
      name: 'WebMastery - Clean and Responsive Site',
      description: 'A stylish and highly responsive sample website built with React.js and Tailwind CSS, designed for quick navigation and a clean user interface.',
      link: '/',
      github: '#',
    },
    
    
  ];
  

const Work = () => {
  return (
   <section className='relative mb-12 xl:mb-48'>
    <div className='container mx-auto'>
        {/* text */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
            <h2 className='section-title mb-4'>Latest Projects</h2>
            <p className='subtitle mb-8'>
            Dive into my latest creations, where cutting-edge technology meets elegant design. These projects highlight my expertise in building responsive, user-friendly interfaces and showcase the innovative solutions I&apos;ve delivered across various domains.
            </p>
            <Link href="/projects"><Button>All Projects</Button></Link>
        </div>
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
            <Swiper className='h-[550px]' slidesPerView={1} breakpoints={{
                640:{
                    slidesPerView:2
                }
            }} spaceBetween={30} modules={[Pagination]} pagination={{clickable:true}}>
            {projectData.slice(0.4).map((project,index)=>{
                return(
                    <SwiperSlide key={index}>
                        <ProjectCard project={project} />
                    </SwiperSlide>
                )
            })}
            </Swiper>       
        </div>

    </div>
   </section>

  )
}

export default Work