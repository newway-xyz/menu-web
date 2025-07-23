export function TeleportContent() {
    return (
        <div className="flex-1 p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Teleport System</h1>
                <p className="text-gray-600">Navegue rapidamente pelo mundo</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow border">
                    <h3 className="font-semibold text-gray-800 mb-2">📍 Main</h3>
                    <p className="text-gray-600 text-sm">Teleportes principais</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border">
                    <h3 className="font-semibold text-gray-800 mb-2">🎯 Custom Teleport</h3>
                    <p className="text-gray-600 text-sm">Crie teleportes personalizados</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border">
                    <h3 className="font-semibold text-gray-800 mb-2">📋 Teleport List</h3>
                    <p className="text-gray-600 text-sm">Lista de teleportes salvos</p>
                </div>
            </div>
        </div>
    )
} 