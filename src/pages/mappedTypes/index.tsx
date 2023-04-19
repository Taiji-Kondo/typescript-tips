export default function MappedTypesPage() {
  return (
    <h1>Mapped Types Demo</h1>
  )
}

type ProductType = {
  name: string,
  price: number
  createdAt: Date,
}

type CustomErrorType = { code: number, message: string }

// Modelの型をもとにResponseの型情報を生成するMapped Typesを定義
type ResponseType<T> = {
  [Property in keyof T]: T[Property] | CustomErrorType;
}
// Product ModelのResponse型を生成
type ProductResponseType = ResponseType<ProductType>