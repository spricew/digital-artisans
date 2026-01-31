interface CardProps {
    title: string;
    description: string;
    price: number;
}

export default function PrimaryCard({ title, description, price } : CardProps) {
    return (
        <div className="flex flex-col gap-3 w-56">
            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-primaryContainer">
                <img src="https://solopati.wordpress.com/wp-content/uploads/2014/11/ceramica-maya.jpg"
                alt="imagen" className="w-full h-full object-center object-cover" />
            </div>

            <div className="flex flex-col gap-2 w-full">
                <span className="text-2xl font-semibold line-clamp-3">{title}</span>
                <p className="text-base font-light line-clamp-2">{description}</p>
                <span className="text-xl font-medium">${price}</span>
            </div>
        </div>
    );
}