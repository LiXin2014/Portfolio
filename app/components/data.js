import bakingImg from "../img/baking.jpg";
import hikingImg from "../img/hiking.jpg";
import readingImg from "../img/reading.jpg";
import microsoftIcon from "../img/microsoft.png";
import wolframIcon from "../img/wolfram.png";
import IUlogo from "../img/IUlogo.jpg";
import BeiJiaologo from "../img/BJlogo.png";

import notFound from "../img/404NotFound.png";
import myTeamPage from "../img/MyTeamPage.png";
import interiorConsultant from "../img/InteriorConsultant.png";
import recipePage from "../img/RecipePage.png";
import myGallery from "../img/MyGallery.png";
import checkoutPage from "../img/CheckoutPage.png";
import edieHomepage from "../img/EdieHomepage.png";
import portfolio from "../img/Portfolio.png";

export function personal() {
    return {
        "name": "Xin Li",
        "title": "Software Engineer 2",
        "email": "xinli601@gmail.com",
        "phone": "(865)642-2456",
        "description": "Self-driven developer, who is passionate to learn and create outstanding applications."
    }
}

export function skills() {
    return ["React", "Javascript", "CSS", "C Sharp", "SQL"];
}

export function hobbies() {
    return [
        { "imgSource": bakingImg, "name": "Baking" },
        { "imgSource": hikingImg, "name": "Hiking" },
        { "imgSource": readingImg, "name": "Reading" }
    ]
}

export function experiences() {
    return [
        {
            "company": "microsoft",
            "icon": microsoftIcon,
            "time": "Jun 2018 - Present",
            "title": "Software Engineer II",
            "accomplishments": [
                "Implemented various UI controls with React and Redux in Azure DevOps (formerly Visual Studio Team Services)",
                "Implemented Counters Tool in Visual Studio Profiling, it allows .Net developers to observe performance counter values easier with better readability and visualization",
                "Refactored backend of Visual Studio from native to managed with teammates.",
                "Implemented autocomplete, flamechart that used across Visaul Studio Profiling tools, refactored several controls so they can be used across tools."
            ]
        },
        {
            "company": "wolfram",
            "icon": wolframIcon,
            "time": "Nov 2015 - May 2018",
            "title": "Software Engineer",
            "accomplishments": [
                "Re-Implemented DatabinAdd API in Java.",
                "Performed code optimization for cloud back-end.",
                "Fixed bugs and reviewed pull requests for cloud release 1.38 – 1.46."
            ]
        }
    ]
}

export function education() {
    return [
        {
            "school": "Indiana University - Bloomington",
            "logo": IUlogo,
            "description": "Masters, Computer Science, 3.6/4.0",
            "time": "2012 - 2014"
        },
        {
            "school": "Beijing Jiaotong University",
            "logo": BeiJiaologo,
            "description": "Bachelor's, Computer Science, 3.53/4.0",
            "time": "2008 - 2012"
        }
    ]
}

export function projects() {
    return {
        "Responsive":
            [
                {
                    "name": "404 Not Found",
                    "img": notFound,
                    "skills": ["HTML", "CSS"],
                    "description": "Built a responsive 404 page with HTML and CSS. Practiced using grid, flexbox layout and media query to build a responsive page.",
                    "demoURL": "https://keen-shannon-522a3e.netlify.app/",
                    "codeURL": "https://github.com/LiXin2014/404NotFound_DevChallenge"
                },
                {
                    "name": "My Team Page",
                    "img": myTeamPage,
                    "skills": ["HTML", "CSS"],
                    "description": "Built a reponsive team members intro page with HTML and CSS.",
                    "demoURL": "https://focused-kirch-d97a0d.netlify.app/",
                    "codeURL": "https://github.com/LiXin2014/MyTeamPage_DevChallenge"
                },
                {
                    "name": "Interior Consultant",
                    "img": interiorConsultant,
                    "skills": ["HTML", "JavaScript"],
                    "description": "Built a responsive interior consultant page with HTML, CSS, and JavaScript.",
                    "demoURL": "https://agitated-liskov-59589b.netlify.app/",
                    "codeURL": "https://github.com/LiXin2014/InteriorConsultant_DevChallenge"
                },
                {
                    "name": "RecipePage",
                    "img": recipePage,
                    "skills": ["HTML", "CSS"],
                    "description": "Built a responsive Recipe Page with HTML, CSS, and JavaScript.",
                    "demoURL": "https://suspicious-swanson-0c022c.netlify.app/",
                    "codeURL": "https://github.com/LiXin2014/RecipePage_DevChallenge"
                },
                {
                    "name": "My Gallery",
                    "img": myGallery,
                    "skills": ["HTML", "CSS"],
                    "description": "Built a responsive photos gallery page with HTML and CSS.",
                    "demoURL": "https://naughty-brahmagupta-b8f2a8.netlify.app/",
                    "codeURL": "https://github.com/LiXin2014/MyGallery_DevChallenge"
                },
                {
                    "name": "Checkout Page",
                    "img": checkoutPage,
                    "skills": ["HTML", "CSS", "JavaScript"],
                    "description": "Built a responsive Checkout page with HTML and CSS, added form validation with JavaScript ",
                    "demoURL": "https://objective-albattani-7b58aa.netlify.app/",
                    "codeURL": "https://github.com/LiXin2014/Checkout_DevChallenge"
                },
                {
                    "name": "Edie Homepage",
                    "img": edieHomepage,
                    "skills": ["HTML", "CSS"],
                    "description": "Built a responsive Homepage with HTML and CSS.",
                    "demoURL": "https://hopeful-hodgkin-b6d36a.netlify.app/",
                    "codeURL": "https://github.com/LiXin2014/EdieHomepage_DevChallenge"
                },
                {
                    "name": "Portfolio",
                    "img": portfolio,
                    "skills": ["HTML", "CSS", "React"],
                    "description": "Built a responsive personal portfolio with HTML, CSS, and React.",
                    "demoURL": "https://objective-goldwasser-d804f6.netlify.app/",
                    "codeURL": "https://github.com/LiXin2014/Portfolio"
                }
            ],
        "Front End":
            [
                {
                    "name": "404 Not Found1",
                    "img": notFound,
                    "skills": ["HTML", "CSS"],
                    "description": "Built a responsive 404 page with HTML and CSS. Practiced using grid, flexbox layout and media query to build a responsive page.",
                    "demoURL": "https://keen-shannon-522a3e.netlify.app/",
                    "codeURL": "https://github.com/LiXin2014/404NotFound_DevChallenge"
                },
                {
                    "name": "404 Not Found2",
                    "img": notFound,
                    "skills": ["HTML", "CSS"],
                    "description": "Built a responsive 404 page with HTML and CSS. Practiced using grid, flexbox layout and media query to build a responsive page.",
                    "demoURL": "https://keen-shannon-522a3e.netlify.app/",
                    "codeURL": "https://github.com/LiXin2014/404NotFound_DevChallenge"
                },
                {
                    "name": "404 Not Found3",
                    "img": notFound,
                    "skills": ["HTML", "CSS"],
                    "description": "Built a responsive 404 page with HTML and CSS. Practiced using grid, flexbox layout and media query to build a responsive page.",
                    "demoURL": "https://keen-shannon-522a3e.netlify.app/",
                    "codeURL": "https://github.com/LiXin2014/404NotFound_DevChallenge"
                },
                {
                    "name": "404 Not Found4",
                    "img": notFound,
                    "skills": ["HTML", "CSS"],
                    "description": "Built a responsive 404 page with HTML and CSS. Practiced using grid, flexbox layout and media query to build a responsive page.",
                    "demoURL": "https://keen-shannon-522a3e.netlify.app/",
                    "codeURL": "https://github.com/LiXin2014/404NotFound_DevChallenge"
                },
                {
                    "name": "404 Not Found5",
                    "img": notFound,
                    "skills": ["HTML", "CSS"],
                    "description": "Built a responsive 404 page with HTML and CSS. Practiced using grid, flexbox layout and media query to build a responsive page.",
                    "demoURL": "https://keen-shannon-522a3e.netlify.app/",
                    "codeURL": "https://github.com/LiXin2014/404NotFound_DevChallenge"
                },
                {
                    "name": "404 Not Found6",
                    "img": notFound,
                    "skills": ["HTML", "CSS"],
                    "description": "Built a responsive 404 page with HTML and CSS. Practiced using grid, flexbox layout and media query to build a responsive page.",
                    "demoURL": "https://keen-shannon-522a3e.netlify.app/",
                    "codeURL": "https://github.com/LiXin2014/404NotFound_DevChallenge"
                },
            ],
        "Full Stack":
            [
                {
                    "name": "404 Not Found",
                    "img": notFound,
                    "skills": ["HTML", "CSS"],
                    "description": "Built a responsive 404 page with HTML and CSS. Practiced using grid, flexbox layout and media query to build a responsive page.",
                    "demoURL": "https://keen-shannon-522a3e.netlify.app/",
                    "codeURL": "https://github.com/LiXin2014/404NotFound_DevChallenge"
                },
            ]
    }
}