import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { DataTestId } from '@/components/ui/data-test-id';
import { SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar-menu';
import { TypographySpan } from '@/components/ui/typography';
import { useLoggedInUser } from '@/hooks/use-logged-in-user';
import React from 'react';
import { Link } from 'react-router';

const Me: React.FC = () => {
  const { data: user } = useLoggedInUser();

  return (
    <DataTestId value="me">
      <SidebarMenu>
        <SidebarMenuItem asChild>
          <Link to="/me">
            <Avatar>
              <AvatarFallback className="uppercase">
                {[
                  (user?.name ?? user?.email)
                    ?.split(' ')
                    .map(name => name.charAt(0))
                    .join(''),
                ]}
              </AvatarFallback>
            </Avatar>
            <TypographySpan>{user?.name}</TypographySpan>
          </Link>
        </SidebarMenuItem>
      </SidebarMenu>
    </DataTestId>
  );
};

export { Me };
