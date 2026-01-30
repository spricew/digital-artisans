interface CardProps {
    title: string;
    description: string;
    price: number;
}

export default function PrimaryCard({ title, description, price } : CardProps) {
    return (
        <div className="flex flex-col gap-3 w-56">
            <div className="w-full aspect-square rounded-2xl bg-primaryContainer">
                {/* imagen */}
            </div>

            <div className="flex flex-col gap-2 w-full">
                <span className="text-2xl font-semibold line-clamp-3">{title}</span>
                <p className="text-base font-light line-clamp-2">{description}</p>
                <span className="text-xl font-medium">${price}</span>
            </div>
        </div>
    );
}