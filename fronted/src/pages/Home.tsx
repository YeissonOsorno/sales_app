import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Users } from "lucide-react";
import { ClientDialog } from "@/components/molecules/Client/ClientDialog";
import { ClientsTable } from "@/components/molecules/Client/ClientTable";
import { toast } from "sonner";

//
import { useClient } from "@/hooks/useClient";

interface Client {
  id?: number;
  rut: string;
  name: string;
  address: string;
}
const Index = () => {
  const {
    data: clientsData, // La data ahora viene de la API
    loading,
    error,
    createClients, 
    updateClients,
    deleteClients,
  } = useClient();
  const clients = clientsData || [];

  
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSaveClient = async (client: Client) => {
    try{
      if (editingClient) {
        const clientId : number = client.id!;
        delete client.id;
       await updateClients(clientId, client); // Asumo que el hook necesita el ID y el objeto completo o parcial
              toast.success("Cliente actualizado", {
                description: "Los cambios se guardaron correctamente en el sistema.",
              });
    } else {
      await createClients(client); 
          toast.success("Cliente registrado", {
            description: "El cliente se agregó exitosamente al sistema.",
          });
    }
    setEditingClient(null);
    setDialogOpen(false);
    }catch(err:any){
      toast.error("Error al guardar", {
              description: `No se pudo guardar el cliente: ${err.message || 'Error desconocido'}`,
      });
    }
  };

  const handleEditClient = (client: Client) => {
    setEditingClient(client);
    setDialogOpen(true);
  };

  const handleDeleteClient = async(id: number) => {
    try {
      
      await deleteClients(id);
      toast.warning("Cliente eliminado", {
        description: "El cliente se eliminó correctamente del sistema.",
      });
    } catch (err:any) {
      toast.error("Error al eliminar", {
        description: `No se pudo eliminar el cliente: ${err.message || 'Error desconocido'}`,
      });
    }
  };

  const handleDialogClose = (open: boolean) => {
    setDialogOpen(open);
    if (!open) {
      setEditingClient(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4 space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Gestión de Clientes</h1>
              <p className="text-muted-foreground">
                Administra tu base de clientes de manera eficiente
              </p>
            </div>
          </div>

          {/* Actions Bar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nombre, RUT o dirección..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              onClick={() => setDialogOpen(true)}
              className="w-full sm:w-auto"
            >
              <Plus className="h-4 w-4 mr-2" />
              Nuevo Cliente
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-lg border bg-card">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Total Clientes</p>
                <h3 className="text-2xl font-bold mt-1">{clients.length}</h3>
              </div>
              <div className="p-2 rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg border bg-card">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Clientes Activos</p>
                <h3 className="text-2xl font-bold mt-1">{clients.length}</h3>
              </div>
              <div className="p-2 rounded-lg bg-accent/10">
                <Users className="h-5 w-5 text-accent" />
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg border bg-card">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Nuevos este Mes</p>
                <h3 className="text-2xl font-bold mt-1">
                  {clients.length}
                </h3>
              </div>
              <div className="p-2 rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <ClientsTable
          clients={clients}
          onEdit={handleEditClient}
          onDelete={handleDeleteClient}
          searchQuery={searchQuery}
        />
      </div>

      {/* Dialog */}
      <ClientDialog
        open={dialogOpen}
        onOpenChange={handleDialogClose}
        onSave={handleSaveClient}
        client={editingClient}
      />
    </div>
  );
};

export default Index;