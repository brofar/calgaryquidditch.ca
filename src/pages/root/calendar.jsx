import { Title, Center, MediaQuery } from '@mantine/core';

export default function CalendarSimple() {
    const hide = {
        display: 'none'
    };
    return (
        <>
            <Title
                order={2}
                size="h1"
                weight={900}
                align="center"
            >
                Events Calendar
            </Title>
            <Center>
                <MediaQuery smallerThan="md" styles={hide}>
                    <iframe
                        src="https://calendar.google.com/calendar/embed?showTitle=0&showNav=0&showPrint=0&showTabs=0&showCalendars=0&height=600&wkst=1&bgcolor=%23FFFFFF&src=calgaryquidditch.ca_t8n73f6dsc8uu7dfbq4cferspc%40group.calendar.google.com&color=%23125A12&ctz=America%2FEdmonton"
                        style={{ borderWidth: 0 }}
                        width="800"
                        height="600"
                        data-ruffle-polyfilled=""></iframe>
                </MediaQuery>
                <MediaQuery largerThan="md" styles={hide}>
                    <iframe
                        loading="lazy"
                        src="https://calendar.google.com/calendar/embed?showTitle=0&showNav=0&showPrint=0&showTabs=0&showCalendars=0&mode=AGENDA&height=600&wkst=1&bgcolor=%23FFFFFF&src=calgaryquidditch.ca_t8n73f6dsc8uu7dfbq4cferspc%40group.calendar.google.com&color=%23125A12&ctz=America%2FEdmonton"
                        style={{ borderWidth: 0 }}
                        width="800"
                        height="600"
                        data-ruffle-polyfilled=""></iframe>
                </MediaQuery>
            </Center>
        </>
    );
}