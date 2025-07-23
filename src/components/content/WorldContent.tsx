
export function WorldContent() {
    return (
        <div className="flex-1 p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">World Management</h1>
                <p className="text-gray-600">Controle o mundo ao seu redor</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow border">
                    <h3 className="font-semibold text-gray-800 mb-2">🌍 Main</h3>
                    <p className="text-gray-600 text-sm">Configurações principais do mundo</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border">
                    <h3 className="font-semibold text-gray-800 mb-2">🏗️ IPLs Group</h3>
                    <p className="text-gray-600 text-sm">Gerenciar IPLs do mundo</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border">
                    <h3 className="font-semibold text-gray-800 mb-2">👤 Spawn Peds</h3>
                    <p className="text-gray-600 text-sm">Controlar NPCs no mundo</p>
                </div>
            </div>
        </div>
    )
} 