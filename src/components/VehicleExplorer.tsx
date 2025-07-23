import { ViewModeToggle } from "./ViewModeToggle"
import { VehicleCard } from "./VehicleCard"

interface VehicleExplorerProps {
    viewMode: string
    onViewModeChange: (mode: string) => void
}

export function VehicleExplorer({ viewMode, onViewModeChange }: VehicleExplorerProps) {
    const vehicleData = {
        name: "Grotti Brioso",
        icon: "🚗",
        speed: 85,
        acceleration: 78,
        tags: ["Compacto", "Base Game"]
    }

    return (
        <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Explorador de Veículos</h1>
                    <p className="text-gray-600">Selecione e personalize seu veículo ideal</p>
                </div>

                <ViewModeToggle viewMode={viewMode} onViewModeChange={onViewModeChange} />
            </div>

            <VehicleCard {...vehicleData} />
        </div>
    )
} 