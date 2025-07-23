import { Button } from "./Button"

interface VehicleDetailsProps {
    vehicleName: string
    spawnInside: boolean
    maxUpgrades: boolean
    customPlate: boolean
    onSpawnInsideChange: (checked: boolean) => void
    onMaxUpgradesChange: (checked: boolean) => void
    onCustomPlateChange: (checked: boolean) => void
}

export function VehicleDetails({
    vehicleName,
    spawnInside,
    maxUpgrades,
    customPlate,
    onSpawnInsideChange,
    onMaxUpgradesChange,
    onCustomPlateChange
}: VehicleDetailsProps) {
    return (
        <div className="w-80 bg-gray-50 border-l p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">{vehicleName}</h2>

            <div className="space-y-3 mb-6">
                <Button
                    icon="⭐"
                    text="Favoritar"
                    variant="secondary"
                />
                <Button
                    icon="🚗"
                    text="Spawn Veículo"
                    variant="primary"
                />
            </div>

            <div>
                <h3 className="font-semibold text-gray-800 mb-3">Modificações</h3>
                <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={spawnInside}
                            onChange={(e) => onSpawnInsideChange(e.target.checked)}
                            className="w-4 h-4 text-blue-600 rounded"
                        />
                        <span className="text-gray-700">Spawn Inside Vehicle</span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={maxUpgrades}
                            onChange={(e) => onMaxUpgradesChange(e.target.checked)}
                            className="w-4 h-4 text-blue-600 rounded"
                        />
                        <span className="text-gray-700">Maximum Upgrades</span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={customPlate}
                            onChange={(e) => onCustomPlateChange(e.target.checked)}
                            className="w-4 h-4 text-blue-600 rounded"
                        />
                        <span className="text-gray-700">Custom License Plate</span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 rounded"
                        />
                        <span className="text-gray-700">Random Color</span>
                    </label>
                </div>
            </div>
        </div>
    )
} 