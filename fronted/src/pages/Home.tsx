import { useState } from "react";
import { useClient } from "@/hooks/useClient";
import { ClientForm } from "@/components/molecules/Client/ClientForm";
import { ClientTable } from "@/components/molecules/Client/ClientTable";

export default function ClientPage() {
  const { data: clients, loading, error, createClients, updateClients, deleteClients } = useClient();
  const [selectedClient, setSelectedClient] = useState<any>(null);

  const handleCreate = async (data: { rut:string; name: string; address: string }) => {
    await createClients(data);
    window.location.reload();
  };

  const handleUpdate = async (data: { rut:string; name: string; address: string }) => {
    if (selectedClient) {
      await updateClients(selectedClient.id, data);
      window.location.reload();
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm("¿Eliminar este doctor?")) {
      await deleteClients(id);
      window.location.reload();
    }
  };

  if (loading) return <p className="p-4">Cargando...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestión de Clientes</h1>
        <ClientForm onSubmit={handleCreate} action="create" />
      </div>

      <ClientTable
        clients={clients || []}
        onEdit={(doctor:any) => setSelectedClient(doctor)}
        onDelete={handleDelete}
      />

      {selectedClient && (
        <ClientForm
          onSubmit={handleUpdate}
          initialData={selectedClient}
          action="edit"
        />
      )}
    </div>
  );
}