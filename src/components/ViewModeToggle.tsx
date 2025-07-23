import { ToggleButton } from "./ToggleButton"

interface ViewModeToggleProps {
    viewMode: string
    onViewModeChange: (mode: string) => void
}

export function ViewModeToggle({ viewMode, onViewModeChange }: ViewModeToggleProps) {
    return (
        <div className="flex gap-2">
            <ToggleButton
                icon="⊞"
                isActive={viewMode === "grid"}
                onClick={() => onViewModeChange("grid")}
                title="Visualização em Grade"
            />
            <ToggleButton
                icon="☰"
                isActive={viewMode === "list"}
                onClick={() => onViewModeChange("list")}
                title="Visualização em Lista"
            />
            <ToggleButton
                icon="⚡"
                title="Modo Rápido"
            />
        </div>
    )
} 