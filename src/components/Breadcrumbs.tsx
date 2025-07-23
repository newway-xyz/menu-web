interface BreadcrumbsProps {
    items: string[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <div className="px-4 py-2 bg-gray-50 border-b">
            <div className="text-sm text-gray-600 text-left">
                {items.join(' > ')}
            </div>
        </div>
    )
} 