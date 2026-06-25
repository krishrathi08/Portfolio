import { openLink, scrollTo } from "./methods";


const header = {
    menus: [
        { title: 'Home', id: 'home' },
        { title: 'About', id: 'my-self' },
        { title: 'Experience', id: 'experience' },
        { title: 'My Work', id: 'my-work' },
        { title: 'Tech Stacks', id: 'tech-stacks' },
        { title: 'Achievements', id: 'achievements' },
        { title: 'Contact', id: 'contact' },
    ],
    rightBtn: {
        label: 'Resume',
        onClick: () => openLink('assets/Krish_Rathi_Resume_Android_Kotlin.pdf')
    },
    logo: {
        src: '/assets/photo-logo.jpg',
        alt: 'krishrathi'
    },
    handleIconClick: () => scrollTo('home'),
    handleItemSelect: (menu) => scrollTo(menu.id),
}

export default header