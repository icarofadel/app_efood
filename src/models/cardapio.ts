class Cardapio {
  id: number
  imagem: string
  title: string
  description: string
  button: string

  constructor(
    id: number,
    imagem: string,
    title: string,
    desciprion: string,
    button: string
  ) {
    this.id = id
    this.imagem = imagem
    this.title = title
    this.description = desciprion
    this.button = button
  }
}

export default Cardapio
