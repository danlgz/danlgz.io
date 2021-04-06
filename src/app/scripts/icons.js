import { icon } from '@fortawesome/fontawesome-svg-core';
import { faCloudDownloadAlt, faEnvelope, faPalette, faTimes, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ICONS = {
    github: faGithub,
    linkedIn: faLinkedin,
    twitter: faTwitter,
    download: faCloudDownloadAlt,
    envelope: faEnvelope,
    palette: faPalette,
    times: faTimes,
    circle: faCircle,
}

export const readIcons = () => {
    const $els = document.querySelectorAll('i[icon]');

    $els.forEach(($el) => {
        const iconName = $el.getAttribute('icon');

        if (iconName in ICONS) {
            const i = icon(ICONS[iconName]);
            if (!!i) $el.appendChild(i.node[0]);
        }
    });
}
