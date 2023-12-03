//import { checkSession } from "@/services/TrainerService";
import CreatePersonalTrainerForm from "../../components/CreatePersonalTrainer";

export default async function ManagerPage() {
  //const session = await checkSession();
  return <CreatePersonalTrainerForm />;
}

// import Layout from "@/components/Layout";
// import CreatePersonalTrainerForm from "../../components/CreatePersonalTrainer";
// import { checkSession } from "@/services/TrainerService";
// import { redirect } from "next/navigation";

// export default async function ManagerPage() {
//   const session = await checkSession();
//   if (session?.role?.toLowerCase() !== "manager") {
//     redirect("/");
//   }
//   return (
//     <main className="px-4 flex min-h-screen flex-col items-center justify-between">
//       <div className="p-4 min-w-full">
//         <div className="bg-blue-200 p-6 shadow-2xl border-4 border-blue-100-300 rounded-t-2xl mb-12">
//           <h2 className="text-4xl text-center text-gray-800 pb-8">
//             Opret en Personal Trainer
//           </h2>
//           <CreatePersonalTrainerForm />
//         </div>
//       </div>
//     </main>
//   );
// }
