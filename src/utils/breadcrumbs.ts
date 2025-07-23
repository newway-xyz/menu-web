import { categories } from "../data/categories";

export function generateBreadcrumbs(selectedCategory: string): string[] {
  const breadcrumbs = ["NewWay Pro"];

  // Procurar pela categoria principal
  const mainCategory = categories.find(
    (cat) =>
      cat.id === selectedCategory ||
      cat.subcategories?.some((sub) => sub.id === selectedCategory)
  );

  if (mainCategory) {
    breadcrumbs.push(mainCategory.name);

    // Se for uma subcategoria, adicionar o nome da subcategoria
    if (mainCategory.subcategories) {
      const subcategory = mainCategory.subcategories.find(
        (sub) => sub.id === selectedCategory
      );
      if (subcategory) {
        breadcrumbs.push(subcategory.name);
      }
    }
  }

  return breadcrumbs;
}
