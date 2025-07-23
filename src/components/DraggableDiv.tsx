import { useState, useRef } from 'react'
import { Menu } from './Menu'

interface DraggableDivProps {
    initialPosition?: { x: number; y: number }
    style?: React.CSSProperties
}

export function DraggableDiv({
    initialPosition = { x: 100, y: 100 },
    style = {}
}: DraggableDivProps) {
    const [position, setPosition] = useState(initialPosition)
    const [isDragging, setIsDragging] = useState(false)
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
    const draggableRef = useRef<HTMLDivElement>(null)

    const handleMouseDown = (e: React.MouseEvent) => {
        if (draggableRef.current) {
            const rect = draggableRef.current.getBoundingClientRect()
            setDragOffset({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            })
            setIsDragging(true)
        }
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - dragOffset.x,
                y: e.clientY - dragOffset.y
            })
        }
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }


    return (
        <div
            ref={draggableRef}
            className={"absolute bg-transparent p-4 cursor-move select-none"}
            style={{
                left: position.x,
                top: position.y,
                userSelect: 'none',
                ...style
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <Menu />
        </div>
    )
} 