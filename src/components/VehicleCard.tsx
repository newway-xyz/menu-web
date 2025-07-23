interface VehicleCardProps {
    name: string
    icon: string
    speed: number
    acceleration: number
    tags: string[]
}

export function VehicleCard({ name, icon, speed, acceleration, tags }: VehicleCardProps) {
    return (
        <div className="bg-white border-2 border-blue-200 rounded-lg p-6 max-w-md">
            <div className="text-center mb-4">
                <div className="text-4xl mb-2">{icon}</div>
                <h3 className="text-xl font-bold text-gray-800">{name}</h3>
            </div>

            <div className="space-y-3 mb-4">
                <div>
                    <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">VELOCIDADE</span>
                        <span className="text-gray-500">{speed}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-green-400 to-orange-400 h-2 rounded-full"
                            style={{ width: `${speed}%` }}
                        ></div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">ACELERAÇÃO</span>
                        <span className="text-gray-500">{acceleration}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-green-400 to-orange-400 h-2 rounded-full"
                            style={{ width: `${acceleration}%` }}
                        ></div>
                    </div>
                </div>
            </div>

            <div className="flex gap-2">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm ${tag === 'Base Game'
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-700'
                            }`}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
} 