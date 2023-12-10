import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagramAlt } from 'react-icons/bi'
const footerLinks = [
    {
        id: 0,
        title: "techee",
        description: "Our vision is to provide convinience and help increase your sales business",
        socialIcons: [<BiLogoFacebook />, <BiLogoTwitter />, <BiLogoInstagramAlt />]
    },
    {
        id: 1,
        title: "Company",
        links: [
            {
                id: 0,
                label: "Home",
                path: "/"
            },
            {
                id: 1,
                label: "Products",
                path: "/products"
            },
            {
                id: 2,
                label: "About",
                path: "/about"
            },
        ]
    },
    {
        id: 2,
        title: "About",
        links: [
            {
                id: 0,
                label: "About Us",
                path: "/about"
            },
            {
                id: 1,
                label: "Contact Us",
                path: "/about"
            },
            {
                id: 2,
                label: "Careers",
                path: "/about"
            },
            {
                id: 3,
                label: "Reviews",
                path: "/about"
            },
        ]
    },
    {
        id: 3,
        title: "Socials",
        links: [
            {
                id: 0,
                label: "Discord",
                path: "https://discord.com/"
            },
            {
                id: 1,
                label: "Instagram",
                path: "https://www.instagram.com/"
            },
            {
                id: 2,
                label: "Twitter",
                path: "https://twitter.com/"
            },
            {
                id: 3,
                label: "Facebook",
                path: "https://facebook.com"
            }
        ]
    },
]

export default footerLinks;