export type Coffee = {
  id: number
  name: string
  price: number
  image: string
  description: string
}

export const coffees: Coffee[] = [
  {
    id: 1,
    name: "Cappuccino",
    price: 12.9,
    image: "/img/cappuccino.png",
    description: "Café cremoso com leite."
  },
  {
    id: 2,
    name: "Espresso",
    price: 8.5,
    image: "/img/espresso.png",
    description: "Café forte e clássico."
  },
  {
    id: 3,
    name: "Latte",
    price: 14.9,
    image: "/img/latte.png",
    description: "Café suave com leite."
  }
]