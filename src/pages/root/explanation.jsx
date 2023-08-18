import {
  Title,
  SimpleGrid,
  Text,
  Button,
  Box,
  ThemeIcon,
  Grid,
  Col,
  rem,
} from '@mantine/core';
import { IconBallVolleyball, IconBuildingStadium, IconMedal, IconRun } from '@tabler/icons-react';

const features = [
  {
    icon: IconBallVolleyball,
    title: 'Youth Level',
    description: 'Specifically for players under 18, low contact games/practices in teams coached by Calgary quadball players.',
    cta:
    <Button
      variant="gradient"
      gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      size="sm"
      radius="md"
      mt="sm"
    >
      More info
    </Button>
  },
  {
    icon: IconRun,
    title: 'Development Level',
    description: 'Low contact teams aiming at skill development and social gatherings.',
    cta:
    <Button
      variant="gradient"
      gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      size="sm"
      radius="md"
      mt="sm"
    >
      More info
    </Button>
  },
  {
    icon: IconMedal,
    title: 'Competitive Level',
    description:
      'Full contact, regional and national level competition. Performance focus.',
      cta:
      <Button
        variant="gradient"
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
        size="sm"
        radius="md"
        mt="sm"
      >
        More info
      </Button>
  },
  {
    icon: IconBuildingStadium,
    title: 'International Level',
    description:
      'Represent Canada at the World Cup and face off against elite players from other countries.',
  },
];

export default function Explanation() {

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="xl"
        variant="gradient"
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      >
        <feature.icon size={rem(26)} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
      {feature.cta}
    </div>
  ));

  return (
    <Box p="xl">
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title
            order={2}
            size="h1"
            weight={900}
          >
            Quadball
          </Title>
          <Text c="dimmed" py="lg">
            Quadball (formerly &quot;quidditch&quot;) is a mixed gender sport with full-contact and low-contact rulesets comprising a unique mix of elements from rugby, dodge ball, and ultimate frisbee.
          </Text>
          <Text c="dimmed">
            Quadball brings sport and physical activity to a group of people who may not otherwise be inclined to get out and be active.
            Calgary&apos;s quadball community has players with {' '}<Text component="span" inherit fw={700} c="blue">no sport experience</Text>{' '} to competitive backgrounds in other sports. The Calgary Quidditch Club offers a safe space for adults and youth to get active and become more involved in their community!
          </Text>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </Box>
  );
}