'use client';
import ProjectCard from '@/components/ProjectCard';
import { Tabs,TabsList,TabsContent,TabsTrigger } from '@/components/ui/tabs';
import React,{useState} from 'react'

const projectData = [
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
    {
      image: '/images/ITfirm.png',
      category: 'Next.js',
      name: 'Tech Innovators - IT Firm Website',
      description: 'A dynamic website for a leading IT firm, built using Next.js and Tailwind CSS, with a focus on performance and scalability to meet modern web demands.',
      link: '/',
      github: 'https://github.com/shaniAbeywick/it-company-website/tree/main',
    },
    {
      image: '/images/nuxt.png',
      category: 'Nuxt.js',
      name: 'Culinary Delight - Restaurant Website',
      description: 'A visually appealing and responsive restaurant website crafted using Nuxt.js and Tailwind CSS, showcasing the best of culinary experiences with modern design.',
      link: '/',
      github: 'https://github.com/shaniAbeywick/test.com',
    }
  ];
  

const uniqueCategories = [
    'all projects',
    ...Array.from(new Set(projectData.map((item) => item.category))),
  ];


const Projects = () => {
    const [categories,setCategories] =useState(uniqueCategories);
    const [category,setCategory] =useState('all projects');
    const filteredProjects = projectData.filter((project)=>{
        return category==='all projects'
        ? project:project.category===category;
    })
  return (
    <section className='min-h-screen pt-12'>
        <div className="container mx-auto">
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'></h2>
            {/* tabs */}
            <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
                <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
                    {categories.map((category,index) =>{
                        return <TabsTrigger onClick={()=>setCategory(category)}  value={category} key={index} className='capitalize w-[162px]md:w-auto'>{category}</TabsTrigger>;
                    })}
                </TabsList>
                {/* tab content */}
                <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    {filteredProjects.map((project,index)=>{
                        return(
                            <TabsContent value={category} key={index}>
                                <ProjectCard project={project}/>
                            </TabsContent>
                        );
                    })}
                </div>
            </Tabs>
        </div>

    </section>
  )
}

export default Projects;