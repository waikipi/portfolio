import self from "../img/self.jpg"
import img1 from "../img/img1.png"
import img2 from "../img/img2.png"
import img3 from "../img/img3.png"
import img4 from "../img/img4.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Fidel",
    lastName: "M. Galianez",
    initials: "fm", 
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🏋️‍♂️',
            text: 'well-motivated'
        },
        {
            emoji: '🌎',
            text: 'based in Spain'
        },
        {
            emoji: "📞",
            text: "0034 645 26 33 32"
        },
        {
            emoji: "📧",
            text: "galianez@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/waikipi",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/fidel-mu%C3%B1oz-galianez-5b1a5b141/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }

    ],
    bio: "Hello! I'm Fidel. I have an official qualification in Web Development, and also many courses made on Udemy, Codecademy, FreeCodeCamp and others. I am passionate about programming, so please be sure that you can count on me for a professional and reliable work.",
    skills:
        {
            proficientWith: ['Javascript', 'HTML', 'CSS', 'React', 'Nextjs', 'Bootstrap', 'Nodejs', 'Express', 'MongoDb', 'Git', 'GitHub'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'running',
            emoji: '🏃🏼‍♂️'
        },
        {
            label: 'mistery novels',
            emoji: '📖'
        },
        {
            label: 'travel',
            emoji: '🛫'
        },
        {
            label: 'Roxette, A-Ha, Duran Duran',
            emoji: '🎸'
        }
    ],
    portfolio: [ 
        {
            title: "Rent a bike App",
            live: "https://rent-a-bike-app.herokuapp.com/", 
            source: "https://github.com/waikipi/rent-a-bike-app", 
            image: img1
        },
        {
            title: "Trivial On Line",
            live: "https://trivia-online-app.herokuapp.com/",
            source: "https://github.com/waikipi/trivial-online-app",
            image: img2
        },
        {
            title: "Space Cleaner Game",
            live: "https://waikipi.github.io/cleaning-rocket/",
            source: "https://github.com/waikipi/cleaning-rocket",
            image: img3
        },
        {
            title: "Matching Game",
            live: "https://waikipi.github.io/match-app/",
            source: "https://github.com/waikipi/match-app",
            image: img4
        }
    ]
}