import CreateWorkoutProgram from "@/components/CreateProgram";
import AddExercise from "@/components/AddExercise";
import {
  //checkSession,
  getAllClients,
  getAllExercises,
  getTrainerWorkoutPrograms,
} from "@/services/TrainerService";

export default async function WorkoutProgramsPage() {
  //const session = await checkSession();
  const workoutPrograms = await getTrainerWorkoutPrograms();
  const exercises = await getAllExercises();
  const clients = await getAllClients();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full p-4">
        <div className="bg-gray-200 p-6 shadow-2xl border-4 border-gray-100-300 rounded-t-2xl mb-12">
          <h2 className="text-4xl text-center text-gray-800 pb-8">
            Create new program
          </h2>
          <CreateWorkoutProgram clients={clients.data} />
        </div>
        <div className="bg-gray-200 p-6 shadow-2xl border-4 border-gray-100-300 rounded-t-2xl mb-12">
          <h2 className="text-4xl text-center text-gray-800 pb-8">
            Add exercise to existing workout program
          </h2>
          <AddExercise
            workoutPrograms={workoutPrograms.data}
            exercises={exercises.data}
          />
        </div>
      </div>
    </main>
  );
}
