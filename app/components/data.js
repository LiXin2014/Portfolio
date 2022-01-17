import bakingImg from "../img/baking.jpg";
import hikingImg from "../img/hiking.jpg";
import readingImg from "../img/reading.jpg";
import microsoftIcon from "../img/microsoft.png";
import wolframIcon from "../img/wolfram.png";
import IUlogo from "../img/IUlogo.jpg";
import BeiJiaologo from "../img/BJlogo.png";

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
    return ["React", "Javascript", "CSS", "C#", "SQL"];
}

export function hobbies() {
    return [
        {"imgSource": bakingImg, "name": "Baking"},
        {"imgSource": hikingImg, "name": "Hiking"},
        {"imgSource": readingImg, "name": "Readomg"}
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
                {}
            ],
        "Front End":
            [
                {}
            ],
        "Full Stack":
            [
                {}
            ]
    }
}