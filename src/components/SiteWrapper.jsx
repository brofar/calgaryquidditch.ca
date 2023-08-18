import { PropTypes } from 'prop-types';
import SiteFooter from './SiteFooter';

const footerLinks = [
    {
        "title": "Links",
        "links": [
            {
                "label": "About",
                "link": "#"
            },
            {
                "label": "Learn",
                "link": "#"
            },
            {
                "label": "Contribute",
                "link": "#"
            }
        ]
    },
    {
        "title": "Play",
        "links": [
            {
                "label": "Calgary Youth Program",
                "link": "#"
            },
            {
                "label": "Cochrane Youth Program",
                "link": "#"
            },
            {
                "label": "Adult Development Program",
                "link": "#"
            },
            {
                "label": "Adult Competitive Program",
                "link": "#"
            }
        ]
    }
]

export default function SiteWrapper(props) {

    return (
        <>
            {props.children}
            <SiteFooter data={footerLinks} />
        </>
    );
}

SiteWrapper.propTypes = {
    children: PropTypes.any
}