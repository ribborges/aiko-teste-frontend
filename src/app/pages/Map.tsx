import { useEffect, useState } from "react";

import { EquipmentMap } from "@/components/Map";
import { DataTable, DataTableColumn } from "@/components/Table";
import { TableRow, TableCell } from "@/components/Table/Table";
import { Tag } from "@/components/Tag";
import { useEquipmentStore, useFilterStore } from "@/lib/store";

interface StateHistory {
    stateId: string,
    name: string,
    state: string,
    color: string,
    timestamp: string
}

export default function MapPage() {
    const { states, stateHistory, equipments } = useEquipmentStore();
    const { equipmentId } = useFilterStore();

    const selectedEquipment = equipments.find((equipment) => equipment.id === equipmentId);
    const selectedStateHistory = stateHistory.find((history) => history.equipmentId === equipmentId);

    const [stateHistoryData, setStateHistoryData] = useState<StateHistory[]>([]);

    useEffect(() => {
        setStateHistoryData(
            selectedStateHistory?.states.map((state) => {
                const equipment = equipments.find((equipment) => equipment.id === equipmentId);
                const stateData = states.find((s) => s.id === state.stateId);

                return {
                    stateId: state.stateId,
                    name: equipment?.name || "",
                    state: stateData?.name || "",
                    color: stateData?.color || "",
                    timestamp: state.date.toLocaleTimeString("pt-BR", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                    })
                };
            }) || []
        )
    }, [selectedStateHistory, states, equipments]);

    const columns: DataTableColumn<StateHistory>[] = [
        {
            header: "Equipamento",
            accessorKey: "name",
        }, {
            header: "Estado",
            accessorKey: "state",
            cell: (state) => (
                <Tag color={state.color}>
                    {state.state}
                </Tag>
            )
        }, {
            header: "Data",
            accessorKey: "timestamp",
        }
    ]

    const tableFooter = (
        <TableRow>
            <TableCell colSpan={6} className="text-right">
                Total de estados: {stateHistoryData.length}
            </TableCell>
        </TableRow>
    )

    return (
        <div className="flex-1 flex flex-col gap-4 overflow-auto">
            <h1 className="text-2xl font-bold">Mapa</h1>
            <div className="flex-1 min-h-48 md:min-h-64 lg:min-h-96 max-w-screen overflow-hidden rounded-2xl text-black">
                <EquipmentMap />
            </div>
            <div className="flex-1 flex flex-col gap-4">
                <h2 className="text-xl font-bold">Histórico de estado do equipamento</h2>
                <DataTable
                    data={stateHistoryData}
                    columns={columns}
                    caption={selectedEquipment ? `Lista de histórico de estados do equipamento ${selectedEquipment?.name}` : "Nenhum equipamento selecionado"}
                    footer={tableFooter}
                />
            </div>
        </div>
    );
}