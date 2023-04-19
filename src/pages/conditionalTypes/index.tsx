// ReturnTypeのデモ
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
const add = (a: number, b: number) => a + b

type AddReturnType = ReturnType<typeof add> // number

// 1. `ReturnType`の`Generics`として`(a: number, b: number) => number`型の関数を受け取る
// 2. 受け取った関数が`ConditionalType`の条件にマッチするため、戻り値である`number`が`R`にキャプチャされ返却

export default function InferPage() {
  return (
    <h1>Infer Demo</h1>
  )
}