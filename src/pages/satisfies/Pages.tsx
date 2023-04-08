import GenericsPage from "@/pages/generics";
import Home from "@/pages";
import {ReactNode} from "react";
import SatisfiesPage from "@/pages/satisfies/index";

export const PAGES = {
  home: {
    children: <Home />,
    path: '/',
    seo: {
      title: 'TS TIPS | Home',
    },
  },
  generics: {
    children: <GenericsPage />,
    path: '/generics',
    seo: {
      title: 'TS TIPS | Generics',
    },
  },
  satisfies: {
    children: <SatisfiesPage />,
    path: '/satisfies',
    seo: {
      title: 'TS TIPS | Satisfies',
    },
  },
} as const


type PageObjectType = {
  children: ReactNode
  path: string
  seo: {
    title: string
  }
}

export const TYPES_PAGES: Record<string, PageObjectType> = {
  home: {
    children: <Home />,
    path: '/',
    seo: {
      title: 'TS TIPS | Home',
    },
  },
  generics: {
    children: <GenericsPage />,
    path: '/generics',
    seo: {
      title: 'TS TIPS | Generics',
    },
  },
  satisfies: {
    children: <SatisfiesPage />,
    path: '/satisfies',
    seo: {
      title: 'TS TIPS | Satisfies',
    },
  },
}

export const SATISFIES_PAGES = {
  home: {
    children: <Home />,
    path: '/',
    seo: {
      title: 'TS TIPS | Home',
    },
  },
  generics: {
    children: <GenericsPage />,
    path: '/generics',
    seo: {
      title: 'TS TIPS | Generics',
    },
  },
  satisfies: {
    children: <SatisfiesPage />,
    path: '/satisfies',
    seo: {
      title: 'TS TIPS | Satisfies',
    },
  },
} satisfies Record<string, PageObjectType>