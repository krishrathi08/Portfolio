import { openLink } from "./methods"

const outer = {
    title1:  `G'day, I'm`,
    title2: 'Krish Rathi,',
    decrypTexts: [
        'I build things for the App',
        'A Mobile App Developer',
        'A Backend Developer',
        'A Software Engineer',
    ],
    desciption: `A dedicated Software Engineer who loves turning ideas into real-world digital products. With hands-on experience across frontend, backend, and mobile development, I enjoy building scalable solutions that solve meaningful problems and deliver great user experiences.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:rathikrish539@gmail.com?subject=Hello')
    }
}

export default outer
