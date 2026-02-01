export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    date: string;
}

export const products: Product[] = [
    {
        id: 1,
        title: "Hamaca Urdida a Mano",
        description: "Hamaca matrimonial tradicional yucateca tejida con hilo de algodón crudo para máxima frescura.",
        price: 1250,
        category: "textil",
        date: "2024-01-15"
    },
    {
        id: 2,
        title: "Huipil Bordado Tradicional",
        description: "Vestido blanco con coloridos bordados de flores en punto de cruz, hecho por artesanas locales.",
        price: 850,
        category: "textil",
        date: "2024-02-10"
    },
    {
        id: 3,
        title: "Máscara de Guerrero Jaguar",
        description: "Máscara tallada en madera de cedro y pintada a mano, representando la fuerza del guerrero maya.",
        price: 600,
        category: "madera",
        date: "2024-03-05"
    },
    {
        id: 4,
        title: "Calendario Maya de Pared",
        description: "Relieve detallado del calendario Haab fabricado en resina con acabado de piedra antigua.",
        price: 450,
        category: "decoracion",
        date: "2024-01-20"
    },
    {
        id: 5,
        title: "Guayabera de Lino Fina",
        description: "Elegante camisa de lino con alforzas verticales y bordados discretos, ideal para climas cálidos.",
        price: 1600,
        category: "textil",
        date: "2024-02-28"
    },
    {
        id: 6,
        title: "Vasija Policromada Tipo Códice",
        description: "Réplica de cerámica del periodo clásico con glifos mayas y escenas mitológicas.",
        price: 350,
        category: "barro",
        date: "2024-03-15"
    },
    {
        id: 7,
        title: "Collar de Jadeita y Plata",
        description: "Joyería artesanal que combina la piedra sagrada del jade con engarces de plata ley .925.",
        price: 2100,
        category: "joyeria",
        date: "2024-01-05"
    },
    {
        id: 8,
        title: "Sombrero de Jipi Japa",
        description: "Sombrero fino tejido a mano en cuevas húmedas de Bécal para mantener la flexibilidad de la fibra.",
        price: 980,
        category: "textil",
        date: "2024-02-15"
    },
    {
        id: 9,
        title: "Jícara Labrada",
        description: "Recipiente natural grabado artesanalmente con motivos de flora y fauna de la selva maya.",
        price: 150,
        category: "artesania",
        date: "2024-03-01"
    },
    {
        id: 10,
        title: "Bolso de Henequén",
        description: "Bolso resistente y ecológico hecho con la fibra del agave, conocida como el oro verde.",
        price: 280,
        category: "textil",
        date: "2024-01-12"
    },
    {
        id: 11,
        title: "Escultura de Kukulkán",
        description: "Figura de la serpiente emplumada tallada detalladamente en madera tropical dura.",
        price: 1800,
        category: "madera",
        date: "2024-03-20"
    },
    {
        id: 12,
        title: "Camino de Mesa de Telar",
        description: "Textil decorativo tejido en telar de cintura utilizando tintes naturales de la región.",
        price: 550,
        category: "textil",
        date: "2024-02-05"
    },
    {
        id: 13,
        title: "Ocarina Zoomorfa de Barro",
        description: "Instrumento de viento prehispánico hecho de barro con forma de animal sagrado.",
        price: 120,
        category: "barro",
        date: "2024-03-10"
    },
    {
        id: 14,
        title: "Aretes de Filigrana",
        description: "Trabajo fino de joyería yucateca en plata, formando patrones delicados y ligeros.",
        price: 750,
        category: "joyeria",
        date: "2024-01-25"
    },
    {
        id: 15,
        title: "Cuchillo Ceremonial de Obsidiana",
        description: "Réplica decorativa con hoja de vidrio volcánico negro y mango de hueso tallado.",
        price: 1100,
        category: "artesania",
        date: "2024-02-20"
    }
];