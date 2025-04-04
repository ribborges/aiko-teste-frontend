import { Map } from "@vis.gl/react-google-maps";

import { mapId } from "@/config/env";
import { useEquipmentStore } from "@/lib/store";

import EquipmentMarker from "./EquipmentMarker";

export default function EquipmentMap() {
    const position = { lat: -19.126536, lng: -45.947756 };

    const { equipments, positionHistory, models } = useEquipmentStore();

    return (
        <Map
            mapId={mapId}
            colorScheme='FOLLOW_SYSTEM'
            defaultZoom={10}
            defaultCenter={position}
        >
            {positionHistory.map((position, index) => {
                const lastPosition = position.positions[position.positions.length - 1];
                const convertedPosition = { lat: lastPosition.lat, lng: lastPosition.lon };
                const modelId = models.find((model) => model.id === equipments.find((equipments) => equipments.id === position.equipmentId)?.equipmentModelId)?.id;
                
                return (
                    <EquipmentMarker
                        key={index}
                        position={convertedPosition}
                        model={
                            modelId === "a4b0c114-acd8-4151-9449-7d12ab9bf40f" ? "harvester" :
                            modelId === "9c3d009e-0d42-4a6e-9036-193e9bca3199" ? "tractor" :
                            modelId === "a3540227-2f0e-4362-9517-92f41dabbfdf" ? "truck" : undefined
                        }
                    />
                );
            })}
        </Map>
    );
}