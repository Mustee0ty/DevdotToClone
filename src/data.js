//import icons

import Home from '../src/assets/img/svgs/Home.png';
import ReadingList from '../src/assets/img/svgs/ReadingList.png'
import Listing from '../src/assets/img/svgs/Listings.png'
import Podcasts from '../src/assets/img/svgs/Podcasts.png'
import Videos from '../src/assets/img/svgs/Videos.png'
import Tags from '../src/assets/img/svgs/Tags.png'
import FAQS from '../src/assets/img/svgs/Faq.png'
import ForemShop from '../src/assets/img/svgs/ForemShop.png'
import Sponsors from '../src/assets/img/svgs/Sponsors.png'
import About from '../src/assets/img/svgs/About.png'
import Contact from '../src/assets/img/svgs/Contact.png'
import Guides from '../src/assets/img/svgs/Guides.png'
import SoftwareComparisions from '../src/assets/img/svgs/SoftwareComparisons.png'
import CodeOfConduct from '../src/assets/img/svgs/CodeOfConduct.png'
import PrivacyPolicy from '../src/assets/img/svgs/PrivacyPolicy.png'
import TermsOfUse from '../src/assets/img/svgs/TermsOfUse.png'
import Twitter from '../src/assets/img/svgs/Twitter.svg'
import Facebook from '../src/assets/img/svgs/Facebook.svg'
import Github from '../src/assets/img/svgs/Github.svg'
import Instagram from '../src/assets/img/svgs/Instagram.svg'
import Twitch from '../src/assets/img/svgs/Twitch.svg'
import Nut from '../src/assets/img/svgs/Nut.svg'
import Control from '../src/assets/img/control.png'

//import Hero image

import Heroimg from '../src/assets/img/Hero.png'
import FirstSideImg from '../src/assets/img/Usidebarimg.png'
import ScndSideImg from '../src/assets/img/Lsidebarimg.png'

//import profile comment prPic

import Propic from '../src/assets/img/CommentPrcPic.jpg'

// import button svgs

import LikeBtn from '../src/assets/img/svgs/Like.svg'
import CommentBtn from '../src/assets/img/svgs/Comment.svg'
import SaveBtn from '../src/assets/img/svgs/Like.svg'

// import Nav images

import UpImg from '../src/assets/img/up.png'
import DownImg from '../src/assets/img/down.jpg'

import Top1 from './assets/img/Top1.png'
import Top2 from './assets/img/Top2.png'
import Top3 from './assets/img/Top3.png'
import Top4 from './assets/img/Top4.png'
import Top5 from './assets/img/Top5.png'
import Top6 from './assets/img/Top6.jpg'


import Down1 from './assets/img/Down1.png'
import Down2 from './assets/img/Down2.jpg'
import Down3 from './assets/img/Down3.png'

import VidImg from './assets/img/Video1.png'



export default Control

// export Sidebar Images
export const UpperImg = [
  {
    name:'UpperImage',
    image: FirstSideImg,
    heading:'Tell us your thoughts about DEV!',
    button:' → Take the DEV Satisfaction Survey', 
  }
]


export const LowerImg = [
  {
    name:'LowerImage',
    image: ScndSideImg,
    heading:'Redis Hackathon (45)',
    l1:'Real-time Poll app built using Redis, Node and WebSocket',
    l2:'Chattergram meets Redis - Transcribe your voice messages into written text',
    l3:'Create Redis Key - An NPM Package to Config & Create Redis Keys',
    l4:'Building the Salim Writing Blog',
    l5:'[Redis Hackathon Submission Post Placeholder Title]',
    button1:'Submit Your Project!',
    button2:'See all posts',
  }
]


// navigation
export const navigation = [
  {
    id: '1',
    image: Home,
    name: 'Home',
    link:'/',
  },
  {
    id: '2',
    image: ReadingList,
    name: 'Reading List',
    link:'/ReadingList',
  },
  {
    id: '3',
    image: Listing,
    name: 'Listings',
    link: '/Listing',
  },
  {
    id: '4',
    image: Podcasts,
    name: 'Podcasts',
    link:'/Podcasts'
  },
  {
    id: '5',
    image: Videos,
    name: 'Videos',
    link:'/Videos'
  },
  {
    id: '6',
    image: Tags,
    name: 'Tags',
    link:'/Tags'
  },
  {
    id: '7',
    image: FAQS,
    name: 'FAQ',
    link:'/faq'
  },
  {
    id: '8',
    image: ForemShop,
    name: 'Forem Shop',
    link:'/'
  },
  {
    id: '9',
    image: Sponsors,
    name: 'Sponsors',
    link:'/'
  },
  {
    id: '10',
    image: About,
    name: 'About',
    link:'/'
  },
  {
    id: '11',
    image: Contact,
    name: 'Contact',
    link:'/'
  },
  {
    id: '12',
    image: Guides,
    name: 'Guides',
    link:'/'
  },
  {
    id: '13',
    image: SoftwareComparisions,
    name: 'Software Comparisons',
    link:'/'
  },
  {
    id: '14',
    image: CodeOfConduct,
    name: 'Code of Conduct',
    link:'/'
  },
  {
    id: '15',
    image: PrivacyPolicy,
    name: 'Privacy Policy',
    link:'/'
  },
  {
    id: '16',
    image: TermsOfUse,
    name: 'Terms of use',
    link:'/'
  },
];

// social
export const social = [
  {
    icon: Twitter,
    href: '',
  },
  {
    icon: Facebook,
    href: '',
  },
  {
    icon: Github,
    href: '',
  },
  {
    icon: Instagram,
    href: '',
  },
  {
    icon: Twitch,
    href: '',
  },
];

export const Cnav = [
  {
    name: 'Relevant',
    href: './Relevant',
  },
  {
    name: 'Latest',
    href: './Latest',
  },
  {
    name: 'Top',
    href: './Top',
  },
];

export const Feeds = [
  {
    name: 'Sayyed Asad Ullah',
    image: Heroimg,
  }
]

export const PostData = [
  {  
    id:1,
    profileThumb: Propic,
    profileName: 'Madza',
    date: 'Aug 17(days Counter)',
    Heading: 'Tha Bold and Big Heading',
    CommentPpc: 'A small pic',
    CommentName: 'Commenter One',
  }
]

export const Extra = [
  {
    name:'My Tags',
    icon:Nut,
  }
];

export const Hashtages = [
  {
    name : '#html',
    href: '',
  },
  {
    name: '#css',
    href:'',
  },
  {
    name:'#javascript',
    href:'',
  },
  {
    name:'#beginner',
    href:'',
  }
]

// export Btns 
export const Btns = [
  {
    name:'Reactions',
    icon: LikeBtn,

  },
  {
    name:'Comments',
    icon: CommentBtn,
  },
]

// Navbar extras
export const NavExtras = [
  {
    id:1,
    image: UpImg,
    heading:'Calling all early-career developers & coding mentors!',
    text:'Join CodeNewbie Community: a supportive space for coding newbies to connect & express themselves.',
    button:'→Get in on the fun!',
  },
  {
    id:2,
    image:DownImg,
    heading:'The Forem Shop is Here!',
    text:'',
    button:'>> Shop Forem, DEV, and CodeNewbie merch',
  }
]

export const Listings = [
 {
  heading:'Test 2022 - By LambdaTest',
  sub:'collabs',
 }, 
 {
  heading:'Test 2022 - By LambdaTest',
  sub:'collabs',
 },
 {
  heading:'Test 2022 - By LambdaTest',
  sub:'collabs',
 },
 {
  heading:'Test 2022 - By LambdaTest',
  sub:'collabs',
 },
 {
  heading:'Test 2022 - By LambdaTest',
  sub:'collabs',
 }, 
]

export const Help = [
  {
    content:'How do you motivate yourself to work on personal projects? As a professional developer',
    comments:'2 comments',
  },
  {
    content:'How do you motivate yourself to work on personal projects? As a professional developer',
    comments:'2 comments',
  },
  {
    content:'How do you motivate yourself to work on personal projects? As a professional developer',
    comments:'2 comments',
  },
  {
    content:'How do you motivate yourself to work on personal projects? As a professional developer',
    comments:'2 comments',
  },
  {
    content:'How do you motivate yourself to work on personal projects? As a professional developer',
    comments:'2 comments',
  },
]

export const Discuss = [
  {
    content:'How do you motivate yourself to work on personal projects? As a professional developer',
    comments:'2 comments',
  },
  {
    content:'How do you motivate yourself to work on personal projects? As a professional developer',
    comments:'2 comments',
  },
  {
    content:'How do you motivate yourself to work on personal projects? As a professional developer',
    comments:'2 comments',
  },
  {
    content:'How do you motivate yourself to work on personal projects? As a professional developer',
    comments:'2 comments',
  },
  {
    content:'How do you motivate yourself to work on personal projects? As a professional developer',
    comments:'2 comments',
  },
]

export const ExplainLikeImFive = [
    {
      content:'How do you motivate yourself to work on personal projects? As a professional developer',
      button:'New',
    },
]

export const Challenge = [
  {
    content:'How do you motivate yourself to work on personal projects? As a professional developer',
    comments:'2 comments',
  },
  {
    content:'How do you motivate yourself to work on personal projects? As a professional developer',
    comments:'2 comments',
  },
  {
    content:'How do you motivate yourself to work on personal projects? As a professional developer',
    comments:'2 comments',
  },
  {
    content:'How do you motivate yourself to work on personal projects? As a professional developer',
    comments:'2 comments',
  },
  {
    content:'How do you motivate yourself to work on personal projects? As a professional developer',
    comments:'2 comments',
  },
]

export const meta = [
  {
    content:'What keeps ya coming back to dev',
    comments:'20 comments',
  },
  {
    content:'What keeps ya coming back to dev',
    comments:'20 comments',
  },
]

export const WaterCooler = [
  {
    content: 'Meme Monday! (Or tuesday)',
    comments: '25 comments '
  },
  {
    content: 'Meme Monday! (Or tuesday)',
    comments: '25 comments '
  },
  {
    content: 'Meme Monday! (Or tuesday)',
    comments: '25 comments '
  },
  {
    content: 'Meme Monday! (Or tuesday)',
    comments: '25 comments '
  },
  {
    content: 'Meme Monday! (Or tuesday)',
    comments: '25 comments '
  },
]

export const Posts = [
  {
    id:1,
    profilePic:'',
    username:'',
    date:'',
    heading:'',
    reactionBtn:'',
    commentsBtn:'',
    commentHead:'',
    commentImg:'',
  }
]

export const TopCards = [
  {
    id:1,
    image:Top1,
    heading:'The art of the PR',
    subTitle:'Go Time, Aug 27'
  },
  {
    id:2,
    image:Top2,
    heading:'The Day-1 Decisions that Make or Break Companies w/ PlanetScales CEO Sam Lambert',
    subTitle:'Dev INterrupted, Aug 27'
  },
  {
    id:3,
    image:Top3,
    heading:'ML Platforms Where to start',
    subTitle:'MLOPs Community, Aug 26'
  },
  {
    id:4,
    image:Top4,
    heading:'Lunchbox.js with Sander Moolin',
    subTitle:'PodRocket - A web development podcast from LogRocket, Aug 26'
  },
  {
    id:5,
    image:Top5,
    heading:'Lambda3 Podcast 314',
    subTitle:'Lambda3 Podcast, Aug 26'
  },
  {
    id:6,
    image:Top6,
    heading:'Astro: Just Another JS Framework',
    subTitle:'All the Code, Aug 26'
  },
]

export const MiddleCards = [
  {
    id:1,
    image:Down1,
    text:'CodeNewbie',
  },
  {
    id:2,
    image:Down2,
    text:'DevDiscuss',
  },
  {
    id:1,
    image:Down3,
    text:'DevNews',
  },
]

export const Listingg = [
  {
    id:1,
    thing:'Contributors/Collaborators Wanted'
  },
  {
    id:2,
    thing:'Conference CFP'
  },
  {
    id:3,
    thing:'Available for Hire'
  },
  {
    id:4,
    thing:'Education/Courses'
  },
  {
    id:5,
    thing:' Job Listings'
  },
  {
    id:6,
    thing:'Offering Mentorship'
  },
  {
    id:7,
    thing:'Seeking a Mentor'
  },
  {
    id:8,
    thing:'Stuff for Sale'
  },
  {
    id:9,
    thing:'Upcoming Events'
  },
  {
    id:10,
    thing:'Miscellaneous'
  },
  {
    id:11,
    thing:'Products/Tools'
  },
]

export const ListItems = [
  {
    id:1,
    heading:'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, minima dolorem illo accusamus quas corrupti doloribus ratione cum excepturi voluptates accusantium nulla aperiam quod eveniet suscipit',
    profileThumb:'',
    propfileName:'Shehi',
    nameSub:'Tada',
    date:'Aug 29'   
  }
]

export const SingleVideo = [
  { 
    id:1,
    image:VidImg,
    vidname:'How Pranav Discovered Power Platform',
    guyName:'Olanrewaju Oyinbooke',
    time:'00:59',
  },
]

export const SingleTag = [
  {
    id:1,
    tag:'javascript',
    text:'Once relegated to the browser as one of the 3 core technologies of the web, JavaScript can now be found almost anywhere you find code. JavaScript developers move fast and push software development forward; they can be as opinionated as the frameworks they use, so lets keep it clean here and make it a place to learn from each other!',
    posts:'103962 posts published',
    btnTxt:'Following',
  },
  {
    id:2,
    tag:'webdev',
    text:'Once relegated to the browser as one of the 3 core technologies of the web, JavaScript can now be found almost anywhere you find code. JavaScript developers move fast and push software development forward; they can be as opinionated as the frameworks they use, so lets keep it clean here and make it a place to learn from each other!',
    posts:'103962 posts published',
    btnTxt:'Following',
  },
]

export const ReadingTags = [
  {
    id:1,
    name:'#css',
  },
  {
    id:2,
    name:'#frontend',
  },
  {
    id:3,
    name:'#mobile',
  },
  {
    id:4,
    name:'#showdev',
  },
  {
    id:5,
    name:'#tutorial',
  },
  {
    id:6,
    name:'#ux',
  },
  {
    id:7,
    name:'#web',
  },
  {
    id:8,
    name:'#webdev',
  },
]