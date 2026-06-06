export type Coffee = {
  id: number
  name: string
  price: number
  image: string
  description: string
  origin: string
  roast: string
  notes: string
  intensity: string
  pairing: string
}

export const coffees: Coffee[] = [
  {
    id: 1,
    name: "Cappuccino",
    price: 12.9,
    image: "/img/cappuccino.png",
    description: "Café cremoso com leite.",

    origin: "Minas Gerais, Brasil",
    roast: "Torra Média",
    notes: "Chocolate e Caramelo",
    intensity: "7/10",
    pairing: "Cookies e Bolos"
  },

  {
    id: 2,
    name: "Espresso",
    price: 8.5,
    image: "/img/espresso.png",
    description: "Café forte e clássico.",

    origin: "Cerrado Mineiro",
    roast: "Torra Escura",
    notes: "Chocolate Amargo e Castanhas",
    intensity: "10/10",
    pairing: "Croissant e Pão de Queijo"
  },

  {
    id: 3,
    name: "Latte",
    price: 14.9,
    image: "/img/latte.png",
    description: "Café suave com leite.",

    origin: "Sul de Minas",
    roast: "Torra Clara",
    notes: "Baunilha e Mel",
    intensity: "5/10",
    pairing: "Cheesecake e Donuts"
  }
]