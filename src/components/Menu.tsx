import { useState, useMemo } from "react"
import { Header } from "./Header"
import { Breadcrumbs } from "./Breadcrumbs"
import { CategorySidebar } from "./CategorySidebar"
import { DynamicContent } from "./DynamicContent"
import { generateBreadcrumbs } from "../utils/breadcrumbs"

export function Menu() {
    const [selectedCategory, setSelectedCategory] = useState("vehicles_vehicle")

    // Gerar breadcrumbs baseados na categoria selecionada
    const breadcrumbItems = useMemo(() => {
        return generateBreadcrumbs(selectedCategory)
    }, [selectedCategory])

    return (
        <div className="bg-white rounded-lg shadow-lg w-[1200px] h-[800px] overflow-hidden">
            <Header title="NewWay Pro" version="v8.4.0" />
            <Breadcrumbs items={breadcrumbItems} />

            <div className="flex h-[calc(780px-120px)]">
                <CategorySidebar
                    selectedCategory={selectedCategory}
                    onCategorySelect={setSelectedCategory}
                />

                <DynamicContent selectedCategory={selectedCategory} />
            </div>
        </div>
    )
}