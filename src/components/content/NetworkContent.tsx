
export function NetworkContent() {
    return (
        <div className="flex-1 p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Network Management</h1>
                <p className="text-gray-600">Gerencie sessões e jogadores</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow border">
                    <h3 className="font-semibold text-gray-800 mb-2">🌐 Session</h3>
                    <p className="text-gray-600 text-sm">Controle de sessão</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border">
                    <h3 className="font-semibold text-gray-800 mb-2">🕵️ Spoofing</h3>
                    <p className="text-gray-600 text-sm">Configurações de spoofing</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border">
                    <h3 className="font-semibold text-gray-800 mb-2">👥 Players</h3>
                    <p className="text-gray-600 text-sm">Gerenciar jogadores</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border">
                    <h3 className="font-semibold text-gray-800 mb-2">💾 Saved Players</h3>
                    <p className="text-gray-600 text-sm">Jogadores salvos</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border">
                    <h3 className="font-semibold text-gray-800 mb-2">🎲 Random Events</h3>
                    <p className="text-gray-600 text-sm">Eventos aleatórios</p>
                </div>
            </div>
        </div>
    )
} 