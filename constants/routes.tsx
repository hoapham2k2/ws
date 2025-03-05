// constants/routes.ts

import FakeBlueScreen10 from "@/components/(prank-screen)/blue-screen-of-death-windows-10/FakeBlueScreen10";
import FakeBlueScreen10_Sidebar from "@/components/(prank-screen)/blue-screen-of-death-windows-10/FakeBlueScreen10_Sidebar";
import FakeBlueScreen from "@/components/(prank-screen)/blue-screen-of-death-windows/FakeBlueScreen";
import BrokenScreen from "@/components/(prank-screen)/broken-screen/BrokenScreen";
import HackerSpeedInput from "@/components/(prank-screen)/hacker-screen/HackerSpeedInput";
import HackerTyper from "@/components/(prank-screen)/hacker-screen/HackerTyper";
import { WhiteNoisePlayButton } from "@/components/(prank-screen)/white-noise/WhiteNoisePlayButton";
import WhiteNoiseScreen from "@/components/(prank-screen)/white-noise/WhiteNoiseScreen";
import DVDSaver from "@/components/DVDSaver/DVDSaver";
import FakeChromeOS from "@/components/FakeChromeOS/FakeChromeOS";
import FakeOSUpdate from "@/components/FakeOSUpdate/FakeOSUpdate";
import FakeUbuntu from "@/components/FakeUbuntu/FakeUbuntu";
import FakeUpdateWin10 from "@/components/FakeUpdateWin10/FakeUpdateWin10";
import FakeUpdateWinXP from "@/components/FakeUpdateWinXP/FakeUpdateWinXP";
import FlipClockPreview from "@/components/FlipClock/FlipClockPreview";
import MotivationQuotesPreview from "@/components/MotivationQuotes/MotivationQuotesPreview";
import MotivationQuotesRight from "@/components/MotivationQuotes/MotivationQuotesRight";
import NoSignalPreview from "@/components/NoSignalPage/NoSignalPreview";
import ChromeOSUpdateScreen from "@/public/chrome-os-update-screen.webp";
import WindowsXPUpdateScreen from "@/public/windows-xp-update-screen.webp";
import Windows10UpdateScreen from "@/public/windows-10-update-screen.webp";
import Ubuntu2204UpdateScreen from "@/public/ubuntu-22-04-update-screen.webp";
import MacOSXUpdateScreen from "@/public/mac-os-x-update-screen.webp";
import WhiteNoiseIcon from "@/public/white-noise.webp";
import BrokenScreenIcon from "@/public/broken.webp";
import DeathXPIcon from "@/public/death.webp";
import Death10Icon from "@/public/death-10.webp";
import HackerTyperIcon from "@/public/hacker-typer.webp";
import DVDIcon from "@/public/dvd.webp";
import FlipClockIcon from "@/public/flip-clock.webp";
import MotivationalQuoteIcon from "@/public/motivational-quote.webp";
import NoSignalIcon from "@/public/saver-color-bars.png";
import { ReactNode } from "react";
import { StaticImageData } from "next/image";
import FakeUpdateWin11 from "@/components/FakeUpdateWin11/FakeUpdateWin11";
import FakeAndroidUpdateIcon from "@/public/android-logo.png";
import FakeWin11UpdateIcon from "@/public/fake-update-win11.png";
import FakeAndroidUpdate from "@/components/FakeAndroidUpdate/FakeAndroidUpdate";

export class RouteStore {
  name: string;
  path: string;
  color?: string;
  icon?: string;
  isAxis?: boolean;
  title: string;
  type: "color" | "prank" | "fake-update" | "screensaver";
  components?: {
    left?: ReactNode;
    mid?: ReactNode;
    right?: ReactNode;
    bottom?: ReactNode;
  };
  thumbnail?: StaticImageData;
  tip?: {
    title: string;
    content: Record<string, string>;
    subTips?: Record<string, string[]>;
  };

  constructor(
    name: string,
    path: string,
    title: string,
    type: "color" | "prank" | "fake-update" | "screensaver",
    color?: string,
    icon?: string,
    isAxis?: boolean,
    thumbnail?: StaticImageData,
    tip?: {
      title: string;
      content: Record<string, string>;
      subTips?: Record<string, string[]>;
    },
  ) {
    this.name = name;
    this.path = path;
    this.color = color;
    this.icon = icon;
    this.isAxis = isAxis;
    this.title = title;
    this.type = type;
    this.thumbnail = thumbnail;
    this.tip = tip;
  }
}

export const routes: RouteStore[] = [
  // Color Screens
  {
    name: "White Screen",
    path: "/",
    color: "#FFFFFF",
    isAxis: false,
    title: "White screen",
    type: "color",
    tip: {
      title: "white screen",
      content: {
        "white screen to copy drawings":
          "I needed to have something bright under a paper, so i could redraw a image easier.",
        "white screen as a light source":
          "Lighting up the back of a lightbox for product photography",
        "white screen to check monitor":
          "Check your monitor and find dead pixels.",
        "white screen to blank screen":
          "Don't want to be distrupted? Want to take a brake? Use a white screen to blank your screen.",
        "white screen as a light to read":
          "To get a source of light and be able to read books when it's dark in the room and the light switch is too far away.",
        "white screen as a light to makeup":
          "As a bright light source for doing makeup or taking pictures",
        "white screen to clean monitor":
          "Silly, but I use it for monitor cleaning. It makes things on the screen obvious. :) I also use it to validate plain colour reproduction for different monitors, but that only comes up rarely and I'm not looking for professional colour grading.",
        "white screen to look for dust":
          "Consistent backdrop to clean my monitor on, and also to check for dead/stuck pixels. Also sometimes for lighting my face when I'm using a webcam.",
        "white screen to catch flies":
          "I was catching little flies as they were attracted to white screen on my display",
        "white screen to make a flipbook":
          "I'm working on a animated sequence, and i'm doing it the traditional way (by hand), so i need a white surface with light that allows me to put one piece of paper over another and be able to see both, so since i don't have a professional screen for this, i'm using my computer and putting the white screen on it so i don't touch anything by mistake",
        "white screen to focus yourself":
          "While studying, I use 2 screens, one with a timer and one to search whatever I need on the internet. When I am not searching, I put the white screen so I don't get distracted with anything on the computer",
        "white screen to configure your monitor settings":
          "Useful when adjusting settings in my secondary monitor (since it's quite old it doesn't just set stuff how it should be by default). Settings like vertical/horizontal position and vertical/horizontal scale. Also useful when searching for dead pixels.",
        "white screen to draw at night":
          "If I'm drawing on paper, I can put paper on top of my display drawing tablet and see what I'm drawing at night",
        "White Screen for Lighting":
          "Turn your display into a simple and efficient light source with our white screen tool. Perfect for video calls or photography where extra lighting is needed.",
        "White Screen for Visual Purity":
          "Experience a pure, clean and soothing visual environment using our full-screen white display. Ideal for relaxing, meditating or focusing on tasks without visual distractions.",
        "White Screen for Design Work":
          "Utilize our white screen tool as a blank canvas for design, drawing or any creative activities. A blank white screen allows your creativity to flow unimpeded.",
      },
      subTips: {
        "White screen for cleaning": [
          "white screen for monitor cleaning",
          "white screen to find dead pixels",
          "white screen to find dirty spots",
        ],
        "White light online": [
          "white light for reading",
          "white light for video calls",
          "white color light",
          "white screen/light for selfie",
          "white led lights online",
        ],
        Others: [
          "white screen for projector",
          "white screen for kids",
          "white fullscreen background",
        ],
      },
    },
  },
  {
    name: "Black Screen",
    path: "/black-screen",
    color: "#000000",
    isAxis: false,
    title: "Full Black Screen",
    type: "color",
    tip: {
      title: "black screen",
      content: {
        "black screen to make second monitor dark without turning it off":
          "Quickly make second monitor dark without turning it off when playin some atmospheric game or watching some movie that turned out to be worth of doing so.",
        "black screen to save electricity":
          "Trying to save electricity, reduce carbon emission.",
        "black screen to hide fact computer is active":
          "To put on my 4 monitors when I go to sleep, instead of putting them to sleep.",
        "black screen to clean monitor":
          "Easier to see spots when I'm wiping off my screen",
        "black screen to make a dark background":
          "Background for a game. Screen is too big, 3440x1440. Don't like to play it that big, so i do 2560x1440. Need black bezels at both sides.",
        "black screen to help prevent burn in plasma TV":
          "I have an old plasma TV. I don't have computer speakers so when I want to play music loud, I turn on my TV and hook it up via HDMI. Plasma's are highly susceptible to burn-in so rather than leaving Windows Media Player or whatever on the screen, I use black screen to help prevent burn in. I've used various websites. But they don't seem to stay online for very long.",
        "black screen to concentrate while studying":
          "To not turn off my screen and concentrate while studying. Well my screen is very bright and it doesnt help with concentration, a black screen fixes that.",
        "black screen to relax eyes":
          "Because I need to relax my eyes and have just a black screen even when I play music on my pc or want to switch quickly between all black and something else. The most valuable is the quality of it, of the color and the rest and, of course, for it to be easy to switch in and out of fullscreen mode.",
        "Black Screen for Focus and Minimalism":
          "Embrace minimalism and reduce distractions with our black screen tool. Ideal for focus-driven tasks or for individuals practicing digital minimalism.",
        "Black Screen for Power-Saving":
          "Take advantage of our black screen tool as a power-saving solution for OLED and AMOLED displays. Displaying black pixels can contribute to battery conservation.",
        "Black Screen for Digital Artwork":
          "Artists can use our full-screen black display as a canvas for creating striking contrast in digital artwork. Black backgrounds can enhance the depth and intensity of colors.",
      },
      subTips: {
        "Black screen for cleaning": [
          "black screen for monitor cleaning",
          "black screen to find dead pixels",
          "black screen to find dirty spots",
        ],
        "Black color online": [
          "blank computer screen",
          "total black screen",
          "full black screen",
        ],
        Others: [
          "black screen for projector",
          "black screen for kids",
          "black fullscreen background",
        ],
      },
    },
  },
  {
    name: "Red Screen",
    path: "/red-screen",
    color: "#FF0000",
    isAxis: false,
    title: "Red screen",
    type: "color",
    tip: {
      title: "red screen",
      content: {
        "Red Screen for Film and Photography":
          "Utilize our red screen to experiment with color filters and effects in film and photography. The vibrant red background can add a dramatic touch to your compositions.",
        "Red Display for Eye Health":
          "Our red screen tool can be used to decrease the impact of blue light, aiding in eye comfort and health, particularly in low light conditions or before sleep.",
        "Red Screen for Virtual Events":
          "Create a captivating virtual event environment with our full-screen red display. It can set a distinctive tone and mood for your gatherings.",
        "Red Screen for Graphic Design":
          "Graphic designers can leverage our red screen tool to create bold and impactful designs. The color red can evoke strong emotions and grab viewer's attention.",
        "Red Screen for Thematic Presentations":
          "Educators and presenters can use our red screen to create thematic presentations, highlighting important points and capturing the audience's interest.",
        "bright red screen to make tiktoks":
          "Because I have blue LED lights on and it matches perfectly making my face or a part of my face red and leaving the blue lights behind me. I liked the red screen tbh, it's cool to make tiktoks or like photos and edit them to make them look professional.",
        "red light screen for online calls":
          "For colorcast correction when using Google Meets.",
        "red screen to preserve night vision":
          "Not hard on the eyes, especially when coming out of a dark area",
        "red screen to read book": "To read a book with less blue light.",
        "red screen to fix projector": "it helps fix a projectors keystone",
        "red light to prank": "To prank my friends and say I have L.E.D's.",
      },
      subTips: {
        "Red color online": [
          "red screen for tiktoks",
          "red screen for online calls",
          "red screen for photos",
        ],
        "Red light online": [
          "red color light",
          "red light for selfie",
          "red led lights online",
        ],
        Others: [
          "red screen for projector",
          "red blank screen for kids",
          "full red screen background",
        ],
      },
    },
  },
  {
    name: "Green Screen",
    path: "/green-screen",
    color: "#00FF00",
    isAxis: false,
    title: "Green screen",
    type: "color",
    tip: {
      title: "green screen",
      content: {
        "Green Screen for Video Content Creation":
          "Leverage our full-screen green display to create professional-quality videos. The green screen is perfect for video effects and post-production editing.",
        "Soothing Visual Experience with Green Display":
          "Use our green screen tool to create a calming visual environment. The soothing hues of green can help reduce eye strain and promote relaxation.",
        "Green Screen for Immersive Gaming Experience":
          "Enhance your gaming experience with our full-screen green display. It can serve as a dynamic background for a more immersive gaming environment.",
        "Green Screen for Virtual Meetings":
          "Utilize our green screen tool to add professional backgrounds during your virtual meetings. It can significantly improve the quality of your video calls.",
        "Green Screen as Teaching Aid":
          "Educators can use our green screen tool to make online teaching more interactive and engaging. It's a great way to illustrate complex concepts visually.",
        "green screen to photoshop":
          "Photoshop myself in my room so when i take it down and im still in my room people are like oh wow for a few seconds which makes me happy because am in a way the wow factor of those few seconds of their lives.",
        "green screen to relax":
          "In a class room situation, while pausing computer work and listening to others. Green, because it is the most relaxing of the colours. It is just a silent, motionless green colour, the colour of trees and grass. Thanks to it, the screen emits some green, relaxing light during computer work pauses.",
        "green screen for online calls":
          "For adding a green glow during meeting.",
      },
      subTips: {
        "Green screen for cleaning": [
          "green screen for monitor cleaning",
          "green screen to find dead pixels",
          "green screen to find dirty spots",
        ],
        "Green light online": [
          "green light for video calls",
          "green screen lighting",
          "green color light",
          "green light for selfie",
          "green led lights online",
        ],
        Other: [
          "green screen for projector",
          "green screen for kids",
          "green fullscreen background",
        ],
      },
    },
  },
  {
    name: "Blue Screen",
    path: "/blue-screen",
    color: "#0000FF",
    isAxis: false,
    title: "Blue screen",
    type: "color",
    tip: {
      title: "blue screen",
      content: {
        "Relaxation with Blue Screen Display":
          "Discover the soothing power of our full-screen blue display. Its calming blue tones can help reduce stress and promote relaxation after a long day.",
        "Aid for Sleep with Blue Screen Tool":
          "Our blue screen tool can be used as a sleep aid. The soft, calming blue light is known to encourage sleepiness and improve your sleep quality.",
        "Blue Light Filter for Digital Eye Strain":
          "Use our full-screen blue display as a blue light filter to alleviate digital eye strain. Ideal for long hours of screen time, it can help maintain your eye health.",
        "Blue Screen as Visual Aid in Presentations":
          "Use our blue screen tool as a visual aid in presentations. The blue background can help emphasize text and images, enhancing communication and comprehension.",
        "blue screen to make videos":
          "Because my YouTube videos are better with a blue screen & because green screens are overrated",
        "blue screen to copy image": "To copy an image my classmate drew",
        "blue screen to make a vibe": "I like the vibe it gives",
      },
      subTips: {
        "Blue Screen for Cleaning": [
          "Blue screen for monitor cleaning",
          "Blue screen to find dead pixels",
          "Blue screen to find dirty spots",
        ],
        "Blue Light Online": [
          "Blue light for video calls",
          "Blue color light",
          "Blue light for selfie",
          "Blue led lights online",
        ],
        Others: [
          "Blue screen for projector",
          "Blue screen for kids",
          "Blue fullscreen background",
        ],
      },
    },
  },
  {
    name: "Yellow Screen",
    path: "/yellow-screen",
    color: "#FFFF00",
    isAxis: true,
    title: "Yellow screen",
    type: "color",
    tip: {
      title: "yellow screen",
      content: {
        "Versatile Yellow Background for Content":
          "Immerse your audience in a warm and inviting environment with a full-screen yellow display. Ideal for injecting energy and positivity into your online content, virtual classes, or live streams.",
        "Yellow Screen for Eye Comfort":
          "Improve visual comfort with a yellow tinted screen. Use our tool to reduce eye strain from blue light, especially during night-time browsing or long working hours.",
        "Creative Mood Board Starter":
          "Kick-start your creative projects with a yellow mood board. Our full-screen yellow display can help inspire creative thinking and design concepts.",
        "Device Screen Testing":
          "Test the color accuracy of your display device with a full-screen yellow output. It's a handy tool for fine-tuning the color settings of monitors, tablets, or smartphones.",
        "Interactive Teaching Aid":
          "Use a full-screen yellow display as a teaching aid in virtual classrooms. It can serve as an engaging background to present learning materials, highlight information, and draw student attention.",
        "yellow screen to make a vibe": "I like the vibe it gives",
        "yellow screen to copy image": "To copy an image my classmate drew",
        "yellow screen to make videos":
          "Because my YouTube videos are better with a yellow screen & because green screens are overrated",
        "yellow screen for online calls":
          "For adding a yellow glow during meeting.",
      },
      subTips: {
        "Yellow screen for cleaning": [
          "yellow screen for monitor cleaning",
          "yellow screen to find dead pixels",
          "yellow screen to find dirty spots",
        ],
        "Yellow color online": [
          "blank computer screen",
          "total yellow screen",
          "full yellow screen",
        ],
        Others: [
          "yellow screen for projector",
          "yellow screen for kids",
          "yellow fullscreen background",
        ],
      },
    },
  },
  {
    name: "Orange Screen",
    path: "/orange-screen",
    color: "#FFA500",
    isAxis: true,
    title: "Orange screen",
    type: "color",
    tip: {
      title: "orange screen",
      content: {
        "Full-Screen Orange for Virtual Backgrounds":
          "Use our tool to generate a lively orange screen, perfect for virtual backgrounds during online meetings, webinars, or virtual social gatherings. A splash of color to liven up your digital interactions.",
        "Orange Screen for Calming Sleep Aid":
          "Benefit from the calming and soothing effects of an orange display. Reduce the harsh blue light and create a sleep-friendly environment for browsing or reading before bedtime.",
        "Creative Project Inspiration with Orange":
          "Spark creativity with a vibrant full-screen orange display. Ideal for inspiring design projects, arts and crafts, or kick-starting your creative process.",
        "Device Display Calibration with Orange Screen":
          "Verify the color rendering of your digital displays with an orange full-screen output. It's an essential tool for those seeking to fine-tune their device color settings for graphic design or photo editing.",
        "Interactive Orange Learning Tool":
          "Utilize a full-screen orange display as a dynamic visual aid for teaching. The bold color can highlight key information, making e-learning more engaging and impactful.",
        "Orange Screen to Make a Vibe": "I like the vibe orange gives",
        "Orange Screen to Copy Image": "To copy an image my classmate drew",
        "Orange Screen to Make Videos":
          "Because my YouTube videos are better with a orange screen",
        "Orange Screen for Online Calls":
          "For adding a orange glow during meeting.",
      },
      subTips: {
        "Orange screen for cleaning": [
          "orange screen for monitor cleaning",
          "orange screen to find dead pixels",
          "orange screen to find dirty spots",
        ],
        "Orange color online": [
          "blank computer screen",
          "total orange screen",
          "full orange screen",
        ],
        Others: [
          "orange screen for projector",
          "orange screen for kids",
          "orange fullscreen background",
        ],
      },
    },
  },
  {
    name: "Pink Screen",
    path: "/pink-screen",
    color: "#FFC0CB",
    isAxis: true,
    title: "Pink screen",
    type: "color",
    tip: {
      title: "pink screen",
      content: {
        "Pink Background for Content Creation":
          "Effortlessly achieve a pink backdrop for your online content creation. This tool offers a full-screen pink display that is perfect for adding a vibrant pop of color to your videos, livestreams, and virtual presentations.",
        "Easy Pink Light Therapy":
          "Transform your screen into a therapeutic pink light source. Benefit from the soothing effects of pink light therapy right from your device's screen. Ideal for relaxation, mood enhancement, and stress reduction.",
        "Visual Design Inspiration":
          "Inspire your design creativity with a full-screen pink canvas. Our tool allows designers to immerse themselves in the color pink, stimulating creative ideas for design projects.",
        "Color Calibration Testing":
          "Evaluate your screen's color accuracy with our tool's pink display. Perfect for checking the fidelity of the pink hue on different devices and screen settings.",
        "Attention-Grabbing Display":
          "Grab attention with a full-screen pink display during online presentations, webinars, or virtual meetings. Use our tool to emphasize key moments and engage your audience in a unique way.",
        "Pink Screen to Make a Vibe": "I like the vibe pink gives",
        "Pink Screen to Copy Image": "To copy an image my classmate drew",
        "Pink Screen to Make Videos":
          "Because my YouTube videos are better with a pink screen",
        "Pink Screen for Online Calls":
          "For adding a pink glow during meeting.",
      },
      subTips: {
        "Pink screen for cleaning": [
          "pink screen for monitor cleaning",
          "pink screen to find dead pixels",
          "pink screen to find dirty spots",
        ],
        "Pink color online": [
          "blank computer screen",
          "total pink screen",
          "full pink screen",
        ],
        Others: [
          "pink screen for projector",
          "pink screen for kids",
          "pink fullscreen background",
        ],
      },
    },
  },
  {
    name: "Purple Screen",
    path: "/purple-screen",
    color: "#800080",
    isAxis: true,
    title: "Purple screen",
    type: "color",
    tip: {
      title: "purple screen",
      content: {
        "Full-Screen Purple for Wellness Apps":
          "Integrate our tool into your wellness app to generate a soothing purple screen, perfect for meditation and mindfulness exercises. The serene color aids relaxation and mental wellbeing.",
        "Purple Screen for Lighting Effect":
          "Create a dynamic lighting effect with a full-screen purple display. Perfect for setting a unique ambience for your video calls, virtual events, or music sessions.",
        "Color Theory Study with Purple Screen":
          "Utilize a vibrant full-screen purple display as a learning tool for color theory. It helps art students and designers understand the impact and significance of color in their work.",
        "Display Testing with Purple Full Screen":
          "Check the color accuracy of your monitors or screens with our tool that generates a full-screen purple display. Essential for designers, photographers, and videographers.",
        "Interactive Purple Display for Children's Learning":
          "Engage children in interactive e-learning with a full-screen purple display. The bold color stimulates imagination and focus, enhancing the learning experience.",
        "purple screen to make a vibe": "I like the vibe purple gives",
        "purple screen to copy image": "To copy an image my classmate drew",
        "purple screen to make videos":
          "Because my YouTube videos are better with a purple screen",
        "purple screen for online calls":
          "For adding a purple glow during meeting.",
      },
      subTips: {
        "Purple screen for cleaning": [
          "purple screen for monitor cleaning",
          "purple screen to find dead pixels",
          "purple screen to find dirty spots",
        ],
        "Purple color online": [
          "blank computer screen",
          "total purple screen",
          "full purple screen",
        ],
        Others: [
          "purple screen for projector",
          "purple screen for kids",
          "purple fullscreen background",
        ],
      },
    },
  },
  {
    name: "Zoom Lighting",
    path: "/zoom-lighting",
    color: "#FFC5C2",
    isAxis: true,
    title: "Lighting for zoom calls",
    type: "color",
    tip: {
      title: "Lighting for zoom calls",
      content: {
        "Customized Lighting for Video Conferencing":
          "Use our zoom lighting screen tool to create the perfect lighting setup for your video calls. With adjustable color and temperature, you can achieve professional-level video conference lighting effortlessly.",
        "Photography Backdrop with Zoom Lighting Screen":
          "Enhance your photography setup with our adjustable zoom lighting screen. Adjust the color and temperature to suit the mood of your photoshoot and create stunning images.",
        "Improve eLearning Experience with Optimal Lighting":
          "With our zoom lighting screen, create a conducive learning environment for eLearning. Customizable light settings ensure optimal reading comfort and improved concentration.",
        "Web Developers Lighting Test Tool":
          "Web developers can use our full-screen zoom lighting screen to test how different light temperatures and colors affect the appearance of their designs, helping to create visually engaging and accessible websites.",
        "Color Therapy with Zoom Lighting Screen":
          "Therapists and wellness coaches can utilize our zoom lighting screen with adjustable color and temperature for color therapy sessions, promoting relaxation and healing.",
        "white screen as a lighting for zoom calls":
          "For video calls! I don't have a easy ring light, but do have two screens. So I can use one of the screens to light my face!",
        "Zoom Lighting to Get Brightness":
          "I use it to get brightness while i´m in a video call",
        "Zoom Lighting to Light Up":
          "To light up when I use videoconference calls",
        "Zoom Lighting to Turns My Monitor Into a Light":
          "Turns my monitor into a light to offset being backlit on video calls",
      },
    },
  },
  // Prank Screens
  {
    name: "White noise",
    path: "/white-noise",
    icon: "https://emojicdn.elk.sh/🔊",
    title: "White noise for sleep",
    type: "prank",
    components: {
      mid: <WhiteNoiseScreen />,
      right: <WhiteNoisePlayButton />,
    },
    thumbnail: WhiteNoiseIcon,
    tip: {
      title: "White noise for sleep",
      content: {
        "How to Use White Noise to Enhance Your Concentration":
          "Discover how white noise generators become indispensable tools for individuals aiming to amplify their focus and productivity. By drowning out distracting noises, white noise establishes a consistent auditory backdrop, enabling users to dive deep into work, studies, or reading. This guide explores the significant concentration boost provided by white noise video and audio, making it a top choice for productivity enthusiasts.",
        "Using White Noise for Better Sleep: A Comprehensive Guide":
          "Explore the transformative power of white noise in facilitating restful sleep amidst a world full of disturbances. This comprehensive guide delves into how white noise videos and audio tracks mask disruptive environmental sounds, providing a tranquil soundscape conducive to falling asleep swiftly and enjoying uninterrupted rest. Ideal for anyone struggling with sleep, discover the secret to a peaceful night's rest.",
        "White Noise for Soothing Babies: Tips and Tricks":
          "Uncover the magic of white noise in calming crying infants and promoting better sleep. Mimicking the comforting sounds of the womb, white noise offers a familiar and soothing auditory experience for babies. This article provides parents with practical tips and tricks on using white noise videos and audio to ease their infants into relaxation and sleep, making it an essential tool for new parents.",
        "Elevate Your Meditation with White Noise: Techniques for Mindfulness":
          "Enhance your meditation and mindfulness practices by integrating white noise into your routine. Learn techniques to use white noise videos and audio as a backdrop for meditation, aiding in achieving deeper focus and relaxation. This guide helps practitioners find inner peace and clarity, making meditation sessions more effective and transformative.",
        "How to Create Spooky Pranks with White Noise This Halloween":
          "Get creative this Halloween by using white noise videos and audio to craft eerie atmospheres perfect for pranks. Whether setting up a haunted house or planning a spooky surprise for friends and family, discover how the ambiguous sounds of white noise can add suspense and excitement to your Halloween pranks. This tutorial guides you through creating memorable scares that are sure to delight and terrify.",
        "Fun Office Pranks with White Noise: A How-To Guide":
          "Lighten up the workplace with some good-natured fun by employing white noise for office pranks. This how-to guide walks you through executing harmless pranks that puzzle and amuse your co-workers. Learn to use white noise discreetly to spark curiosity and laughter, enhancing camaraderie and breaking the daily routine with a touch of humor and mystery.",
      },
      subTips: {
        "Enhancing Productivity and Focus": [
          "Improve concentration in noisy environments",
          "Boost productivity at work",
          "Enhance focus during study sessions",
          "Minimize distractions while working from home",
          "Facilitate deep work periods",
        ],
        "Sleep and Relaxation": [
          "Promote faster sleep onset",
          "Mask disruptive nighttime noises",
          "Improve sleep quality for insomniacs",
          "Soothe babies and young children",
          "Create a calming bedtime routine",
        ],
        "Health and Well-being": [
          "Reduce stress and anxiety levels",
          "Aid in meditation and mindfulness practices",
          "Help manage tinnitus symptoms",
          "Encourage relaxation during yoga",
          "Support mental health by reducing sensory overload",
        ],
      },
    },
  },
  {
    name: "Fake Broken screen",
    path: "/broken-screen",
    icon: "https://emojicdn.elk.sh/💔",
    title: "Fake Broken screen - Prank",
    type: "prank",
    components: {
      mid: <BrokenScreen />,
    },
    thumbnail: BrokenScreenIcon,
    tip: {
      title: "Fake Broken screen - Prank",
      content: {
        "Scare Your Friends with a Realistic Broken Screen Prank":
          "Pull off the ultimate prank by making friends believe their device screen has shattered.",
        "Create Engaging Content with a Cracked Screen Effect":
          "Enhance your videos or presentations by adding a dramatic cracked screen overlay.",
        "Test Your Own Reaction to a Broken Display":
          "See how you'd react to unexpected digital mishaps by simulating a broken screen.",
        "Use a Broken Screen Image for Creative Projects":
          "Incorporate high-quality broken screen visuals into your digital art or creative designs.",
        "Educate on the Durability of Screen Protectors":
          "Demonstrate the importance of screen protection by showcasing potential damage.",
        "Spice Up Your Tech Reviews with a Broken Screen Fake":
          "Add a twist to device reviews by simulating screen damage and discussing durability.",
        "Incorporate a Cracked Screen Online into Your Halloween Decor":
          "Turn devices into spooky decorations with a full-screen broken display animation.",
      },
      subTips: {
        "Pranks and Jokes": [
          "Epic tech prank",
          "Scare friends and family",
          "Office prank idea",
          "April Fool's gag",
          "Startle someone for fun",
        ],
        "Content and Creativity": [
          "Unique digital art backdrop",
          "Engaging social media content",
          "Creative project visuals",
          "Dramatic effect in videos",
          "Illustrate tech horror stories",
        ],
        "Education and Awareness": [
          "Demonstrate screen fragility",
          "Promote protective accessories",
          "Tech safety presentations",
          "Visual aid for device care talks",
          "Highlight importance of warranties",
        ],
      },
    },
  },
  {
    name: "Fake Blue Screen of Death",
    path: "/blue-screen-of-death-windows",
    icon: "https://emojicdn.elk.sh/💻",
    title: "Windows Fake Blue Screen of Death",
    type: "prank",
    components: {
      mid: <FakeBlueScreen />,
    },
    thumbnail: DeathXPIcon,
    tip: {
      title: "Windows Fake Blue Screen of Death",
      content: {
        "Prank Your Friends with a Fake Blue Screen of Death":
          "Elevate your pranking game by tricking friends into thinking their PC crashed. Perfect for a harmless laugh.",
        "Create Memorable Tech-Themed Parties":
          "Add a quirky twist to tech-themed parties by showcasing the iconic Windows blue screen of death on screens.",
        "Educate on Windows Blue Screen of Death":
          "Use the simulation as an educational tool to teach about troubleshooting and preventing the real BSOD.",
        "Enhance Your Tech Support Skills":
          "Practice your reaction and diagnostic skills by using the fake BSOD as a training tool.",
        "Spice Up Your Tech YouTube Channel":
          "Create engaging content by incorporating the blue screen of death prank in your tech videos.",
        "Test patience":
          "Challenge your patience or that of a friend by confronting the dreaded blue screen scenario in a controlled manner.",
        "Film Productions and Tech Scenes":
          "Incorporate a realistic Windows BSOD animation into your film or video production for authentic tech drama.",
      },
      subTips: {
        "Pranks and Entertainment": [
          "Harmless computer prank",
          "April Fool's tech joke",
          "Tech-themed party gag",
          "Scare friends for fun",
          "Create viral prank content",
        ],
        "Educational Purposes": [
          "Teach BSOD troubleshooting",
          "Simulate system failures",
          "Train IT support staff",
          "Demonstrate system recovery",
          "Educate on error messages",
        ],
        "Content Creation": [
          "Enhance tech videos",
          "Create engaging tutorials",
          "Film realistic tech scenes",
          "Add drama to tech reviews",
          "Illustrate system stability discussions",
        ],
      },
    },
  },
  {
    name: "Fake Blue Screen of Death 10",
    path: "/blue-screen-of-death-windows-10",
    icon: "https://emojicdn.elk.sh/💻",
    title: "Windows 10 Fake Blue Screen of Death",
    type: "prank",
    components: {
      mid: <FakeBlueScreen10 />,
      right: <FakeBlueScreen10_Sidebar />,
    },
    thumbnail: Death10Icon,
    tip: {
      title: "Windows 10 Fake Blue Screen of Death",
      content: {
        "Office Prank: Windows BSOD Fullscreen During Lunch Break":
          "Quick office prank - open this fake blue screen while coworkers are at lunch. Set it for 20 minutes and let them think their Windows PC crashed. Simple but effective prank screen!",
        "Online BSOD Simulator: Escape Boring Video Calls":
          "Need a break from endless meetings? Set this fake Windows death screen to appear after 10 minutes. Perfect excuse to 'fix your PC' and grab a coffee!",
        "Windows Blue Screen Training: IT Support Practice Tool":
          "Train new IT staff with this online BSOD simulator. Create realistic Windows crash scenarios with custom progress percentages. Perfect for hands-on practice without breaking real PCs.",
        "Gaming Prank: Fullscreen Windows Death Screen Mid-Game":
          "Ultimate gaming prank - set up this fake BSOD to appear when your friend is winning. Watch them panic when their screen goes blue mid-match!",
        "Viral Prank Videos: Windows BSOD Reaction Recordings":
          "Create funny content by recording reactions to this fake blue screen of death. Set it to pop up during normal PC use and capture the moment they think their Windows crashed!",
        "IT Team Testing: Online BSOD Emergency Response":
          "Test your IT team's response time with this Windows BSOD simulator. Perfect for creating realistic crash scenarios and measuring emergency response effectiveness.",
        "Windows Death Screen Tutorial: Learn About BSOD":
          "Help new users understand blue screens. Use this online simulator to show what a Windows BSOD looks like without risking real crashes. Great for building confidence with computers!",
      },
      subTips: {
        "Fun Pranks": [
          "quick office pranks with fake BSOD",
          "gaming stream blue screen trolling",
          "family computer crash pranks",
          "Windows death screen reaction videos",
          "fullscreen BSOD party jokes",
        ],
        "Educational Uses": [
          "IT support BSOD training tool",
          "Windows crash screen demos",
          "computer literacy teaching aid",
          "technical workshop examples",
          "blue screen response practice",
        ],
        "Content Creation": [
          "YouTube BSOD prank videos",
          "Windows crash meme content",
          "social media reaction clips",
          "streaming fake blue screens",
          "tech tutorial demonstrations",
        ],
      },
    },
  },
  {
    name: "Hacker Typer Screen",
    path: "/hacker-screen",
    icon: "https://emojicdn.elk.sh/��‍💻",
    title: "Hacker Typer Screen - Prank",
    type: "prank",
    components: {
      mid: <HackerTyper />,
      right: <HackerSpeedInput />,
    },
    thumbnail: HackerTyperIcon,
    tip: {
      title: "Hacker Typer Screen - Prank",
      content: {
        "Prank Your Co-Workers with the Hacker Typer Screen":
          "Elevate office pranks to the next level with our hacker typer tool. Imagine the look on your colleagues' faces when they think you've turned into a real hacker, typing away with codes flowing in fullscreen. This prank is perfect for adding some fun and intrigue to your workplace.",
        "Engage Students in Computer Classes":
          "Teachers can use our hacker screen tool to captivate and educate their students by simulating what coding work looks like in a real-world scenario. It's an engaging way to introduce students to the basics of programming in a fun, visually stimulating fullscreen environment.",
        "Enhance Your Live Streaming Aesthetics":
          "Streamers can utilize the hacker typer tool to enhance the visual appeal of their streams. Set the backdrop to a fullscreen flow of coding script, perfect for creating a thematic hacker vibe during gaming sessions or tech-related streams.",
        "Create Engaging Content for Tech Vlogs":
          "Vloggers focusing on technology can use the hacker typer screen to create compelling content. Whether discussing cybersecurity or the latest in software development, having a dynamic fullscreen coding backdrop will captivate your audience and enhance your message.",
        "Add Flair to Tech Presentations":
          "Incorporate the hacker typer in your tech presentations to keep your audience engaged. This tool can simulate a live hacking scenario, making your explanations more vivid and entertaining. It's an excellent way to break the ice and add a fullscreen visual element that keeps everyone hooked.",
        "Film Production for Cybersecurity Scenes":
          "Filmmakers can use the hacker screen tool to add authenticity to scenes involving cybersecurity and hacking. The fullscreen display of coding provides a realistic and intense backdrop, perfect for scenes depicting high-stakes coding or hacking challenges.",
        "Boost Audience Engagement at Tech Events":
          "Event organizers can use the hacker typer to engage attendees at tech conferences or workshops. Set up screens showing live, fullscreen simulations of hacking or coding, adding a unique interactive element to your event that is both educational and visually fascinating.",
      },
      subTips: {
        "Entertainment & Pranks": [
          "Impress friends with fake hacking skills",
          "Play pranks on family members",
          "Add fun to office parties",
          "Create amusing social media content",
          "Fool friends into thinking you're a coder",
        ],
        "Educational Purposes": [
          "Demonstrate coding in classrooms",
          "Visualize programming concepts",
          "Engage students in technology",
          "Spice up tech presentations",
          "Introduce coding to beginners",
        ],
        "Creative & Professional Use": [
          "Enhance live streaming visuals",
          "Create authentic tech scenes in films",
          "Add hacker aesthetics to videos",
          "Generate interest at tech conferences",
          "Inspire cybersecurity discussions",
        ],
      },
    },
  },

  // Fake Update Screens
  {
    name: "Fake Update Windows 10",
    path: "/fake-windows-10-update-screen",
    icon: "https://emojicdn.elk.sh/🪟",
    title: "Windows 10 Fake Update",
    type: "fake-update",
    components: {
      mid: <FakeUpdateWin10 />,
    },
    thumbnail: Windows10UpdateScreen,
    tip: {
      title: "Windows 10 Fake Update",
      content: {
        "Pranked my friend with an authentic-looking Windows 10 update screen!":
          "Used the Windows 10 fake update page to trick my friend into thinking their computer was actually updating. The realistic progress bar and messages worked like a charm!",
        "Foolproof prank with the Windows 10 fake update screen!":
          "Pulled off a successful prank by displaying the fake Windows 10 update screen on my colleague's computer. The genuine-looking messages and progress made it seem like the real deal!",
        "Impressed my friends with a realistic Windows 10 update simulation!":
          "Shared a screenshot of the Windows 10 fake update screen I created using the simulation page. The authentic visuals and status messages made it look like a genuine update in progress!",
        "The Windows 10 update prank was a hit at the party!":
          "Used the Windows 10 fake update page to prank my friends during a gathering. The realistic update screen, complete with messages and progress, had everyone in stitches!",
        "Had a good laugh with the Windows 10 fake update screen!":
          "Visited the Windows 10 update prank tool and customized the messages to create a funny scenario. The realistic appearance and progress bar made it a hilarious experience for all involved.",
      },
      subTips: {
        "Simulated Windows 10 Update": [
          "Windows 10 fake update",
          "Windows 10 update simulation",
          "Simulate Windows 10 update",
          "Fake Windows 10 update screen",
          "Emulate Windows 10 update",
          "Windows 10 update prank",
          "Windows 10 update process",
        ],
        "Realistic Experience": [
          "Authentic-looking Windows 10 update",
          "Realistic Windows 10 update screen",
          "Fool friends with Windows 10 update",
          "Realistic Windows 10 update progress",
          "Genuine Windows 10 update simulation",
          "Authentic Windows 10 update messages",
          "Windows 10 update stage",
        ],
        "Entertainment and Fun": [
          "Entertaining Windows 10 update prank",
          "Fun fake Windows 10 update",
          "Enjoy simulated Windows 10 update",
          "Prank with Windows 10 fake update",
          "Exciting Windows 10 update experience",
          "Windows 10 update for amusement",
          "Windows 10 update prank tool",
        ],
      },
    },
  },
  {
    name: "Fake Update Windows XP",
    path: "/fake-windows-xp-update-screen",
    icon: "https://emojicdn.elk.sh/🪟",
    title: "Windows XP Fake Update",
    type: "fake-update",
    components: {
      mid: <FakeUpdateWinXP />,
    },
    thumbnail: WindowsXPUpdateScreen,
    tip: {
      title: "Windows XP Fake Update",
      content: {
        "Office Pranks with Windows XP Update Screen":
          "Ideal for office humor, the dynamic Windows XP update screen serves as a fun tool for pranking colleagues, simulating a classic, endless software update process that adds a light-hearted twist to the work environment.",
        "Humorous Windows XP Update Tests":
          "The Windows XP update prank is perfect for testing the patience of friends and family. This amusing fake update screen replicates the Windows XP experience, creating a believable and entertaining scenario.",
        "Retro Computing with Windows XP":
          "Nostalgia enthusiasts and tech lovers use the fake Windows XP update screen to relive the golden era of Windows XP, reminiscing about the older, simpler days of personal computing and software updates.",
        "Creating Viral Content with Windows XP Simulation":
          "Content creators and social media influencers find the Windows XP update screen a unique prop to produce engaging, viral content, often using it in creative skits, reaction videos, or tech-related humor.",
        "Tech Education Using Windows XP Interface":
          "The fake Windows XP update screen serves an educational purpose, too. It's used in tech classes to demonstrate the historical aspects of operating systems, offering students a practical insight into the evolution of user interfaces and software upgrades.",
        "Pranked my friend with an authentic-looking Windows XP update screen!":
          "Used the Windows XP fake update page to trick my friend into thinking their computer was actually updating. The realistic progress bar and messages worked like a charm!",
        "Foolproof prank with the Windows XP fake update screen!":
          "Pulled off a successful prank by displaying the fake Windows XP update screen on my colleague's computer. The genuine-looking messages and progress made it seem like the real deal!",
        "Impressed my friends with a realistic Windows XP update simulation!":
          "Shared a screenshot of the Windows XP fake update screen I created using the simulation page. The authentic visuals and status messages made it look like a genuine update in progress!",
        "The Windows XP update prank was a hit at the party!":
          "Used the Windows XP fake update page to prank my friends during a gathering. The realistic update screen, complete with messages and progress, had everyone in stitches!",
        "Had a good laugh with the Windows XP fake update screen!":
          "Visited the Windows XP update prank tool and customized the messages to create a funny scenario. The realistic appearance and progress bar made it a hilarious experience for all involved.",
      },
      subTips: {
        "Simulated Windows XP Update": [
          "Windows XP fake update",
          "Windows XP update simulation",
          "Simulate Windows XP update",
          "Fake Windows XP update screen",
          "Emulate Windows XP update",
          "Windows XP update prank",
          "Windows XP update process",
        ],
        "Realistic Experience": [
          "Authentic-looking Windows XP update",
          "Realistic Windows XP update screen",
          "Fool friends with Windows XP update",
          "Realistic Windows XP update progress",
          "Genuine Windows XP update simulation",
          "Authentic Windows XP update messages",
          "Windows XP update stage",
        ],
        "Entertainment and Fun": [
          "Entertaining Windows XP update prank",
          "Fun fake Windows XP update",
          "Enjoy simulated Windows XP update",
          "Prank with Windows XP fake update",
          "Exciting Windows XP update experience",
          "Windows XP update for amusement",
          "Windows XP update prank tool",
        ],
      },
    },
  },
  {
    name: "Fake Update Mac OS X",
    path: "/fake-mac-os-x-update-screen",
    icon: "https://emojicdn.elk.sh/🍎",
    title: "Mac OS X Fake Update",
    type: "fake-update",
    components: {
      mid: <FakeOSUpdate />,
    },
    thumbnail: MacOSXUpdateScreen,
    tip: {
      title: "Mac OS X Fake Update",
      content: {
        "Prank your friends":
          "Use our Mac OS X fake update tool to play a harmless prank on your friends, making them believe their computer is going through a significant update. Watch their reactions and have a laugh!",
        "Test patience":
          "Find out how your colleagues or loved ones react to unexpected updates. It's a funny way to check their patience without causing any real inconvenience.",
        "Tech teaching aid":
          "Use the fake update tool as a teaching aid for tech courses or workshops. It can be used to explain system updates and how to manage them.",
        "UI/UX testing":
          "For UI/UX designers, our tool can provide an interesting case study on the user experience during system updates. Analyze user interaction and engagement during this process.",
        "Content creation":
          "Content creators can use this tool for creating interesting tech-related content or social experiments for their blogs, vlogs, or social media platforms.",
      },
      subTips: {
        "Simulated Mac OS X Update": [
          "Mac OS X fake update",
          "Mac OS X update simulation",
          "Simulate Mac OS X update",
          "Fake Mac OS X update screen",
          "Emulate Mac OS X update",
          "Mac OS X update prank",
          "Mac OS X update process",
        ],
        "Realistic Experience": [
          "Authentic-looking Mac OS X update",
          "Realistic Mac OS X update screen",
          "Fool friends with Mac OS X update",
          "Realistic Mac OS X update progress",
          "Genuine Mac OS X update simulation",
          "Authentic Mac OS X update messages",
          "Mac OS X update stage",
        ],
        "Entertainment and Fun": [
          "Entertaining Mac OS X update prank",
          "Fun fake Mac OS X update",
          "Enjoy simulated Mac OS X update",
          "Prank with Mac OS X fake update",
          "Exciting Mac OS X update experience",
          "Mac OS X update for amusement",
          "Mac OS X update prank tool",
        ],
      },
    },
  },
  {
    name: "Fake Update Ubuntu 22.04",
    path: "/fake-ubuntu-22-04-update-screen",
    icon: "https://emojicdn.elk.sh/🐧",
    title: "Ubuntu 22.04 Fake Update",
    type: "fake-update",
    components: {
      mid: <FakeUbuntu />,
    },
    thumbnail: Ubuntu2204UpdateScreen,
    tip: {
      title: "Ubuntu 22.04 Fake Update",
      content: {
        "Ubuntu Fake Screen for Pranks":
          "The dynamic fake Ubuntu update screen is a favorite for tech pranks, perfect for tricking colleagues into believing their system is perpetually updating, creating light-hearted moments in the office.",
        "Simulating Updates with Ubuntu Fake Screen":
          "Developers and IT professionals use the fake Ubuntu 22.04 update screen to simulate system updates and test user patience or response to interface changes without affecting system operations.",
        "Ubuntu Update Screen for Training":
          "Trainers utilize the fake Ubuntu 22.04 screen to educate IT students on the process of system updates, familiarizing them with the visual cues of an actual Ubuntu upgrade.",
        "Content Creation with Ubuntu Fake Update":
          "Content creators incorporate the dynamic Ubuntu fake update screen into their videos and streams to add a layer of authenticity when discussing tech topics or creating tutorials on system upgrades.",
        "Staging Systems with Fake Ubuntu 22.04 Screen":
          "Tech staging environments use the Ubuntu 22.04 fake update screen to represent the update process in scenarios like trade shows or software demonstrations, without committing to an actual update.",
      },
      subTips: {
        "Simulated Ubuntu 22.04 Update": [
          "Ubuntu 22.04 fake update",
          "Ubuntu 22.04 update simulation",
          "Simulate Ubuntu 22.04 update",
          "Fake Ubuntu 22.04 update screen",
          "Emulate Ubuntu 22.04 update",
          "Ubuntu 22.04 update prank",
          "Ubuntu 22.04 update process",
        ],
        "Realistic Experience": [
          "Authentic-looking Ubuntu 22.04 update",
          "Realistic Ubuntu 22.04 update screen",
          "Fool friends with Ubuntu 22.04 update",
          "Realistic Ubuntu 22.04 update progress",
          "Genuine Ubuntu 22.04 update simulation",
          "Authentic Ubuntu 22.04 update messages",
          "Ubuntu 22.04 update stage",
        ],
        "Entertainment and Fun": [
          "Entertaining Ubuntu 22.04 update prank",
          "Fun fake Ubuntu 22.04 update",
          "Enjoy simulated Ubuntu 22.04 update",
          "Prank with Ubuntu 22.04 fake update",
          "Exciting Ubuntu 22.04 update experience",
          "Ubuntu 22.04 update for amusement",
          "Ubuntu 22.04 update prank tool",
        ],
      },
    },
  },
  {
    name: "Fake Update Chrome OS",
    path: "/fake-chrome-os-update-screen",
    icon: "https://emojicdn.elk.sh/🌐",
    title: "ChromeOS Fake Update",
    type: "fake-update",
    components: {
      mid: <FakeChromeOS />,
    },
    thumbnail: ChromeOSUpdateScreen,
    tip: {
      title: "ChromeOS Fake Update",
      content: {
        "Prank your friends with a fake ChromeOS update screen":
          "Open this fullscreen fake update tool when your friend leaves their Chromebook unattended. They'll come back thinking their device is stuck in a system update. Perfect for quick pranks that won't actually harm their device.",
        "Test how people react to system updates during presentations":
          "Use this Chrome OS update screen simulator during talks or demos to see how people handle unexpected interruptions. Great for IT training sessions or teaching users about staying calm when real updates pop up.",
        "Create realistic ChromeOS scenes for videos or screenshots":
          "Making a tutorial or video about Chromebooks? Use this fullscreen fake update screen to capture authentic-looking footage of the Chrome OS update process without waiting for real updates.",
        "Prank your school's computer lab":
          "Looking for a harmless school prank? Open this fake Chrome OS update screen on lab computers during breaks. Watch as students and teachers try to figure out why all the Chromebooks are updating at once.",
        "Practice IT support scenarios with a fake update screen":
          "Train IT support staff by simulating stuck Chrome OS updates. This fullscreen tool helps teams practice handling common Chromebook issues without risking real devices.",
        "Make your ChromeOS presentation more engaging":
          "Giving a talk about software updates or system maintenance? Use this fake update screen to show exactly what Chrome OS users see, without boring your audience with static screenshots.",
        "Pull off the ultimate office prank with fake updates":
          "Want to prank your coworkers? Launch this fullscreen Chrome OS update simulator on office Chromebooks. It's a fun way to surprise your team without causing any real disruption to their work.",
      },
      subTips: {
        "Fun & Entertainment": [
          "Prank friends during lunch break",
          "Surprise family members",
          "Create funny reaction videos",
          "School computer lab prank",
          "Office ChromeOS prank",
        ],
        "Education & Training": [
          "IT support training scenarios",
          "Software update workshops",
          "ChromeOS tutorial recordings",
          "System admin presentations",
          "User behavior studies",
        ],
        "Content Creation": [
          "ChromeOS update screenshots",
          "Tech review visuals",
          "Tutorial video backgrounds",
          "Software documentation images",
          "ChromeOS demo materials",
        ],
      },
    },
  },
  {
    name: "Fake Update Windows 11",
    path: "/fake-windows-11-update-screen",
    icon: "https://emojicdn.elk.sh/🪟",
    title: "Windows 11 Fake Update",
    type: "fake-update",
    components: {
      mid: <FakeUpdateWin11 />,
    },
    thumbnail: FakeWin11UpdateIcon,
    tip: {
      title: "Windows 11 Update Screen",
      content: {
        "Had a blast simulating a Windows 11 update process!":
          "Visited the Windows 11 update simulation page and customized the progress to create a convincing fake update. It was so much fun watching my friends' reactions!",
        "Spiced up the office with a Windows 11 update prank!":
          "Used the Windows 11 update prank tool to simulate an update on my coworker's PC. The authentic messages and progress bar had everyone fooled and resulted in some hilarious moments!",
        "Hilarious Windows 11 update prank for a good laugh!":
          "Used the Windows 11 fake update screen to play a prank on my sibling. They were completely fooled by the authentic-looking update process and the progress bar ticking away!",
        "Impressed my tech-savvy friends with the authenticity of the Windows 11 update simulation!":
          "Shared a video recording of the Windows 11 update simulation I created using the website. The genuine-looking progress bar and status messages amazed my friends, who thought it was an actual update!",
        "Shared a video recording of the Windows 11 update simulation I created using the website. The genuine-looking progress bar and status messages amazed my friends, who thought it was an actual update!":
          "Used the Windows 11 fake update screen to trick my coworker into thinking their computer was undergoing a major update. The authentic visuals and progress animation had them panicking for a moment!",
      },
      subTips: {
        "Simulated Windows 11 Update": [
          "Windows 11 fake update",
          "Windows 11 update simulation",
          "Simulate Windows 11 update",
          "Fake Windows 11 update screen",
          "Emulate Windows 11 update",
          "Windows 11 update prank",
          "Windows 11 update process",
        ],
        "Realistic Experience": [
          "Authentic-looking Windows 11 update",
          "Realistic Windows 11 update screen",
          "Fool friends with Windows 11 update",
          "Realistic Windows 11 update progress",
          "Genuine Windows 11 update simulation",
          "Authentic Windows 11 update messages",
          "Windows 11 update stage",
        ],
        "Entertainment and Fun": [
          "Entertaining Windows 11 update prank",
          "Fun fake Windows 11 update",
          "Enjoy simulated Windows 11 update",
          "Prank with Windows 11 fake update",
          "Exciting Windows 11 update experience",
          "Windows 11 update for amusement",
          "Windows 11 update prank tool",
        ],
      },
    },
  },
  {
    name: "Android Fake Update",
    path: "/fake-android-update",
    icon: "https://emojicdn.elk.sh/📱",
    title: "Fake Android Update",
    type: "fake-update",
    components: {
      mid: <FakeAndroidUpdate />,
    },
    thumbnail: FakeAndroidUpdateIcon,
    tip: {
      title: "Android Fake Update Screen",
      content: {
        "Simulate Android Update for Software Testing":
          "Utilize our Android fake update tool to create authentic-looking update screens for software testing and demonstration purposes.",
        "Engage Your Audience with a Realistic Android Update Screen":
          "Capture the attention of tech enthusiasts by showcasing a genuine Android update simulation during presentations or tech blogs.",
        "Elevate Tech Education with Android Update Prank Tool":
          "Incorporate our realistic Android update screen into tech education scenarios to teach about system updates and user interface design.",
        "Create Entertaining Content with Android Fake Update":
          "Produce engaging video content or live streams using an entertaining Android update prank, adding humor to tech discussions.",
        "Prank Friends with a Genuine Android Update Simulation":
          "Surprise your friends by using our tool to prank with an Android fake update, turning ordinary moments into memorable tech pranks.",
        "Enhance User Experience Design Learning with Simulated Updates":
          "Use the exciting Android update experience to educate UX/UI designers on the impact of system updates on user experience.",
        "Demonstrate System Recovery Scenarios with Android Update Prank Tool":
          "Leverage the authentic-looking Android update tool to simulate system recovery processes for IT training and workshops.",
      },
      subTips: {
        "Simulated Android Update": [
          "Android fake update",
          "Android update simulation",
          "Simulate Android update",
          "Fake Android update screen",
          "Emulate Android update",
          "Android update prank",
          "Android update process",
        ],
        "Realistic Experience": [
          "Authentic-looking Android update",
          "Realistic Android update screen",
          "Fool friends with Android update",
          "Realistic Android update progress",
          "Genuine Android update simulation",
          "Authentic Android update messages",
          "Android update stage",
        ],
        "Entertainment and Fun": [
          "Entertaining Android update prank",
          "Fun fake Android update",
          "Enjoy simulated Android update",
          "Prank with Android fake update",
          "Exciting Android update experience",
          "Android update for amusement",
          "Android update prank tool",
        ],
      },
    },
  },

  // Screensaver Screens
  {
    name: "DVD Screensaver",
    path: "/dvd-screensaver",
    icon: "https://emojicdn.elk.sh/📀",
    title: "DVD Screensaver",
    type: "screensaver",
    components: {
      mid: <DVDSaver />,
    },
    thumbnail: DVDIcon,
    tip: {
      title: "DVD Screensaver",
      content: {
        "Relax with the Classic DVD Screensaver":
          "Unwind after a long day by watching the nostalgic DVD logo screensaver move around your full-screen. This DVD screensaver simulator brings back the charm of classic screensavers, creating a calming ambiance on your screen.",
        "Enhance Your Presentation Background":
          "Add a dynamic touch to your presentations by using the DVD screensaver in full-screen mode. Adjust the logo size and movement speed to fit your style, making your presentation background engaging and professional.",
        "Perfect for Waiting Rooms":
          "Keep visitors entertained with the DVD logo screensaver in your waiting room. This online tool allows you to customize the logo size and movement speed, providing a visually appealing experience for your guests.",
        "Create a Fun Party Atmosphere":
          "Use the DVD screensaver simulator during parties to create a fun and nostalgic atmosphere. Set it to full-screen mode and let the moving DVD logo add a unique touch to your event, adjustable to any size and speed.",
        "Focus Booster for Study Sessions":
          "Boost your concentration by using the DVD screensaver while studying. The gentle movement of the DVD logo on full-screen can help maintain focus, with adjustable size and speed to suit your preference.",
        "Entertainment During Downtime":
          "Fill your screen with the DVD logo screensaver during breaks or downtime. This online tool is perfect for creating a soothing background, with easy adjustments for logo size and movement speed.",
        "Showcase Retro Style in Stores":
          "Attract customers to your store with the retro DVD screensaver in full-screen mode. The moving DVD logo, customizable in size and speed, can add a vintage flair to your display screens.",
      },
      subTips: {
        "Relaxation and Ambiance": [
          "Unwind with a nostalgic screensaver",
          "Create a calming environment",
          "Enjoy a retro feel",
          "Set a tranquil background",
          "Perfect for meditation sessions",
        ],
        "Professional and Business Use": [
          "Enhance presentations with motion",
          "Dynamic waiting room display",
          "Engaging office background",
          "Professional screensaver for meetings",
          "Attention-grabbing store displays",
        ],
        "Entertainment and Fun": [
          "Party ambiance creator",
          "Fun study break tool",
          "Interactive screensaver for kids",
          "Visual entertainment during downtime",
          "Customizable party screen",
        ],
      },
    },
  },
  {
    name: "Flip Clock",
    path: "/flip-clock-screensaver",
    icon: "https://emojicdn.elk.sh/⏰",
    title: "Flip Clock Screensaver",
    type: "screensaver",
    components: {
      mid: <FlipClockPreview />,
    },
    thumbnail: FlipClockIcon,
    tip: {
      title: "Flip Clock Screensaver",
      content: {
        "Relax with a Retro Flip Clock":
          "Enjoy a soothing, retro aesthetic with the Flip Clock Screensaver in fullscreen mode. Perfect for unwinding and adding a vintage touch to your workspace, this mac flip clock is customizable with your preferred time.",
        "Create a Stylish Office Environment":
          "Use the Flip Clock Screensaver to bring a stylish and professional look to your office. The fullscreen mode and customizable time make it a great addition to any workplace, helping you keep track of time in a visually appealing way.",
        "Perfect for Presentation Backgrounds":
          "Impress your audience by using the Flip Clock Screensaver as a background during presentations. The fullscreen mode provides a sleek, modern clock display that can be set to any custom time, making your presentations stand out.",
        "Set a Modern Ambiance at Home":
          "Transform your home environment with the Flip Clock Screensaver in fullscreen mode. Ideal for living rooms or home offices, this mac flip clock adds a modern, minimalist touch while displaying a customizable time.",
        "Ideal for Study Sessions":
          "Keep track of your study time with the Flip Clock Screensaver. The fullscreen clock helps maintain focus, and you can customize the time to match your study schedule. Perfect for creating a structured study environment.",
        "Visually Engaging Waiting Room Display":
          "Make your waiting room more engaging with the Flip Clock Screensaver. The fullscreen, customizable clock provides a stylish time display that can help keep visitors informed and entertained while they wait.",
        "Add a Retro Vibe to Events":
          "Use the Flip Clock Screensaver during events to create a retro vibe. The fullscreen mode and customizable time make it a unique and eye-catching feature, perfect for parties, exhibitions, and gatherings.",
      },
      subTips: {
        "Relaxation and Aesthetics": [
          "Vintage aesthetic",
          "Soothing full-screen clock",
          "Retro ambiance",
          "Modern minimalist design",
          "Stylish home decor",
        ],
        "Professional and Productivity": [
          "Office time display",
          "Presentation background",
          "Structured study environment",
          "Engaging waiting room clock",
          "Time management tool",
        ],
        "Entertainment and Events": [
          "Party ambiance",
          "Event decoration",
          "Exhibition feature",
          "Interactive display",
          "Custom time for events",
        ],
      },
    },
  },
  {
    name: "Motivational Quote",
    path: "/motivational-quote-screensaver",
    icon: "https://emojicdn.elk.sh/💬",
    title: "Motivational Quote Screensaver",
    type: "screensaver",
    components: {
      mid: <MotivationQuotesPreview />,
      // right: <MotivationQuotesRight />,
    },
    thumbnail: MotivationalQuoteIcon,
    tip: {
      title: "Motivational Quote Screensaver",
      content: {
        "Boost Morning Motivation":
          "Start your day with powerful motivational quotes on full screen. Refresh the page for new inspirational quotes that set a positive tone for your day.",
        "Create a Motivational Workspace":
          "Transform your workspace with the Motivational Quote Screensaver. Display inspirational motivational quotes on full screen to keep you focused and driven.",
        "Host Inspiring Meetings":
          "Use the Motivational Quote Screensaver during meetings to inspire and energize your team. Show custom quotes with author names to motivate and spark creativity.",
        "Stay Inspired During Study Sessions":
          "Keep your spirits high while studying with inspo quotes displayed on your screen. Refresh for new quotes or add custom motivational quotes for success.",
        "Enhance Home Ambiance":
          "Add a touch of inspiration to your home with full-screen inspirational quotes. Perfect for living rooms or home offices, the screensaver changes quotes with each refresh.",
        "Perfect for Fitness Motivation":
          "Stay motivated during workouts with powerful motivational quotes on your screen. Use the Motivational Quote Screensaver to keep pushing your limits.",
        "Customize for Personal Inspiration":
          "Personalize your inspiration by adding custom quotes and author names. The Motivational Quote Screensaver allows you to display your favorite quotes in full screen.",
      },
      subTips: {
        "Daily Motivation": [
          "Morning inspiration boost",
          "Positive start to the day",
          "Daily dose of motivation",
          "Uplifting quotes on refresh",
          "Start day with positivity",
        ],
        "Productivity and Focus": [
          "Stay focused at work",
          "Motivate during study",
          "Boost team creativity",
          "Inspirational work breaks",
          "Enhance workspace vibes",
        ],
        "Personal and Home Use": [
          "Inspire home decor",
          "Customizable quotes display",
          "Personal favorite quotes",
          "Encourage fitness routines",
          "Motivational home ambiance",
        ],
      },
    },
  },
  {
    name: "No Signal",
    path: "/no-signal-smpte-color-bars-screensaver",
    icon: "https://emojicdn.elk.sh/📡",
    title: "Color Bars - No Signal TV Screen",
    type: "screensaver",
    components: {
      mid: <NoSignalPreview />,
    },
    thumbnail: NoSignalIcon,
    tip: {
      title: "Color Bars - No Signal TV Screen",
      content: {
        "Create Retro TV Vibes with Color Bars Screen":
          "Missing those classic TV test patterns? Run this color bars generator fullscreen to transform any monitor into a vintage television display. Perfect for setting up retro gaming streams or creating that nostalgic broadcast feel.",
        "TV No Signal Screen for Video Production":
          "Need professional SMPTE color bars for video projects? This online tool generates broadcast-quality test patterns right in your browser. Great for setting up displays or adding authentic technical elements to your productions.",
        "Customize Your Stream's Break Screen":
          "Looking for a professional 'be right back' screen? Use this online TV test card generator to create a classic broadcast look for your streaming breaks. Add that professional touch to your channel with authentic color bars.",
        "Classic No Signal Screen for Art Installations":
          "Want that authentic TV static look for your art project? This online color bars generator creates genuine-looking test patterns and no signal screens. Perfect for galleries, installations, or any retro-tech aesthetic.",
        "Set the Mood with Retro Test Card Patterns":
          "Transform any screen into a nostalgic TV display with authentic color bars and test patterns. Great for parties, themed events, or just creating that perfect vintage atmosphere in your space.",
        "Prank Your Friends with a No Signal Screen":
          "Want to pull off a classic TV prank? Open this fullscreen color bars generator when your friends aren't looking. Watch them try to 'fix' the TV when they see the classic no signal pattern!",
        "Professional SMPTE Pattern for Display Testing":
          "Need to calibrate displays or test video equipment? Use this online color bars tool to generate standard test patterns. Great for checking monitors, projectors, or any display that needs quick visual testing.",
      },
      subTips: {
        "Entertainment & Pranks": [
          "fullscreen no signal screen pranks",
          "retro TV party decorations",
          "streaming break screen effects",
          "vintage broadcast aesthetics",
          "gaming room ambiance",
        ],
        "Professional Uses": [
          "SMPTE color bars testing",
          "monitor calibration patterns",
          "video production test cards",
          "display setup reference",
          "broadcast equipment checks",
        ],
        "Creative Projects": [
          "art installation backgrounds",
          "retro video aesthetics",
          "vintage TV set design",
          "film production props",
          "nostalgic media displays",
        ],
      },
    },
  },
];
export const getRouteByPath = (
  path?: string | null,
): RouteStore | undefined => {
  if (!path) throw new Error("Route path is required when fetching route");
  return routes.find(
    (route) => route.path === (path.startsWith("/") ? path : `/${path}`),
  );
};

export const getRouteByPathAsync = async (
  path: string,
): Promise<RouteStore | null> => {
  try {
    const route = routes.find((route) => route.path === path);
    if (!route) return null;

    // If there's any async data loading or processing needed for the route,
    // it should be done here
    await Promise.resolve(); // Placeholder for any future async operations
    console.log("get route successful");

    return route;
  } catch (error) {
    console.error("Error fetching route:", error);
    return null;
  }
};

export const getColorRoutes = () => routes.filter((route) => route.color);
export const getIconRoutes = () => routes.filter((route) => route.icon);
export const getNavigationRoutes = (
  pathName: string,
): RouteStore[] | undefined => {
  const existRoute = getRouteByPath(pathName);
  if (!existRoute) return undefined;

  const routeType = existRoute.type;
  const navigationRoutes = routes.filter((route) => route.type !== routeType);
  return navigationRoutes;
};
export const getColorNavigationRoutes = (): RouteStore[] => {
  return routes.filter((option: RouteStore) => !option.isAxis && option.color)
}
export default routes;
