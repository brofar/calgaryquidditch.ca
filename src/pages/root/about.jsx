import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
} from '@mantine/core';
import { IconGauge, IconUser } from '@tabler/icons-react';

const mockdata = [
    {
        title: 'Become a member',
        description:
            <>Become a Calgary Quidditch Club member! Individual members are covered under our insurance policies when playing or attending quadball events. Please email <Text inherit c="blue" component="a" href="mailto:info@calgaryquidditch.ca">info@calgaryquidditch.ca</Text> to become an individual member.</>,
        icon: IconUser,
    },
    {
        title: 'Form a Team',
        description:
            <>Become a Calgary Quidditch Club team! Teams can take part in our quadball league and play in our tournaments. Teams also receive advertising and promotion opportunities. Contact <Text inherit c="blue" component="a" href="mailto:info@calgaryquidditch.ca">info@calgaryquidditch.ca</Text> for details.</>,
        icon: IconGauge,
    }
];

const useStyles = createStyles((theme) => ({
    title: {
        fontSize: rem(34),
        fontWeight: 900,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(24),
        },
    },

    description: {
        maxWidth: 600,
        margin: 'auto',

        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },

    card: {
        border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
            }`,
    },

    cardTitle: {
        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
        },
    },
}));

export default function About() {
    const { classes, theme } = useStyles();
    const features = mockdata.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
            <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {feature.description}
            </Text>
        </Card>
    ));

    return (
        <Container size="lg" py="xl">

            <Title
                order={2}
                size="h1"
                weight={900}
                align="center"
            >
                Our Mission
            </Title>
            <Text c="dimmed" className={classes.description} ta="center" mt="md">
                Join our mission to support the growth of quadball in Calgary and act as a technical and social centre for the sport.
            </Text>

            <SimpleGrid cols={2} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                {features}
            </SimpleGrid>
        </Container>
    );
}