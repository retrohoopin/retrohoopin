export type Product = {
    name: string
    slug: string
    price: string
    images: string[]
    description: string
    sizes: string[]
    category: string
    available: boolean
    colors: string[]  // <-- added this
}

export const products: Product[] = [
    {
        name: "REBOUND KING – Boxy Fit Tee",
        slug: "afro-kobe-black",
        price: "₹1299",
        category: "T-Shirts",
        available: true,
        images: ["/REBOUND KING FRONT.jpeg",
            "/REBOUND KING BACK.jpeg",
            "/REBOUND KING.jpeg"
        ],
        description:
            `Designed for those who dominate the game beyond scoring. The REBOUND KING tee features a bold front graphic, statement back print, and a relaxed boxy fit for a strong streetwear silhouette. Made from premium heavyweight cotton with a vintage washed finish, built for basketball culture on and off the court. 
            Details -
            Premium heavyweight cotton
            Boxy, oversized streetwear fit
            Vintage wash finish
            Front & back statement graphics

            Not about points.About presence 🏀`,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["black"],
    },
    {
        name: "GUNS AND ROSES – Boxy Fit Tee",
        slug: "afro-kobe-white",
        price: "₹1299",
        category: "T-Shirts",
        available: true,
        images: ["/GUNS AND ROSES FRONT.jpeg",
            "/GUNS AND ROSES BACK.jpeg",
            "/GUNS AND ROSES.jpeg"
        ],
        description:
            `Where street energy meets basketball culture. Crafted from premium heavyweight cotton with a vintage wash, this boxy oversized tee delivers a bold, structured feel. Minimal front branding keeps it clean, while the statement back graphic speaks rebellion, power, and love for the game.
Built for ballers.Styled for the streets.

            Details
•Premium heavyweight cotton
•Boxy, oversized fit
•Vintage washed finish
•Bold back graphic, minimal front branding
•Streetwear × basketball essential

Built for the streets.Rooted in the game. 🏀🌹🔫`,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["white"],
    },
    // {
    //     name: "Le King",
    //     slug: "le-king-black",
    //     price: "₹1299",
    //     category: "T-Shirts",
    //     available: true,
    //     images: ["/LEBRON BLACK FRONT 1.jpg",
    //         "/LEBRON BLACK BACK.jpg",
    //     ],
    //     description:
    //         "Le King represents dominance on and off the court. Built for hoopers who rule the game.",
    //     sizes: ["S", "M", "L", "XL", "XXL"],
    //     colors: ["black"],
    // },
    // {
    //     name: "Le King",
    //     slug: "le-king-white",
    //     price: "₹1299",
    //     category: "T-Shirts",
    //     available: true,
    //     images: ["/LEBRON WHITE FRONT 1.jpg",
    //         "/LEBRON WHITE BACK.jpg",
    //     ],
    //     description:
    //         "Le King represents dominance on and off the court. Built for hoopers who rule the game.",
    //     sizes: ["S", "M", "L", "XL", "XXL"],
    //     colors: ["white"],
    // },
]
