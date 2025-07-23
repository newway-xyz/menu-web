export function SettingsContent() {
    return (
        <div className="flex-1 p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Settings</h1>
                <p className="text-gray-600">Configure suas preferências</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow border">
                    <h3 className="font-semibold text-gray-800 mb-2">⌨️ Hotkeys</h3>
                    <p className="text-gray-600 text-sm">Configurar atalhos de teclado</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border">
                    <h3 className="font-semibold text-gray-800 mb-2">🎨 GUI</h3>
                    <p className="text-gray-600 text-sm">Personalizar interface</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border">
                    <h3 className="font-semibold text-gray-800 mb-2">📜 Lua Scripts</h3>
                    <p className="text-gray-600 text-sm">Gerenciar scripts Lua</p>
                </div>
            </div>
        </div>
    )
} 