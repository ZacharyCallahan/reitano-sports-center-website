import Image from "next/image";

const ExperienceCard = ({ src, header, description }) => {
    return (
        <div className="w-96 bg-white shadow-lg rounded-lg overflow-hidden text-center">
            <div className="relative w-full h-64">
                <Image
                    src={src}
                    alt="Basketball Hoop"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{header}</h3>
                <p className="text-gray-600 text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default ExperienceCard;