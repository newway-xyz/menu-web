import { useState } from "react"
import { categories } from "../data/categories"
import type { Category } from "../data/categories"

interface CategorySidebarProps {
    selectedCategory: string
    onCategorySelect: (categoryId: string) => void
}

const whiteScrollbarStyle: React.CSSProperties = {
    scrollbarColor: "#e5e7eb #fff",
    scrollbarWidth: "thin",
}

const whiteScrollbarClass = `
    .white-scrollbar::-webkit-scrollbar {
        width: 8px;
        background: #fff;
    }
    .white-scrollbar::-webkit-scrollbar-thumb {
        background: #e5e7eb;
        border-radius: 8px;
    }
    .white-scrollbar::-webkit-scrollbar-thumb:hover {
        background: #cbd5e1;
    }
`;

export function CategorySidebar({ selectedCategory, onCategorySelect }: CategorySidebarProps) {
    const [expandedCategories, setExpandedCategories] = useState<string[]>(["vehicles"])

    const toggleExpanded = (categoryId: string) => {
        setExpandedCategories(prev =>
            prev.includes(categoryId)
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        )
    }

    const handleCategoryClick = (category: Category) => {
        if (category.subcategories) {
            toggleExpanded(category.id)
        } else {
            onCategorySelect(category.id)
        }
    }

    return (
        <div className="w-[230px] bg-white text-gray-900 border-r border-gray-200 p-2 relative h-full">
            <style>{whiteScrollbarClass}</style>
            <div
                className="space-y-1 mb-12 overflow-y-auto max-h-[calc(800px-120px-32px)] pr-1 white-scrollbar"
                style={{
                    maxHeight: "calc(800px - 120px - 32px)",
                    ...whiteScrollbarStyle
                }}
            >
                {categories.map((category, index) => (
                    <div key={category.id}>
                        {category.separator && index > 0 && (
                            <div className="my-3">
                                <hr className="border-gray-200" />
                            </div>
                        )}

                        <div
                            onClick={() => handleCategoryClick(category)}
                            className={`relative group cursor-pointer p-2 rounded-lg transition-all duration-200 flex items-center justify-between ${selectedCategory === category.id
                                ? "bg-blue-100 text-blue-900"
                                : "hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="text-lg">
                                    {category.icon}
                                </div>
                                <span className="font-medium text-sm">
                                    {category.name}
                                </span>
                            </div>

                            {category.subcategories && (
                                <div className={`transition-transform duration-200 ${expandedCategories.includes(category.id) ? "rotate-90" : ""
                                    }`}>
                                    <span className="text-gray-500">▶</span>
                                </div>
                            )}
                        </div>

                        {category.subcategories && expandedCategories.includes(category.id) && (
                            <div className="ml-6 mt-1 space-y-1">
                                {category.subcategories.map((subcategory) => (
                                    <div
                                        key={subcategory.id}
                                        onClick={() => onCategorySelect(subcategory.id)}
                                        className={`group relative cursor-pointer px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] ${selectedCategory === subcategory.id
                                            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-200"
                                            : "text-gray-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-gray-900 hover:shadow-md"
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="relative z-10">{subcategory.name}</span>
                                            {selectedCategory === subcategory.id && (
                                                <div className="w-2 h-2 bg-white rounded-full opacity-80"></div>
                                            )}
                                        </div>

                                        {selectedCategory === subcategory.id && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl blur-sm"></div>
                                        )}

                                        {/* Hover indicator */}
                                        <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-r-full transition-all duration-300 ${selectedCategory === subcategory.id ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}></div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <hr className="border-gray-200" />
                    </div>
                ))}
            </div>
        </div >
    )
}