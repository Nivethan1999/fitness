import CreateClientForm from "@/components/CreateUser";
import ClientList from "@/components/UserList";
import { getAllClients } from "@/services/TrainerService";

export default async function ClientsPage() {
  const clients = await getAllClients();
  return (
    <main className="flex flex-col items-center  min-h-screen p-4">
      <div className="w-full max-w-md mx-auto bg-gray-100 p-8 shadow-lg rounded-lg mb-12">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Opret en ny klient du kan administrere
        </h2>
        <CreateClientForm />
      </div>
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Clients
      </h2>
      <div className="w-full max-w-md mx-auto bg-white p-4 shadow-md rounded-lg">
        <ClientList clients={clients?.data} />
      </div>
    </main>
  );
}
