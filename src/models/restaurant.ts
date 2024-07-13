class Restaurant {
  id: number
  imagem: string
  infos?: string[]
  category: string
  title: string
  description: string
  rating: string
  star: string

  constructor(
    id: number,
    imagem: string,
    infos: string[],
    category: string,
    title: string,
    description: string,
    rating: string,
    star: string
  ) {
    this.id = id
    this.imagem = imagem
    this.infos = infos
    this.category = category
    this.title = title
    this.description = description
    this.rating = rating
    this.star = star
  }
}

export default Restaurant
