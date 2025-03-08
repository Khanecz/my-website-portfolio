import ylandsImg from '../../images/ylands.jpg';
import khanImg from '../../images/khan.png';
import eveImg from '../../images/eve.png';
import godotImg from '../../images/godot.png';

export const homeObjOne = {
    id: "about",
    lightBg: true,
    lightText: false,
    projectOneDescriptionOne: "Hi! My name is Michael and I'm a game designer. Below, you can find all the projects I have worked on so far.",
    portraitImg: khanImg,
    showSecondProject: false
}

export const homeObjTwo = {
    id: "games",
    lightBg: false,
    lightText: false,
    topLine: 'Games I have worked on',
    projectOneimgOne: ylandsImg,
    projectOneHeadingOne: 'Ylands',
    projectOneDescriptionOne: 'Ylands is a cheerful, sandbox game with a survival element and an ingame editor that serves as a platform to make your own games.',
    projectOneDescriptionTwo: 'I have worked on Ylands as a designer from 2015 to 2022',
    projectOneLink: '//www.ylands.com',
    projectTwoimgOne: eveImg,
    projectTwoHeadingOne: 'EVE Online',
    projectTwoDescriptionOne: 'EVE Online is the largest single shard space MMO of all time. With over 7,000 solar systems and more than 21 years of rich player-created history, join this storied universe and play free to experience everything from immense PvP or PvE battles to mining, exploration, and industry.',
    projectTwoDescriptionTwo: 'I have worked on EVE Online as a senior game designer since 2022',
    projectTwoLink: '//www.eveonline.com/',
    showSecondProject: true
}

export const homeObjThree = {
    id: "mygames",
    lightBg: true,
    lightText: false,
    topLine: 'My Games',
    projectOneimgOne: godotImg,
    projectOneHeadingOne: 'Unnamed Project',
    projectOneDescriptionOne: 'Narrative driven game made in Godot Engine',
    projectOneDescriptionTwo: '',
    showSecondProject: false
}


