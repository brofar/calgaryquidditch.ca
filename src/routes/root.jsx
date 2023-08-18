import SiteWrapper from '../components/SiteWrapper';
import RootHeader from '../pages/root/header';
import Explanation from '../pages/root/explanation';
import CalendarSimple from '../pages/root/calendar';
import About from '../pages/root/about';

export default function Root() {
    return (
        <SiteWrapper>
            <RootHeader />
            <Explanation />
            <CalendarSimple />
            <About />
        </SiteWrapper>
    );
}