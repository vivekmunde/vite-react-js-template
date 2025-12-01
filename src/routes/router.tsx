import { PageLoading } from '@/components/ui/page-loading';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { OrganizationLayout } from './[organizationCode]/layout';
import { OrganizationPagesLayout } from './[organizationCode]/pages/layout';
import { RootLayout } from './layout';
import { SystemLayout } from './system/layout';
import { SystemPagesLayout } from './system/pages/layout';
import { OrphanUsersPage } from './system/pages/orphan-users/page';

const LogoutPage = lazy(() =>
  import('./authentication/logout/page').then(m => ({ default: m.LogoutPage }))
);
const MePage = lazy(() =>
  import('./me/page').then(m => ({ default: m.MePage }))
);
const SwitchViewPage = lazy(() =>
  import('./switch-view/page').then(m => ({ default: m.SwitchViewPage }))
);
const SystemHomePage = lazy(() =>
  import('./system/home/page').then(m => ({ default: m.HomePage }))
);
const SystemOrganizationsPage = lazy(() =>
  import('./system/pages/organizations/page').then(m => ({
    default: m.SystemOrganizationsPage,
  }))
);
const SystemRolesPage = lazy(() =>
  import('./system/pages/roles/page').then(m => ({
    default: m.SystemRolesPage,
  }))
);
const SystemUsersPage = lazy(() =>
  import('./system/pages/users/page').then(m => ({
    default: m.SystemUsersPage,
  }))
);
const SystemApiErrorsPage = lazy(() =>
  import('./system/pages/errors/api/page').then(m => ({
    default: m.SystemApiErrorsPage,
  }))
);
const SystemUiErrorsPage = lazy(() =>
  import('./system/pages/errors/ui/page').then(m => ({
    default: m.SystemUiErrorsPage,
  }))
);

const OrganizationHomePage = lazy(() =>
  import('./[organizationCode]/home/page').then(m => ({ default: m.HomePage }))
);
const OrganizationRolesPage = lazy(() =>
  import('./[organizationCode]/pages/roles/page').then(m => ({
    default: m.OrganizationRolesPage,
  }))
);
const OrganizationUsersPage = lazy(() =>
  import('./[organizationCode]/pages/users/page').then(m => ({
    default: m.OrganizationUsersPage,
  }))
);
const OrganizationProjectsPage = lazy(() =>
  import('./[organizationCode]/pages/projects/page').then(m => ({
    default: m.OrganizationProjectsPage,
  }))
);

const PageFallback = () => <PageLoading />;

const withSuspense = (component: React.ReactNode) => (
  <Suspense fallback={<PageFallback />}>{component}</Suspense>
);

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="login" element={<Navigate to="/" replace />} />
        <Route path="logout" element={withSuspense(<LogoutPage />)} />
        <Route path="me" element={withSuspense(<MePage />)} />
        <Route path="switch-view" element={withSuspense(<SwitchViewPage />)} />
        <Route path="system" element={<SystemLayout />}>
          <Route index element={<Navigate to="/system/home" replace />} />
          <Route path="home" element={withSuspense(<SystemHomePage />)} />
          <Route element={<SystemPagesLayout />}>
            <Route
              path="organizations"
              element={withSuspense(<SystemOrganizationsPage />)}
            />
            <Route path="roles" element={withSuspense(<SystemRolesPage />)} />
            <Route path="users" element={withSuspense(<SystemUsersPage />)} />
            <Route
              path="orphan-users"
              element={withSuspense(<OrphanUsersPage />)}
            />
            <Route
              path="errors/api"
              element={withSuspense(<SystemApiErrorsPage />)}
            />
            <Route
              path="errors/ui"
              element={withSuspense(<SystemUiErrorsPage />)}
            />
          </Route>
        </Route>
        <Route path=":organizationCode" element={<OrganizationLayout />}>
          <Route
            index
            element={<Navigate to="/:organizationCode/home" replace />}
          />
          <Route path="home" element={withSuspense(<OrganizationHomePage />)} />
          <Route element={<OrganizationPagesLayout />}>
            <Route
              path="roles"
              element={withSuspense(<OrganizationRolesPage />)}
            />
            <Route
              path="users"
              element={withSuspense(<OrganizationUsersPage />)}
            />
            <Route
              path="projects"
              element={withSuspense(<OrganizationProjectsPage />)}
            />
          </Route>
        </Route>
        <Route index element={<Navigate to="/switch-view" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export { Router };
