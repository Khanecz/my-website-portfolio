import ylandsImg from '../../images/ylands.jpg';
import linkImg from '../../images/link.png';
import CV from '../../files/Rezabek_CV.pdf';

export const homeObjOne = {
    id: "about",
    lightBg: true,
    lightText: false,
    topLine: 'About',
    displayCVButton: false
}

export const homeObjTwo = {
    id: "website",
    lightBg: false,
    lightText: false,
    topLine: 'My websites',
    ProjectOneimgOne: linkImg,
    projectOneHeadingOne: 'Link the Linguist',
    projectOneDescriptionOne: 'Teaching portfolio',
    displayCVButton: false
    
}

export const homeObjThree = {
    id: "games",
    lightBg: true,
    lightText: false,
    topLine: 'My Games',
    ProjectOneimgOne: ylandsImg,
    projectOneHeadingOne: 'Ylands',
    projectOneDescriptionOne: 'Cheerful polygony sandboxy game bla bla bla bla bla',
    displayCVButton: false
}

export const homeObjFour = {
    id: "cv",
    lightBg: false,
    lightText: false,
    topLine: 'CV',
    displayCVButton: true,
    CVlocation: CV
}