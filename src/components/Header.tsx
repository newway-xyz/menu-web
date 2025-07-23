interface HeaderProps {
    title: string
    version: string
}

export function Header({ title, version }: HeaderProps) {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div>
                    <h1 className="text-xl font-bold">{title}</h1>
                    <p className="text-blue-100 text-sm">{version}</p>
                </div>
            </div>
        </div>
    )
} 