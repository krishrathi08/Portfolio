import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/krishrathi08',
        'instagram': 'https://www.instagram.com/itskkr_08/',
        'whatsapp': 'https://wa.me/917043593723',
        'linkedin': 'https://www.linkedin.com/in/krish-rathi-aa2156290',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'rathikrish539@gmail.com',
        onClick: () => openLink('mailto:rathikrish539@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements