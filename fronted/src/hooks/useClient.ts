import { useApi } from './useApi';
import { api } from '@/api/api';

interface Clients {
  id?: number;
  rut: string;
  name: string;
  address?: string;
}

export function useClient() {
  const doctors = useApi<Clients[]>('/clients');

  async function createClients(data: Omit<Clients, 'id'>) {
    return api.post('/clients', data);
  }

  async function updateClients(id: number, data: Partial<Clients>) {
    return api.patch(`/clients/${id}`, data);
  }

  async function deleteClients(id: number) {
    return api.delete(`/clients/${id}`);
  }

  return { ...doctors, createClients, updateClients, deleteClients };
}