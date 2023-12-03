"use client";

import FormInput from "@/components/FormInput";
import FormSubmit from "@/components/FormSubmit";
import { addExercise } from "@/services/TrainerService";
import { useFormState } from "react-dom";
import Exercise from "@/models/Exercise";
import WorkoutProgram from "@/models/WorkoutProgram";

export default function AddExercise({
  workoutPrograms,
}: {
  workoutPrograms: WorkoutProgram[] | undefined;
  exercises: Exercise[] | undefined;
}) {
  let initialState = {
    message: "" as string,
    success: false as boolean,
  };
  const [state, formAction] = useFormState(addExercise, initialState);

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
  
      <main className="flex items-center flex-1">
        <form className="w-full max-w-md p-8 bg-white rounded shadow">
          <div className="mb-4">
            <label
              htmlFor="workoutProgram"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Select Workout Program
            </label>
            <select
              id="workoutProgram"
              name="workoutProgram"
              className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="" disabled>
                Choose a workout program
              </option>
              {workoutPrograms?.map((program) => (
                <option
                  key={program.workoutProgramId}
                  value={program.workoutProgramId}
                >
                  {program.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="exerciseProgram"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Exercise
            </label>
            <FormInput label="Name" name="name" type="text" required />
            <FormInput
              label="Description"
              name="description"
              type="text"
              required
            />
            <FormInput label="Sets" name="sets" type="number" required />
            <FormInput
              label="Repetitions"
              name="repetitions"
              type="number"
              required
            />
            <FormInput label="Time" name="time" type="text" required />
          </div>
          <FormSubmit state={state} />
        </form>
      </main>
    </div>
  );
}
