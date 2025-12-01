import { SkeletonProvider } from '@/components/ui/skeleton';
import {
  TypographyDiv,
  TypographyHeading,
  TypographyParagraph,
  TypographySpan,
} from '@/components/ui/typography';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/UI/Typography',
  component: TypographyDiv,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TypographyDiv>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Span: Story = {
  render: () => <TypographySpan>This is a span</TypographySpan>,
};

export const Div: Story = {
  render: () => <TypographyDiv>This is a div</TypographyDiv>,
};

export const Paragraph: Story = {
  render: () => (
    <TypographyParagraph>
      This is a paragraph. It can contain multiple sentences and is typically
      used for longer blocks content. The paragraph element adds default margins
      and is block-level by default.
    </TypographyParagraph>
  ),
};

export const H1: Story = {
  render: () => <TypographyHeading as="h1">This is a h1</TypographyHeading>,
};

export const H2: Story = {
  render: () => <TypographyHeading as="h2">This is a h2</TypographyHeading>,
};

export const H3: Story = {
  render: () => <TypographyHeading as="h3">This is a h3</TypographyHeading>,
};

export const H4: Story = {
  render: () => <TypographyHeading as="h4">This is a h4</TypographyHeading>,
};

export const H5: Story = {
  render: () => <TypographyHeading as="h5">This is a h5</TypographyHeading>,
};

export const SpanSkeleton: Story = {
  render: () => (
    <SkeletonProvider show>
      <TypographySpan>Loading span...</TypographySpan>
    </SkeletonProvider>
  ),
};

export const DivSkeleton: Story = {
  render: () => (
    <SkeletonProvider show>
      <TypographyDiv>Loading div...</TypographyDiv>
    </SkeletonProvider>
  ),
};

export const ParagraphSkeleton: Story = {
  render: () => (
    <SkeletonProvider show>
      <TypographyParagraph>
        This is a paragraph. It can contain multiple sentences and is typically
        used for longer blocks content. The paragraph element adds default
        margins and is block-level by default.
      </TypographyParagraph>
    </SkeletonProvider>
  ),
};

export const H1Skeleton: Story = {
  render: () => (
    <SkeletonProvider show>
      <TypographyHeading as="h1">Loading h1...</TypographyHeading>
    </SkeletonProvider>
  ),
};

export const H2Skeleton: Story = {
  render: () => (
    <SkeletonProvider show>
      <TypographyHeading as="h2">Loading h2...</TypographyHeading>
    </SkeletonProvider>
  ),
};

export const H3Skeleton: Story = {
  render: () => (
    <SkeletonProvider show>
      <TypographyHeading as="h3">Loading h3...</TypographyHeading>
    </SkeletonProvider>
  ),
};

export const H4Skeleton: Story = {
  render: () => (
    <SkeletonProvider show>
      <TypographyHeading as="h4">Loading h4...</TypographyHeading>
    </SkeletonProvider>
  ),
};

export const H5Skeleton: Story = {
  render: () => (
    <SkeletonProvider show>
      <TypographyHeading as="h5">Loading h5...</TypographyHeading>
    </SkeletonProvider>
  ),
};
