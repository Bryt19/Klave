import type { RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/home/page"));
const Login = lazy(() => import("../pages/Login"));
const SignUp = lazy(() => import("../pages/SignUp"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Privacy = lazy(() => import("../pages/Privacy"));
const Terms = lazy(() => import("../pages/Terms"));
const Hipaa = lazy(() => import("../pages/Hipaa"));

function PageLoader() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-emerald-200 border-t-emerald-600 rounded-full animate-spin" />
        <span className="text-xs text-slate-400 font-medium">Loading...</span>
      </div>
    </div>
  );
}

function withSuspense(Component: React.LazyExoticComponent<React.FC>) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  );
}

const routes: RouteObject[] = [
  {
    path: "/",
    element: withSuspense(Home),
  },
  {
    path: "/login",
    element: withSuspense(Login),
  },
  {
    path: "/signup",
    element: withSuspense(SignUp),
  },
  {
    path: "/privacy",
    element: withSuspense(Privacy),
  },
  {
    path: "/terms",
    element: withSuspense(Terms),
  },
  {
    path: "/hipaa",
    element: withSuspense(Hipaa),
  },
  {
    path: "*",
    element: withSuspense(NotFound),
  },
];

export default routes;
