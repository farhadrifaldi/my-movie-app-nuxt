export type linkType = {
    label: string;
    to: string;
    icon?: string;
    child?: linkType[];
}

export const categoriesLinks: linkType[] = [{
    label: 'action',
    to: '#'
}, {
    label: 'adventure',
    to: '#'
}, {
    label: 'animation',
    to: '#'
}, {
    label: 'comedy',
    to: '#'
}, {
    label: 'crime',
    to: '#'
}]

export const links: linkType[] = [
    { label: 'Categories', to: "/", icon: "mynaui:grid-solid", child: categoriesLinks },
    { label: 'Movies', to: "/" },
    { label: 'Show', to: "/" },
    { label: 'Login', to: "/" }
]