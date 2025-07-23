

export function VehicleContent() {

    return (
        <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Vehicle Management</h1>
                    <p className="text-gray-600">Selecione e personalize seu veículo ideal</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Área principal de conteúdo */}
                <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-lg shadow border">
                            <h3 className="font-semibold text-gray-800 mb-2">🚗 Spawners Group</h3>
                            <p className="text-gray-600 text-sm">Grupos de spawners de veículos</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow border">
                            <h3 className="font-semibold text-gray-800 mb-2">🔧 Vehicle Editor</h3>
                            <p className="text-gray-600 text-sm">Editor de veículos</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow border">
                            <h3 className="font-semibold text-gray-800 mb-2">💾 Saved Vehicles</h3>
                            <p className="text-gray-600 text-sm">Veículos salvos</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow border">
                            <h3 className="font-semibold text-gray-800 mb-2">📄 XML Vehicles</h3>
                            <p className="text-gray-600 text-sm">Veículos XML</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow border">
                            <h3 className="font-semibold text-gray-800 mb-2">👤 Personal Vehicle</h3>
                            <p className="text-gray-600 text-sm">Veículo pessoal</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow border">
                            <h3 className="font-semibold text-gray-800 mb-2">🚙 Vehicle</h3>
                            <p className="text-gray-600 text-sm">Gerenciar veículos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 