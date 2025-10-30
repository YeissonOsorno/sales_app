import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface ClientFormProps {
  onSubmit: (data: { rut:string; name: string; address?: string }) => Promise<void>;
  initialData?: { rut:string; name: string; address?: string };
  action: "create" | "edit";
}

export function ClientForm({ onSubmit, initialData, action }: ClientFormProps) {
  const [rut, setRut] = useState(initialData?.rut || "");
  const [name, setName] = useState(initialData?.name || "");
  const [address, setAddress] = useState(initialData?.address || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit({ rut,name, address });
    setLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{action === "create" ? "Nuevo Cliente" : "Editar"}</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {action === "create" ? "Agregar Cliente" : "Editar Cliente"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3 mt-3">
          <div>
            <label className="text-sm">RUT</label>
            <Input
              value={rut}
              onChange={(e) => setRut(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm">Nombre</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm">Direccion</label>
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Guardando..." : "Guardar"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}