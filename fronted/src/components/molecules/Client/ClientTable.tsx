import { Button } from "@/components/ui/button";

interface Client {
  id: number;
  rut:string;
  name: string;
  address?: string;
}

interface ClientTableProps {
  clients: Client[];
  onEdit: (client: Client) => void;
  onDelete: (id: number) => Promise<void>;
}

export function ClientTable({ clients, onEdit, onDelete }: ClientTableProps) {
  return (
    <table className="w-full border rounded-md">
      <thead className="bg-gray-50">
        <tr>
          <th className="text-left p-2">ID</th>
          <th className="text-left p-2">Nombre</th>
          <th className="text-left p-2">Especialidad</th>
          <th className="text-center p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((d) => (
          <tr key={d.id} className="border-t">
            <td className="p-2">{d.id}</td>
            <td className="p-2">{d.rut}</td>
            <td className="p-2">{d.name}</td>
            <td className="p-2">{d.address ?? "—"}</td>
            <td className="p-2 flex gap-2 justify-center">
              <Button variant="secondary" onClick={() => onEdit(d)}>
                Editar
              </Button>
              <Button
                variant="destructive"
                onClick={() => onDelete(d.id)}
              >
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}