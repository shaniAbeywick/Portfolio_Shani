'use client';
import React, { useRef } from 'react'
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User,MailIcon,ArrowRightIcon,MessageSquare } from 'lucide-react';
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';


const Form = () => {
     // Correctly type the ref to handle an HTMLFormElement
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure that form.current is not null before using it
    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
        )
        .then(
          (result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message sent successfully!',
              text: 'Your message has been sent and we will get back to you soon.',
              confirmButtonText: 'OK',
            });
          },
          (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Failed to send the message',
              text: 'There was an error sending your message. Please try again later.',
              confirmButtonText: 'OK',
            });
          }
        );

     // Cast e.currentTarget to HTMLFormElement to use reset()
     (e.currentTarget as HTMLFormElement).reset(); // Reset the form after submission
    };
};
  return (
    <form action="" ref={form} onSubmit={sendEmail} className='flex flex-col gap-y-4'>
        {/* input */}
        <div className='relative flex items-center'>
            <Input type='name' id='name' name='name' placeholder='Name'/>
            <User className='absolute right-6' size={20} />
        </div>
        <div className='relative flex items-center'>
            <Input type='email' id='email' name='email' placeholder='Email'/>
            <MailIcon className='absolute right-6' size={20} />
        </div>
        <div className='relative flex items-center'>
            <Textarea name='message' placeholder='Type Your Message Here....'/>
            <MessageSquare className='top-4 absolute right-6' size={20} />
        </div>
        <Button className='flex items-center max-w-[166px] gap-x-1'>Let&apos;s Talk
            <ArrowRightIcon size={20}/>
        </Button>
    </form>
  )
}

export default Form