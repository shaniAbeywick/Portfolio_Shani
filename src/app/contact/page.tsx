import React from "react";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import Form from "@/components/Form";
import Image from "next/image";
import emailjs from "emailjs-com";

const Contact = () => {
  
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <p className="text-primary">Say Hello👋 </p>
            </div>
            <h1 className="h1 max-w-md mb-8">Let&apos;s Work Together</h1>
            <p className="subtitle max-w-[400px]">
            I’m excited to collaborate and explore new opportunities. If you have a project in mind, a question, or just want to say hello, feel free to reach out.{" "}
            </p>
          </div>
          <div>
            <Image src="/images/contact.jpg" alt="contactImage" className="hidden lg:block" width={500} height={500}/>

          </div>
        </div>
        {/* form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
            <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
                <div className="flex items-center gap-x-8">
                    <MailIcon size={18} className="text-primary"/>
                    <div>shaniabeywickrama294@gmail.com</div>
                </div>
                <div className="flex items-center gap-x-8">
                    <HomeIcon size={18} className="text-primary"/>
                    <div>65/18A , Pallegama ,Embilipitiya</div>
                </div>
                <div className="flex items-center gap-x-8">
                    <PhoneCall size={18} className="text-primary"/>
                    <div>(+94) 71 331 7531</div>
                </div>
            </div>
            {/* form */}
            <Form/>


        </div>
       
       
      </div>
    </section>
  );
};

export default Contact;
