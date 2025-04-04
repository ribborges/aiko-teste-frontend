import { EquipmentMap } from "@/components/Map";

export default function MapPage() {
    return (
        <div className="flex-1 flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Mapa</h1>
            <div className="flex-1 overflow-hidden rounded-2xl text-black">
                <EquipmentMap />
            </div>
            <div className="flex-1">
                <p className="text-zinc-500 dark:text-zinc-400">Em construção...</p>
                <img src="/aiko.png" alt="Aiko logo" className="h-32" />
            </div>
        </div>
    );
}