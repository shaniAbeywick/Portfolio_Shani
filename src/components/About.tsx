"use client";
import React, { useState } from "react";
import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Shani Abeywickrama",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+94 713317531",
  },
  {
    icon: <MailIcon size={20} />,
    text: "shaniabeywickrama294@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 2 September , 1997",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "B.Sc. (Hons) in Management and Information Technology specializing in Information Technolog ,University of Kelaniya",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "No.74/2, Talwatta, Gonawala,Kelaniya",
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      { name: "HTML,CSS,Javascript,Typescript, ReactJS,Vue Js,NextJs,Nuxtjs,PHP,Python, Java, C++" },
      { name: "Bootstrap,Tailwind css" },
      { name: "MySQL, Microsoft SQL Server, PostgreSQL,MongoDB" },
      { name: "Jira, Docker, Figma, Python, Data visualization, Supervised learning alogorithms, Unsupervised learning alogorithms, ANN" },
    ],
  },
  {
    title: "Technologies",
    data: [
      {
        imgPath: (
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 361"><path fill="#e44d26" d="m255.555 70.766l-23.241 260.36l-104.47 28.962l-104.182-28.922L.445 70.766z"></path><path fill="#f16529" d="m128 337.95l84.417-23.403l19.86-222.49H128z"></path><path fill="#ebebeb" d="M82.82 155.932H128v-31.937H47.917l.764 8.568l7.85 88.01H128v-31.937H85.739zm7.198 80.61h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58l-.14.037l-35.568-9.604z"></path><path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0M92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88zm62.74 0h16.235v32.508h22.824v16.05h-39.06z"></path><path fill="#fff" d="M127.89 220.573h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576H127.89zm0-64.719v.078h77.143l.64-7.178l1.456-16.191l.763-8.568H127.89z"></path></svg>
        ),
        name: "SVG Icon",
      },
      {
        imgPath: (
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 361"><path fill="#264de4" d="M127.844 360.088L23.662 331.166L.445 70.766h255.11l-23.241 260.36z"></path><path fill="#2965f1" d="m212.417 314.547l19.86-222.49H128V337.95z"></path><path fill="#ebebeb" d="m53.669 188.636l2.862 31.937H128v-31.937zm-5.752-64.641l2.903 31.937H128v-31.937zM128 271.58l-.14.037l-35.568-9.604l-2.274-25.471h-32.06l4.474 50.146l65.421 18.16l.147-.04z"></path><path d="M60.484 0h38.68v16.176H76.66v16.176h22.506v16.175H60.484zm46.417 0h38.681v14.066h-22.505v2.813h22.505v32.352h-38.68V34.46h22.505v-2.813H106.9zm46.418 0H192v14.066h-22.505v2.813H192v32.352h-38.681V34.46h22.505v-2.813H153.32z"></path><path fill="#fff" d="m202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08z"></path></svg>
        ),
        name: "SVG Icon",
      },
      {
        imgPath: (
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="#f7df1e" d="M0 0h256v256H0z"></path><path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"></path></svg>
        ),
        name: "SVG Icon",
      },
      {
        imgPath: (
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="#3178c6" d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0"></path><path fill="#fff" d="M150.518 200.475v27.62q6.738 3.453 15.938 5.179T185.849 235q9.934 0 18.874-1.899t15.678-6.257q6.738-4.359 10.669-11.394q3.93-7.033 3.93-17.391q0-7.51-2.246-13.163a30.8 30.8 0 0 0-6.479-10.055q-4.232-4.402-10.149-7.898t-13.347-6.602q-5.442-2.245-9.761-4.359t-7.342-4.316q-3.024-2.2-4.665-4.661t-1.641-5.567q0-2.848 1.468-5.135q1.469-2.288 4.147-3.927t6.565-2.547q3.887-.906 8.638-.906q3.456 0 7.299.518q3.844.517 7.732 1.597a54 54 0 0 1 7.558 2.719a41.7 41.7 0 0 1 6.781 3.797v-25.807q-6.306-2.417-13.778-3.582T198.633 107q-9.847 0-18.658 2.115q-8.811 2.114-15.506 6.602q-6.694 4.49-10.582 11.437Q150 134.102 150 143.769q0 12.342 7.127 21.06t21.638 14.759a292 292 0 0 1 10.625 4.575q4.924 2.244 8.509 4.66t5.658 5.265t2.073 6.474a9.9 9.9 0 0 1-1.296 4.963q-1.295 2.287-3.93 3.97t-6.565 2.632t-9.2.95q-8.983 0-17.794-3.151t-16.327-9.451m-46.036-68.733H140V109H41v22.742h35.345V233h28.137z"></path></svg>
        ),
        name: "SVG Icon",
      },
      {
        imgPath: (
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><g fill="none"><rect width={256} height={256} fill="#f4f2ed" rx={60}></rect><path fill="#000" d="M121.451 28.054c-.43.039-1.799.176-3.031.273c-28.406 2.561-55.014 17.889-71.867 41.447C37.17 82.873 31.167 97.731 28.9 113.47c-.801 5.494-.899 7.117-.899 14.565c0 7.449.098 9.072.9 14.565c5.434 37.556 32.16 69.111 68.406 80.802c6.491 2.092 13.333 3.519 21.114 4.379c3.031.332 16.129.332 19.16 0c13.431-1.486 24.809-4.809 36.031-10.538c1.72-.879 2.053-1.114 1.818-1.309c-.156-.118-7.488-9.952-16.285-21.838l-15.992-21.603l-20.04-29.658c-11.026-16.305-20.097-29.639-20.176-29.639c-.078-.019-.156 13.158-.195 29.248c-.059 28.172-.078 29.306-.43 29.97c-.508.958-.899 1.349-1.721 1.78c-.625.312-1.173.371-4.125.371h-3.382l-.9-.567a3.65 3.65 0 0 1-1.31-1.427l-.41-.88l.04-39.198l.058-39.218l.606-.763c.313-.41.978-.938 1.447-1.192c.801-.391 1.114-.43 4.496-.43c3.989 0 4.653.156 5.69 1.29c.293.313 11.143 16.657 24.125 36.344a89122 89122 0 0 0 39.452 59.765l15.836 23.989l.802-.528c7.096-4.614 14.604-11.183 20.547-18.026c12.649-14.526 20.802-32.238 23.539-51.124c.801-5.493.899-7.116.899-14.565s-.098-9.071-.899-14.565c-5.435-37.556-32.161-69.11-68.407-80.801c-6.393-2.073-13.196-3.5-20.821-4.36c-1.877-.196-14.8-.41-16.422-.254m40.938 60.489c.938.469 1.701 1.368 1.975 2.306c.156.509.195 11.379.156 35.875l-.059 35.152l-6.197-9.502l-6.217-9.501v-25.552c0-16.52.078-25.807.195-26.257c.313-1.094.997-1.954 1.936-2.463c.801-.41 1.095-.45 4.164-.45c2.894 0 3.402.04 4.047.392"></path></g></svg>
        ),
        name: "SVG Icon",
      },

      {
        imgPath: (
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32"><circle cx={16} cy={15.974} r={2.5} fill="#00d8ff"></circle><path fill="#00d8ff" d="M16 21.706a28.4 28.4 0 0 1-8.88-1.2a11.3 11.3 0 0 1-3.657-1.958A3.54 3.54 0 0 1 2 15.974c0-1.653 1.816-3.273 4.858-4.333A28.8 28.8 0 0 1 16 10.293a28.7 28.7 0 0 1 9.022 1.324a11.4 11.4 0 0 1 3.538 1.866A3.4 3.4 0 0 1 30 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 0 1-8.7 1.191m0-10.217a28 28 0 0 0-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2c0 .928 1.349 2.387 4.311 3.4A27.2 27.2 0 0 0 16 20.51a27.6 27.6 0 0 0 8.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.33 2.33 0 0 0-1.01-1.573a10.2 10.2 0 0 0-3.161-1.654A27.5 27.5 0 0 0 16 11.489"></path><path fill="#00d8ff" d="M10.32 28.443a2.64 2.64 0 0 1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.8 28.8 0 0 1 3.4-8.593a28.7 28.7 0 0 1 5.653-7.154a11.4 11.4 0 0 1 3.384-2.133a3.4 3.4 0 0 1 2.878 0c1.489.858 1.982 3.486 1.287 6.859a28.8 28.8 0 0 1-3.316 8.133a28.4 28.4 0 0 1-5.476 7.093a11.3 11.3 0 0 1-3.523 2.189a4.9 4.9 0 0 1-1.624.307m1.773-14.7a28 28 0 0 0-3.26 8.219c-.553 2.915-.022 4.668.75 5.114c.8.463 2.742.024 5.1-2.036a27.2 27.2 0 0 0 5.227-6.79a27.6 27.6 0 0 0 3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.33 2.33 0 0 0-1.868.089A10.2 10.2 0 0 0 17.5 6.9a27.5 27.5 0 0 0-5.4 6.849Z"></path><path fill="#00d8ff" d="M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.8 28.8 0 0 1-5.747-7.237a28.7 28.7 0 0 1-3.374-8.471a11.4 11.4 0 0 1-.158-4A3.4 3.4 0 0 1 8.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 0 1 5.39 6.934a28.4 28.4 0 0 1 3.41 8.287a11.3 11.3 0 0 1 .137 4.146a3.54 3.54 0 0 1-1.494 2.555a2.6 2.6 0 0 1-1.315.324m-9.58-10.2a28 28 0 0 0 5.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9c.8-.465 1.39-2.363.782-5.434A27.2 27.2 0 0 0 19.9 13.74a27.6 27.6 0 0 0-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.33 2.33 0 0 0-.855 1.662a10.2 10.2 0 0 0 .153 3.565a27.5 27.5 0 0 0 3.236 8.1Z"></path></svg>
        ),
        name: "SVG Icon",
      },
      {
        imgPath: (
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><g fill="none"><rect width={256} height={256} fill="#f4f2ed" rx={60}></rect><path fill="#00dc82" d="M138.787 189.333h68.772c2.184.001 4.33-.569 6.222-1.652a12.4 12.4 0 0 0 4.554-4.515a12.24 12.24 0 0 0-.006-12.332l-46.185-79.286a12.4 12.4 0 0 0-4.553-4.514a12.53 12.53 0 0 0-12.442 0a12.4 12.4 0 0 0-4.553 4.514l-11.809 20.287l-23.09-39.67a12.4 12.4 0 0 0-4.555-4.513a12.54 12.54 0 0 0-12.444 0a12.4 12.4 0 0 0-4.555 4.513L36.67 170.834a12.24 12.24 0 0 0-.005 12.332a12.4 12.4 0 0 0 4.554 4.515a12.5 12.5 0 0 0 6.222 1.652h43.17c17.104 0 29.718-7.446 38.397-21.973l21.072-36.169l11.287-19.356l33.873 58.142h-45.16zm-48.88-19.376l-30.127-.007l45.16-77.518l22.533 38.759l-15.087 25.906c-5.764 9.426-12.312 12.86-22.48 12.86"></path></g></svg>
        ),
        name: "SVG Icon",
      },
      {
        imgPath: (
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 128 128"><path fill="none" d="m0 8.934l49.854.158l14.167 24.47l14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02l-38.476 66.053L25.691 9.592L.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168l-15.053 24.647L49.216 9.73l-22.794-.168l37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01"></path><path fill="#35495e" d="m25.997 9.393l23.002.009L64.035 34.36L79.018 9.404L102 9.398L64.15 75.053z"></path><path fill="#41b883" d="m.91 9.569l25.067-.172l38.15 65.659L101.98 9.401l25.11.026l-62.966 108.06z"></path></svg>
        ),
        name: "SVG Icon",
      },
      {
        imgPath: (
          <svg xmlns="http://www.w3.org/2000/svg" width="8em" height="2em" viewBox="0 0 512 64"><defs><linearGradient id="logosTailwindcss0" x1="-2.778%" x2="100%" y1="32%" y2="67.556%"><stop offset="0%" stopColor="#2298bd"></stop><stop offset="100%" stopColor="#0ed7b5"></stop></linearGradient></defs><path fill="url(#logosTailwindcss0)" d="M52.867 0Q31.72 0 26.433 21.147q7.93-10.575 18.504-7.93c4.021 1.005 6.896 3.923 10.078 7.153c5.183 5.26 11.182 11.35 24.285 11.35q21.147 0 26.433-21.147q-7.93 10.575-18.503 7.93c-4.022-1.005-6.896-3.923-10.078-7.153C71.968 6.09 65.97 0 52.867 0M26.433 31.72Q5.287 31.72 0 52.867q7.93-10.575 18.503-7.93c4.022 1.005 6.897 3.923 10.078 7.152c5.184 5.262 11.183 11.35 24.286 11.35q21.146 0 26.433-21.146q-7.93 10.575-18.503 7.93C56.775 49.218 53.9 46.3 50.718 43.07c-5.183-5.26-11.182-11.35-24.285-11.35"></path><path fill="#2d3748" d="M158.592 26.73h-9.226v17.858c0 4.762 3.125 4.688 9.226 4.39v7.217c-12.351 1.488-17.262-1.934-17.262-11.607V26.731h-6.845v-7.738h6.845V8.999l8.036-2.38v12.374h9.226zm35.17-7.737h8.036v37.202h-8.036v-5.357c-2.827 3.944-7.217 6.325-13.02 6.325c-10.12 0-18.528-8.557-18.528-19.569c0-11.086 8.408-19.568 18.527-19.568c5.804 0 10.194 2.38 13.021 6.25zm-11.756 30.506c6.696 0 11.756-4.985 11.756-11.905s-5.06-11.905-11.756-11.905s-11.756 4.985-11.756 11.905s5.06 11.905 11.756 11.905m33.185-36.087c-2.828 0-5.134-2.38-5.134-5.133a5.144 5.144 0 0 1 5.134-5.134a5.144 5.144 0 0 1 5.134 5.134c0 2.753-2.307 5.133-5.134 5.133m-4.018 42.783V18.993h8.035v37.202zm17.336 0V1.88h8.036v54.315zm60.194-37.202h8.482l-11.682 37.202h-7.887l-7.738-25.074l-7.812 25.074h-7.887l-11.682-37.202h8.482l7.218 25.67l7.812-25.67h7.664l7.738 25.67zm18.452-5.58c-2.827 0-5.134-2.381-5.134-5.134a5.144 5.144 0 0 1 5.134-5.134a5.144 5.144 0 0 1 5.134 5.134c0 2.753-2.307 5.133-5.134 5.133m-4.018 42.782V18.993h8.036v37.202zm36.905-38.17c8.333 0 14.286 5.655 14.286 15.328v22.842h-8.036V34.171c0-5.654-3.274-8.63-8.333-8.63c-5.283 0-9.45 3.124-9.45 10.714v19.94h-8.036V18.993h8.036v4.762c2.456-3.87 6.473-5.73 11.533-5.73m52.381-13.913h8.036v52.083h-8.036v-5.357c-2.827 3.944-7.217 6.325-13.02 6.325c-10.12 0-18.528-8.557-18.528-19.569c0-11.086 8.408-19.568 18.527-19.568c5.804 0 10.194 2.38 13.021 6.25zm-11.756 45.387c6.696 0 11.756-4.985 11.756-11.905s-5.06-11.905-11.756-11.905s-11.756 4.985-11.756 11.905s5.06 11.905 11.756 11.905m46.726 7.664c-11.235 0-19.643-8.557-19.643-19.569c0-11.086 8.408-19.568 19.643-19.568c7.292 0 13.616 3.794 16.593 9.598l-6.92 4.018c-1.637-3.497-5.283-5.73-9.747-5.73c-6.548 0-11.533 4.986-11.533 11.682s4.985 11.682 11.533 11.682c4.464 0 8.11-2.307 9.896-5.73l6.92 3.944c-3.126 5.878-9.45 9.673-16.742 9.673m29.985-27.902c0 6.77 20.015 2.678 20.015 16.443c0 7.44-6.473 11.459-14.509 11.459c-7.44 0-12.797-3.349-15.178-8.706l6.92-4.018c1.19 3.349 4.166 5.357 8.258 5.357c3.572 0 6.325-1.19 6.325-4.166c0-6.622-20.015-2.902-20.015-16.22c0-6.995 6.027-11.384 13.616-11.384c6.101 0 11.16 2.827 13.765 7.738l-6.77 3.794c-1.34-2.901-3.944-4.24-6.995-4.24c-2.902 0-5.432 1.264-5.432 3.943m34.301 0c0 6.77 20.015 2.678 20.015 16.443c0 7.44-6.473 11.459-14.509 11.459c-7.44 0-12.798-3.349-15.179-8.706l6.92-4.018c1.19 3.349 4.167 5.357 8.259 5.357c3.571 0 6.324-1.19 6.324-4.166c0-6.622-20.014-2.902-20.014-16.22c0-6.995 6.026-11.384 13.616-11.384c6.1 0 11.16 2.827 13.765 7.738l-6.771 3.794c-1.34-2.901-3.944-4.24-6.994-4.24c-2.902 0-5.432 1.264-5.432 3.943"></path></svg>
        ),
        name: "SVG Icon",
      },
      {
        imgPath: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px" baseProfile="basic"><path fill="#6c19ff" d="M6.391,10.671c-0.085-2.448,1.822-4.706,4.401-4.706h26.42c2.578,0,4.486,2.258,4.401,4.706 c-0.082,2.352,0.024,5.398,0.791,7.882c0.769,2.492,2.066,4.067,4.19,4.269v2.295c-2.124,0.202-3.421,1.777-4.19,4.269 c-0.767,2.484-0.873,5.53-0.791,7.882c0.085,2.448-1.822,4.706-4.401,4.706h-26.42c-2.578,0-4.486-2.258-4.4-4.706 c0.082-2.352-0.025-5.398-0.791-7.882c-0.769-2.492-2.069-4.067-4.194-4.269v-2.295c2.124-0.202,3.425-1.777,4.194-4.269 C6.367,16.07,6.473,13.023,6.391,10.671z"/><linearGradient id="Is-EGaxKcc0Cic9QMqyzGa" x1="17.846" x2="27.078" y1="-147.541" y2="-163.153" gradientTransform="matrix(1 0 0 -1 0 -132)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f1e5fc"/></linearGradient><path fill="url(#Is-EGaxKcc0Cic9QMqyzGa)" d="M25.042,34.016c4.366,0,6.997-2.138,6.997-5.664c0-2.665-1.877-4.595-4.665-4.9v-0.111 c2.048-0.333,3.655-2.235,3.655-4.359c0-3.026-2.389-4.997-6.03-4.997h-8.192v20.031H25.042z M19.994,16.525h4.238 c2.304,0,3.612,1.027,3.612,2.887c0,1.985-1.522,3.096-4.281,3.096h-3.57V16.525z M19.994,31.475v-6.594h4.21 c3.015,0,4.579,1.11,4.579,3.276c0,2.165-1.522,3.318-4.394,3.318H19.994z"/></svg>
        ),
        name: "SVG Icon",
      },
    ],
  },
];
const qualificationData = [
  {
    title: "education",
    data: [ 
      {
        university: "University of Kelaniya",
        qualifications: "B.Sc. (Hons) in Management and Information Technology specializing in Information Technology",
        years: "2019-2023",
      },
      {
        university: "EMBILIPITIYA PRESIDENT COLLEGE",
        qualifications: "G.C.E.Advanced level examination - Common Stream (Mathematics, Physics,ICT)",
        years: "2003-2017",
      }
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "CDAZZDEV | Sri Lanka",
        role: "Associate Front-end Developer",
        years: "DECEMBER 2023- PRESENT",
      },
      {
        company: "Imperial Edutech | Sri Lanka",
        role: "Associate Front-end Developer",
        years: "August 2023 - October 2023",
      },
      {
        company: "Capricon Solutions | Sri Lanka",
        role: "Intern Front-end Developer",
        years: "December 2022 - August 2023",
      },
      {
        company: "Atlas Axillia Peliyagoda",
        role: "IoT Trainee Internship",
        years: "August 2021 - January 2022",
      },
    ],
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const getData = (arr: any[], title: string) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section id="about" className="xl:h-[920px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="w-[400px] h-[400px] bg-no-repeat relative"
              imgSrc="/images/about.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs className="" value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              {/* tab content */}
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="mb-4">
                    Leveraging IT Expertise and Front-End Experience to Drive Innovation
                    </h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      Experienced front-end developer with a strong passion for
                      software solutions. Eager to embrace new challenges in
                      front-end or any IT-related roles, contributing to company
                      success while enhancing my skills.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-y-4 gap-x-10 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Sinhala</div>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* experience & education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (
                              item: { company: any; role: any; years: any },
                              index: React.Key | null | undefined
                            ) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (
                              item: {
                                university: any;
                                qualifications: any;
                                years: any;
                              },
                              index: React.Key | null | undefined
                            ) => {
                              const { university, qualifications, years } =
                                item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualifications}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="mb-8">Tools I Use Everyday</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (
                            item: { name: any },
                            index: React.Key | null | undefined
                          ) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-full text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>{" "}
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                      Technologies
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tool list */}
                      {/* Tool list */}
<div className="grid grid-cols-8 gap-x-8 gap-y-8 justify-items-center xl:justify-start">
  {getData(skillData, "Technologies").data.map(
    (
      item: { imgPath: any },
      index: React.Key | null | undefined
    ) => {
      const { imgPath } = item;
      
      // If it's the last two items, apply additional styling
      const isLastRow = index === getData(skillData, "Technologies").data.length - 2 || index === getData(skillData, "Technologies").data.length - 1;

      return (
        <div
          key={index}
          className={`${
            isLastRow ? 'col-span-2 flex justify-center  items-center' : ''
          }`}
        >
          {imgPath}
        </div>
      );
    }
  )}
</div>

                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
