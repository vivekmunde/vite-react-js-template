import {
  Layout,
  LayoutContent,
  LayoutContentBody,
  LayoutContentFooter,
  LayoutContentHeader,
  LayoutSidebar,
  LayoutSidebarBody,
  LayoutSidebarFooter,
  LayoutSidebarHeader,
} from '@/components/ui/layout';
import { Repeat } from '@/components/ui/repeat';
import {
  Screen,
  ScreenContent,
  ScreenFooter,
  ScreenHeader,
  ScreenTitle,
} from '@/components/ui/screen';
import type { Meta, StoryObj } from '@storybook/react-vite';

const L: React.FC<{
  stickyHeader?: boolean;
  stickyFooter?: boolean;
}> = () => null;

const meta = {
  title: 'Components/UI/Layout',
  component: L,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {
    stickyHeader: {
      control: { type: 'boolean' },
    },
    stickyFooter: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof L>;

export default meta;
type Story = StoryObj<typeof meta>;

const SidebarHeaderContent = () => (
  <div className="flex flex-row justify-between items-center gap-3">
    <div className="bg-accent rounded size-7" />
  </div>
);

const SidebarBodyContent = () => (
  <div className="flex flex-col gap-3">
    <Repeat length={7}>
      <div className="flex flex-col gap-3 pb-3">
        <div
          className="bg-accent rounded h-4"
          style={{ width: `${Math.random() * (80 - 30) + 30}%` }}
        />
        <Repeat length={Math.random() * (10 - 5) + 5}>
          <div
            className="ml-3 bg-accent rounded h-4"
            style={{ width: `${Math.random() * (80 - 30) + 30}%` }}
          />
        </Repeat>
      </div>
    </Repeat>
  </div>
);

const SidebarFooterContent = () => (
  <div className="flex flex-row items-center gap-3">
    <div className="bg-accent rounded-full size-7" />
    <div className="bg-accent rounded h-4 w-24" />
  </div>
);

const ContentHeaderContent = () => (
  <div className="flex flex-row justify-between items-center gap-3">
    <div className="flex flex-row justify-between items-center gap-3">
      <div className="bg-accent rounded h-7 w-24" />
      <div className="bg-accent rounded h-7 w-24" />
      <div className="bg-accent rounded h-7 w-24" />
    </div>
    <div className="bg-accent rounded-full size-7" />
  </div>
);

const ContentBodyContent: React.FC<{
  stickyHeader?: boolean;
  stickyFooter?: boolean;
}> = ({ stickyHeader, stickyFooter }) => (
  <Screen>
    <ScreenHeader sticky={stickyHeader}>
      <div className="flex flex-row justify-between items-center gap-3">
        <ScreenTitle>Title</ScreenTitle>
        <div className="flex flex-row justify-between items-center gap-2">
          <div className="bg-accent rounded h-10 w-48" />
          <div className="bg-accent rounded size-10" />
        </div>
      </div>
    </ScreenHeader>
    <ScreenContent>
      <div className="flex flex-col gap-3">
        <div className="bg-accent rounded h-80" />
        <div className="flex flex-row gap-3">
          <div className="bg-accent rounded h-80 flex-1" />
          <div className="bg-accent rounded h-80 flex-1" />
        </div>
        <div className="flex flex-row gap-3">
          <div className="bg-accent rounded h-80 flex-1" />
          <div className="bg-accent rounded h-80 flex-1" />
          <div className="bg-accent rounded h-80 flex-1" />
        </div>
      </div>
    </ScreenContent>
    <ScreenFooter sticky={stickyFooter}>
      <div className="flex flex-row justify-between items-center gap-3">
        <div className="bg-accent rounded h-4 w-40" />
        <div className="flex flex-row gap-3">
          <div className="bg-accent rounded h-4 w-20" />
          <div className="bg-accent rounded h-4 w-20" />
        </div>
      </div>
    </ScreenFooter>
  </Screen>
);

const ContentFooterContent = () => (
  <div className="flex flex-row justify-between items-center gap-3">
    <div className="bg-accent rounded h-7 w-48" />
    <div className="bg-accent rounded-full h-4 w-10" />
  </div>
);

export const _Story: Story = {
  args: {},
  render: props => {
    return (
      <Layout>
        <LayoutContent>
          <LayoutContentHeader sticky={props.stickyHeader}>
            <ContentHeaderContent />
          </LayoutContentHeader>
          <LayoutContentBody>
            <ContentBodyContent />
          </LayoutContentBody>
          <LayoutContentFooter sticky={props.stickyFooter}>
            <ContentFooterContent />
          </LayoutContentFooter>
        </LayoutContent>
      </Layout>
    );
  },
};

export const SidebarLeft: Story = {
  args: {},
  render: props => {
    return (
      <Layout widths={['240px', '1fr']}>
        <LayoutSidebar side="left">
          <LayoutSidebarHeader sticky={props.stickyHeader}>
            <SidebarHeaderContent />
          </LayoutSidebarHeader>
          <LayoutSidebarBody>
            <SidebarBodyContent />
          </LayoutSidebarBody>
          <LayoutSidebarFooter sticky={props.stickyFooter}>
            <SidebarFooterContent />
          </LayoutSidebarFooter>
        </LayoutSidebar>
        <LayoutContent>
          <LayoutContentHeader sticky={props.stickyHeader}>
            <ContentHeaderContent />
          </LayoutContentHeader>
          <LayoutContentBody>
            <ContentBodyContent />
          </LayoutContentBody>
          <LayoutContentFooter sticky={props.stickyFooter}>
            <ContentFooterContent />
          </LayoutContentFooter>
        </LayoutContent>
      </Layout>
    );
  },
};

export const SidebarRight: Story = {
  args: {},
  render: props => {
    return (
      <Layout widths={['1fr', '240px']}>
        <LayoutContent>
          <LayoutContentHeader sticky={props.stickyHeader}>
            <ContentHeaderContent />
          </LayoutContentHeader>
          <LayoutContentBody>
            <ContentBodyContent />
          </LayoutContentBody>
          <LayoutContentFooter sticky={props.stickyFooter}>
            <ContentFooterContent />
          </LayoutContentFooter>
        </LayoutContent>
        <LayoutSidebar side="right">
          <LayoutSidebarHeader sticky={props.stickyHeader}>
            <SidebarHeaderContent />
          </LayoutSidebarHeader>
          <LayoutSidebarBody>
            <SidebarBodyContent />
          </LayoutSidebarBody>
          <LayoutSidebarFooter sticky={props.stickyFooter}>
            <SidebarFooterContent />
          </LayoutSidebarFooter>
        </LayoutSidebar>
      </Layout>
    );
  },
};

export const SidebarsLeftRight: Story = {
  args: {},
  render: props => {
    return (
      <Layout widths={['240px', '1fr', '240px']}>
        <LayoutSidebar side="left">
          <LayoutSidebarHeader sticky={props.stickyHeader}>
            <SidebarHeaderContent />
          </LayoutSidebarHeader>
          <LayoutSidebarBody>
            <SidebarBodyContent />
          </LayoutSidebarBody>
          <LayoutSidebarFooter sticky={props.stickyFooter}>
            <SidebarFooterContent />
          </LayoutSidebarFooter>
        </LayoutSidebar>
        <LayoutContent>
          <LayoutContentHeader sticky={props.stickyHeader}>
            <ContentHeaderContent />
          </LayoutContentHeader>
          <LayoutContentBody>
            <ContentBodyContent />
          </LayoutContentBody>
          <LayoutContentFooter sticky={props.stickyFooter}>
            <ContentFooterContent />
          </LayoutContentFooter>
        </LayoutContent>
        <LayoutSidebar side="right">
          <LayoutSidebarHeader sticky={props.stickyHeader}>
            <SidebarHeaderContent />
          </LayoutSidebarHeader>
          <LayoutSidebarBody>
            <SidebarBodyContent />
          </LayoutSidebarBody>
          <LayoutSidebarFooter sticky={props.stickyFooter}>
            <SidebarFooterContent />
          </LayoutSidebarFooter>
        </LayoutSidebar>
      </Layout>
    );
  },
};

export const SidebarsMultiple: Story = {
  args: {},
  render: props => {
    return (
      <Layout widths={['140px', '200px', '1fr', '200px', '140px']}>
        <LayoutSidebar side="left">
          <LayoutSidebarHeader sticky={props.stickyHeader}>
            <SidebarHeaderContent />
          </LayoutSidebarHeader>
          <LayoutSidebarBody>
            <SidebarBodyContent />
          </LayoutSidebarBody>
          <LayoutSidebarFooter sticky={props.stickyFooter}>
            <SidebarFooterContent />
          </LayoutSidebarFooter>
        </LayoutSidebar>
        <LayoutSidebar side="left">
          <LayoutSidebarHeader sticky={props.stickyHeader}>
            <SidebarHeaderContent />
          </LayoutSidebarHeader>
          <LayoutSidebarBody>
            <SidebarBodyContent />
          </LayoutSidebarBody>
          <LayoutSidebarFooter sticky={props.stickyFooter}>
            <SidebarFooterContent />
          </LayoutSidebarFooter>
        </LayoutSidebar>
        <LayoutContent>
          <LayoutContentHeader sticky={props.stickyHeader}>
            <ContentHeaderContent />
          </LayoutContentHeader>
          <LayoutContentBody>
            <ContentBodyContent />
          </LayoutContentBody>
          <LayoutContentFooter sticky={props.stickyFooter}>
            <ContentFooterContent />
          </LayoutContentFooter>
        </LayoutContent>
        <LayoutSidebar side="right">
          <LayoutSidebarHeader sticky={props.stickyHeader}>
            <SidebarHeaderContent />
          </LayoutSidebarHeader>
          <LayoutSidebarBody>
            <SidebarBodyContent />
          </LayoutSidebarBody>
          <LayoutSidebarFooter sticky={props.stickyFooter}>
            <SidebarFooterContent />
          </LayoutSidebarFooter>
        </LayoutSidebar>
        <LayoutSidebar side="right">
          <LayoutSidebarHeader sticky={props.stickyHeader}>
            <SidebarHeaderContent />
          </LayoutSidebarHeader>
          <LayoutSidebarBody>
            <SidebarBodyContent />
          </LayoutSidebarBody>
          <LayoutSidebarFooter sticky={props.stickyFooter}>
            <SidebarFooterContent />
          </LayoutSidebarFooter>
        </LayoutSidebar>
      </Layout>
    );
  },
};

export const LayoutWithStickyScreen: Story = {
  args: {},
  render: () => {
    return (
      <Layout widths={['240px', '1fr']}>
        <LayoutSidebar side="left">
          <LayoutSidebarHeader sticky>
            <SidebarHeaderContent />
          </LayoutSidebarHeader>
          <LayoutSidebarBody>
            <SidebarBodyContent />
          </LayoutSidebarBody>
          <LayoutSidebarFooter sticky>
            <SidebarFooterContent />
          </LayoutSidebarFooter>
        </LayoutSidebar>
        <LayoutContent>
          <LayoutContentHeader sticky>
            <ContentHeaderContent />
          </LayoutContentHeader>
          <LayoutContentBody>
            <Screen>
              <ScreenHeader sticky>
                <div className="flex flex-row justify-between items-center gap-3">
                  <ScreenTitle>Title</ScreenTitle>
                  <div className="flex flex-row justify-between items-center gap-2">
                    <div className="bg-accent rounded h-10 w-48" />
                    <div className="bg-accent rounded size-10" />
                  </div>
                </div>
              </ScreenHeader>
              <ScreenContent>
                <div className="flex flex-col gap-3">
                  <div className="bg-accent rounded h-80" />
                  <div className="flex flex-row gap-3">
                    <div className="bg-accent rounded h-80 flex-1" />
                    <div className="bg-accent rounded h-80 flex-1" />
                  </div>
                  <div className="flex flex-row gap-3">
                    <div className="bg-accent rounded h-80 flex-1" />
                    <div className="bg-accent rounded h-80 flex-1" />
                    <div className="bg-accent rounded h-80 flex-1" />
                  </div>
                </div>
              </ScreenContent>
              <ScreenFooter sticky>
                <div className="flex flex-row justify-between items-center gap-3">
                  <div className="bg-accent rounded h-4 w-40" />
                  <div className="flex flex-row gap-3">
                    <div className="bg-accent rounded h-4 w-20" />
                    <div className="bg-accent rounded h-4 w-20" />
                  </div>
                </div>
              </ScreenFooter>
            </Screen>
          </LayoutContentBody>
          <LayoutContentFooter sticky>
            <ContentFooterContent />
          </LayoutContentFooter>
        </LayoutContent>
      </Layout>
    );
  },
};
