interface ToggleButtonProps {
    icon: string
    isActive?: boolean
    onClick?: () => void
    title?: string
}

export function ToggleButton({ icon, isActive = false, onClick, title }: ToggleButtonProps) {
    const baseClasses = "w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200"
    const activeClasses = isActive
        ? "bg-blue-500 text-white"
        : "bg-gray-200 text-gray-600 hover:bg-gray-300"

    return (
        <button
            onClick={onClick}
            title={title}
            className={`${baseClasses} ${activeClasses}`}
        >
            <span className="text-sm">{icon}</span>
        </button>
    )
} 