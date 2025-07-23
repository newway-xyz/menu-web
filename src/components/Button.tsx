interface ButtonProps {
    icon?: string
    text: string
    variant?: "primary" | "secondary" | "ghost" | "danger"
    size?: "sm" | "md" | "lg"
    onClick?: () => void
    disabled?: boolean
    fullWidth?: boolean
    loading?: boolean
}

export function Button({
    icon,
    text,
    variant = "primary",
    size = "md",
    onClick,
    disabled = false,
    fullWidth = false,
    loading = false
}: ButtonProps) {
    const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"

    const sizeClasses = {
        sm: "px-3 py-2 text-sm gap-2",
        md: "px-4 py-2.5 text-sm gap-2.5",
        lg: "px-6 py-3 text-base gap-3"
    }

    const variantClasses = {
        primary: "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 focus:ring-blue-500 shadow-md hover:shadow-lg",
        secondary: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 focus:ring-gray-500 shadow-sm",
        ghost: "text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-500",
        danger: "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 focus:ring-red-500 shadow-md hover:shadow-lg"
    }

    const widthClass = fullWidth ? "w-full" : ""

    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass}`}
        >
            {loading && (
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            )}
            {!loading && icon && (
                <span className="text-lg leading-none">{icon}</span>
            )}
            <span className={loading ? "ml-2" : ""}>{text}</span>
        </button>
    )
}