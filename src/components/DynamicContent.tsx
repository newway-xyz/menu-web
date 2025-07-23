import {
    SelfContent,
    TeleportContent,
    VehicleContent,
    NetworkContent,
    WorldContent,
    RecoveryContent,
    SettingsContent
} from "./content"
import { getMainCategory } from "../utils/categoryUtils"

interface DynamicContentProps {
    selectedCategory: string
}

export function DynamicContent({ selectedCategory }: DynamicContentProps) {
    const mainCategory = getMainCategory(selectedCategory)

    // Renderizar o componente apropriado baseado na categoria principal
    switch (mainCategory) {
        case 'self':
            return <SelfContent />
        case 'teleport':
            return <TeleportContent />
        case 'vehicles':
            return <VehicleContent />
        case 'network':
            return <NetworkContent />
        case 'world':
            return <WorldContent />
        case 'recovery':
            return <RecoveryContent />
        case 'settings':
            return <SettingsContent />
        default:
            return (
                <div className="flex-1 p-6 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-800 mb-2">Categoria não encontrada</h1>
                        <p className="text-gray-600">Selecione uma categoria válida no menu lateral</p>
                    </div>
                </div>
            )
    }
} 