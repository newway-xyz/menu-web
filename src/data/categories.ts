export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories?: Subcategory[];
  separator?: boolean;
}

export interface Subcategory {
  id: string;
  name: string;
}

// Todos os IDs agora são únicos, inclusive subcategorias
export const categories: Category[] = [
  {
    id: "self",
    name: "Self",
    icon: "👤",
    subcategories: [
      { id: "self_main", name: "Main" },
      { id: "self_outfit", name: "Outfit" },
      { id: "self_weapon", name: "Weapon" },
    ],
  },
  {
    id: "teleport",
    name: "Teleport",
    icon: "📍",
    subcategories: [
      { id: "teleport_main", name: "Main" },
      { id: "teleport_custom", name: "Custom teleport" },
      { id: "teleport_list", name: "Teleport list" },
    ],
  },
  {
    id: "vehicles",
    name: "Vehicles",
    icon: "🚗",
    subcategories: [
      { id: "vehicles_spawners_group", name: "Spawners Group" },
      { id: "vehicles_vehicle_editor", name: "Vehicle Editor" },
      { id: "vehicles_saved_vehicles", name: "Saved Vehicles" },
      { id: "vehicles_xml_vehicles", name: "XML Vehicles" },
      { id: "vehicles_personal_vehicle", name: "Personal Vehicle" },
      { id: "vehicles_vehicle", name: "Vehicle" },
    ],
  },
  {
    id: "network",
    name: "Network",
    icon: "🌐",
    subcategories: [
      { id: "network_session", name: "Session" },
      { id: "network_spoofing", name: "Spoofing" },
      { id: "network_players", name: "Players" },
      { id: "network_saved_players", name: "Saved players" },
      { id: "network_random_events", name: "Random events" },
    ],
  },
  {
    id: "world",
    name: "World",
    icon: "🌍",
    subcategories: [
      { id: "world_main", name: "Main" },
      { id: "world_ipls_group", name: "IPLs Group" },
      { id: "world_spawn_peds", name: "Spawn Peds" },
    ],
  },
  {
    id: "recovery",
    name: "Recovery",
    icon: "🔄",
    subcategories: [
      { id: "recovery_transactions", name: "Transactions" },
      { id: "recovery_heist_modifier", name: "Heist Modifier" },
      { id: "recovery_stat_editor", name: "Stat Editor" },
      { id: "recovery_resupplier", name: "Resupplier" },
      { id: "recovery_daily_activities", name: "Daily Activities" },
    ],
  },
  {
    id: "settings",
    name: "Settings",
    icon: "⚙️",
    subcategories: [
      { id: "settings_hotkeys", name: "Hotkeys" },
      { id: "settings_gui", name: "GUI" },
      { id: "settings_lua_scripts", name: "Lua Scripts" },
    ],
  },
];
