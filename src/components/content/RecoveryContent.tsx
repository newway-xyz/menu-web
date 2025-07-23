
export function RecoveryContent() {
    return (
        <div className="flex-1 p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Recovery Tools</h1>
                <p className="text-gray-600">Ferramentas de recuperação e modificação</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow border">
                    <h3 className="font-semibold text-gray-800 mb-2">💰 Transactions</h3>
                    <p className="text-gray-600 text-sm">Gerenciar transações</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border">
                    <h3 className="font-semibold text-gray-800 mb-2">🏦 Heist Modifier</h3>
                    <p className="text-gray-600 text-sm">Modificar heists</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border">
                    <h3 className="font-semibold text-gray-800 mb-2">📊 Stat Editor</h3>
                    <p className="text-gray-600 text-sm">Editor de estatísticas</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border">
                    <h3 className="font-semibold text-gray-800 mb-2">🔄 Resupplier</h3>
                    <p className="text-gray-600 text-sm">Reabastecimento automático</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border">
                    <h3 className="font-semibold text-gray-800 mb-2">📅 Daily Activities</h3>
                    <p className="text-gray-600 text-sm">Atividades diárias</p>
                </div>
            </div>
        </div>
    )
} 