import ylandsImg from '../../images/ylands.jpg';
import linkImg from '../../images/link.png';

export const homeObjOne = {
    id: "about",
    lightBg: true,
    lightText: false,
    topLine: 'About',
}

export const homeObjTwo = {
    id: "website",
    lightBg: false,
    lightText: false,
    topLine: 'My websites',
    ProjectOneimgOne: linkImg,
    projectOneHeadingOne: 'Link the Linguist',
    projectOneDescriptionOne: 'Teaching portfolio'
    
}

export const homeObjThree = {
    id: "games",
    lightBg: true,
    lightText: false,
    topLine: 'My Games',
    ProjectOneimgOne: ylandsImg,
    projectOneHeadingOne: 'Ylands',
    projectOneDescriptionOne: 'Cheerful polygony sandboxy game bla bla bla bla bla'
}