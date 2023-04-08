import {PAGES, SATISFIES_AS_CONST_PAGES, SATISFIES_PAGES, TYPES_PAGES} from "@/pages/satisfies/Pages";

export default function SatisfiesPage() {
  // それぞれの型情報を見てみる↓
  const normal = PAGES
  const typeAnnotation = TYPES_PAGES
  const satisfies = SATISFIES_PAGES
  const satisfiesAsConst = SATISFIES_AS_CONST_PAGES

  return (
    <h1>Satisfies Demo</h1>
  )
}