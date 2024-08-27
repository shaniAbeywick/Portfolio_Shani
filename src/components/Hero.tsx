import { Download,Send } from "lucide-react";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import { Button } from "@/components/ui/button"
import Socials from "./Socials";
import DevImg from "./DevImg";
import Image from "next/image";


const Hero = () => {
  return (
    <section className="py-12 xl:py-24 xl:pt-28 ">
        <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
                {/* text */}
                <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                    <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">IT Enthusiast</div>
                    <h1 className="mb-4">Hello, my name is Shani Abeywickrama</h1>
                    <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
                    With a B.Sc. (Hons) in Management and Information Technology, specializing in Information Technology, I bring a wealth of knowledge and hands-on experience to the IT industry. I thrive on tackling new challenges and have a proven track record in front-end development. I am eager to contribute to the success of dynamic companies while continuously enhancing my skills and expertise.
                    </p>
                    {/* buttons */}
                    <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                        <Link href="./contact">
                        <Button className="gap-x-2">
                            Contact me <Send size={18}/> 
                        </Button>
                        </Link>
                        <a href="/Resume-shani.pdf" download><Button variant="secondary" className="gap-x-2 hover:bg-primary hover:text-white">Download CV<Download size={18}/></Button></a>
                        
                    </div>
                    {/* socials */}
                    <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px] hover:text-primary transition-all' />
                </div>
                {/* image */}
                <div className="hidden xl:flex">
                    <DevImg containerStyles='bg-hero_shape relative bg-no-repeat bg-cover w-[500px] h-[620px]' imgSrc='/images/edited_profile.jpg'/>
                </div>
            </div>
            <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-2 animate-bounce">
                <RiArrowDownSLine className='text-3xl text-primary'/>
            </div>

        </div>
    </section>
  )
}

export default Hero