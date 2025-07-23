interface ActionButtonProps {
    icon: string
    color: "blue" | "red" | "yellow" | "green" | "gray"
    onClick?: () => void
    title?: string
}

export function ActionButton({ icon, color, onClick, title }: ActionButtonProps) {
    const colorClasses = {
        blue: "bg-blue-500 hover:bg-blue-600",
        red: "bg-red-500 hover:bg-red-600",
        yellow: "bg-yellow-500 hover:bg-yellow-600",
        green: "bg-green-500 hover:bg-green-600",
        gray: "bg-gray-500 hover:bg-gray-600"
    }

    return (
        <button
            onClick={onClick}
            title={title}
            className={`w-8 h-8 ${colorClasses[color]} text-white rounded-lg flex items-center justify-center transition-colors duration-200`}
        >
            <span className="text-sm">{icon}</span>
        </button>
    )
} 