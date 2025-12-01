import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { SkeletonProvider } from '@/components/ui/skeleton';
import { TypographyParagraph } from '@/components/ui/typography';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/UI/HoverCard',
  component: HoverCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {
  args: {},
  render: () => {
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button>Hover</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <TypographyParagraph>
            The React Framework – created and maintained by @vercel.
          </TypographyParagraph>
        </HoverCardContent>
      </HoverCard>
    );
  },
};

export const Skeleton: Story = {
  args: {},
  render: () => {
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button>Hover</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <SkeletonProvider show>
            <TypographyParagraph>
              The React Framework – created and maintained by @vercel.
            </TypographyParagraph>
          </SkeletonProvider>
        </HoverCardContent>
      </HoverCard>
    );
  },
};
