import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Details,
  DetailsItem,
  DetailsItemLabel,
  DetailsItemValue,
} from '../../../components/ui/details';
import { SkeletonProvider } from '../../../components/ui/skeleton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/UI/Details',
  component: Details,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'object' },
      description: 'Number of grid columns with responsive variants (1-12)',
    },
    justifyContent: {
      control: { type: 'object' },
      description:
        'Justify content with responsive variants (normal, start, end, center, between, evenly, around, stretch)',
    },
    justifyItems: {
      control: { type: 'object' },
      description:
        'Justify items with responsive variants (start, end, center, stretch)',
    },
    alignContent: {
      control: { type: 'object' },
      description:
        'Align content with responsive variants (normal, center, start, end, between, around, evenly, baseline, stretch)',
    },
    alignItems: {
      control: { type: 'object' },
      description:
        'Align items with responsive variants (start, end, center, baseline, stretch)',
    },
    placeContent: {
      control: { type: 'object' },
      description:
        'Place content with responsive variants (center, start, end, between, around, evenly, baseline, stretch)',
    },
    placeItems: {
      control: { type: 'object' },
      description:
        'Place items with responsive variants (start, end, center, baseline, stretch)',
    },
    gap: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
      description: 'Defines the spacing between grid items.',
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      defaultValue: 'vertical',
    },
    colon: { type: 'boolean' },
  },
} satisfies Meta<typeof Details>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const _Story: Story = {
  render: ({ columns, ...props }) => (
    <div className="w-[800px]">
      <Details columns={columns ?? { default: 4 }} {...props}>
        <DetailsItem>
          <DetailsItemLabel>Name</DetailsItemLabel>
          <DetailsItemValue>Amit Nigam</DetailsItemValue>
        </DetailsItem>
        <DetailsItem>
          <DetailsItemLabel>Phone</DetailsItemLabel>
          <DetailsItemValue>+1 23 456 7890</DetailsItemValue>
        </DetailsItem>
        <DetailsItem>
          <DetailsItemLabel>Email</DetailsItemLabel>
          <DetailsItemValue>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              amit.nigam@demo.com
            </a>
          </DetailsItemValue>
        </DetailsItem>
        <DetailsItem>
          <DetailsItemLabel>Blood Group</DetailsItemLabel>
          <DetailsItemValue>B +ve</DetailsItemValue>
        </DetailsItem>
        <DetailsItem>
          <DetailsItemLabel>Joining Date</DetailsItemLabel>
          <DetailsItemValue>05 Jan 2022</DetailsItemValue>
        </DetailsItem>
        <DetailsItem>
          <DetailsItemLabel>Vertical</DetailsItemLabel>
          <DetailsItemValue>Application</DetailsItemValue>
        </DetailsItem>
        <DetailsItem>
          <DetailsItemLabel>Project</DetailsItemLabel>
          <DetailsItemValue>Airfi Portal</DetailsItemValue>
        </DetailsItem>
        <DetailsItem>
          <DetailsItemLabel>Role</DetailsItemLabel>
          <DetailsItemValue>Front End Developer</DetailsItemValue>
        </DetailsItem>
      </Details>
    </div>
  ),
};

export const MixedDirection: Story = {
  render: props => (
    <div className="w-[800px]">
      <Details {...props} columns={props.columns ?? { default: 4 }}>
        <DetailsItem>
          <DetailsItemLabel>Name</DetailsItemLabel>
          <DetailsItemValue>Amit Nigam</DetailsItemValue>
        </DetailsItem>
        <DetailsItem>
          <DetailsItemLabel>Role</DetailsItemLabel>
          <DetailsItemValue>Developer</DetailsItemValue>
        </DetailsItem>
        <DetailsItem>
          <DetailsItemLabel>Phone</DetailsItemLabel>
          <DetailsItemValue>+1 23 456 7890</DetailsItemValue>
        </DetailsItem>
        <DetailsItem>
          <DetailsItemLabel>Email</DetailsItemLabel>
          <DetailsItemValue>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              amit.nigam@airfi.aero
            </a>
          </DetailsItemValue>
        </DetailsItem>
        <DetailsItem orientation="horizontal" className="col-span-full">
          <DetailsItemLabel>Address</DetailsItemLabel>
          <DetailsItemValue>
            12/6, Apex Aparments, Block D, Flat 1108, Pune - 411015,
            Maharashtra, India
          </DetailsItemValue>
        </DetailsItem>
      </Details>
    </div>
  ),
};

export const Skeleton: Story = {
  render: ({ columns, ...props }) => (
    <div className="w-[800px]">
      <SkeletonProvider show>
        <Details columns={columns ?? { default: 4 }} {...props}>
          <DetailsItem>
            <DetailsItemLabel>Name</DetailsItemLabel>
            <DetailsItemValue>Amit Nigam</DetailsItemValue>
          </DetailsItem>
          <DetailsItem>
            <DetailsItemLabel>Phone</DetailsItemLabel>
            <DetailsItemValue>+1 23 456 7890</DetailsItemValue>
          </DetailsItem>
          <DetailsItem>
            <DetailsItemLabel>Email</DetailsItemLabel>
            <DetailsItemValue>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                amit.nigam@demo.com
              </a>
            </DetailsItemValue>
          </DetailsItem>
          <DetailsItem>
            <DetailsItemLabel>Blood Group</DetailsItemLabel>
            <DetailsItemValue>B +ve</DetailsItemValue>
          </DetailsItem>
          <DetailsItem>
            <DetailsItemLabel>Joining Date</DetailsItemLabel>
            <DetailsItemValue>05 Jan 2022</DetailsItemValue>
          </DetailsItem>
          <DetailsItem>
            <DetailsItemLabel>Vertical</DetailsItemLabel>
            <DetailsItemValue>Application</DetailsItemValue>
          </DetailsItem>
          <DetailsItem>
            <DetailsItemLabel>Project</DetailsItemLabel>
            <DetailsItemValue>Airfi Portal</DetailsItemValue>
          </DetailsItem>
          <DetailsItem>
            <DetailsItemLabel>Role</DetailsItemLabel>
            <DetailsItemValue>Front End Developer</DetailsItemValue>
          </DetailsItem>
        </Details>
      </SkeletonProvider>
    </div>
  ),
};

export const SkeletonMixedDirection: Story = {
  render: props => (
    <div className="w-[800px]">
      <SkeletonProvider show>
        <Details {...props} columns={props.columns ?? { default: 4 }}>
          <DetailsItem>
            <DetailsItemLabel>Name</DetailsItemLabel>
            <DetailsItemValue>Amit Nigam</DetailsItemValue>
          </DetailsItem>
          <DetailsItem>
            <DetailsItemLabel>Role</DetailsItemLabel>
            <DetailsItemValue>Developer</DetailsItemValue>
          </DetailsItem>
          <DetailsItem>
            <DetailsItemLabel>Phone</DetailsItemLabel>
            <DetailsItemValue>+1 23 456 7890</DetailsItemValue>
          </DetailsItem>
          <DetailsItem>
            <DetailsItemLabel>Email</DetailsItemLabel>
            <DetailsItemValue>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                amit.nigam@airfi.aero
              </a>
            </DetailsItemValue>
          </DetailsItem>
          <DetailsItem orientation="horizontal" className="col-span-full">
            <DetailsItemLabel>Address</DetailsItemLabel>
            <DetailsItemValue>
              12/6, Apex Aparments, Block D, Flat 1108, Pune - 411015,
              Maharashtra, India
            </DetailsItemValue>
          </DetailsItem>
        </Details>
      </SkeletonProvider>
    </div>
  ),
};
