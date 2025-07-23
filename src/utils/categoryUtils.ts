export function getMainCategory(categoryId: string): string {
  if (categoryId.startsWith("self_")) return "self";
  if (categoryId.startsWith("teleport_")) return "teleport";
  if (categoryId.startsWith("vehicles_")) return "vehicles";
  if (categoryId.startsWith("network_")) return "network";
  if (categoryId.startsWith("world_")) return "world";
  if (categoryId.startsWith("recovery_")) return "recovery";
  if (categoryId.startsWith("settings_")) return "settings";
  return categoryId;
}
