"use client";

import WorkoutProgram from "@/models/WorkoutProgram";
import WorkoutProgramDetails from "@/components/WorkoutProgramDetails";
import { useState } from "react";

export default function WorkoutProgramList({
  workoutPrograms,
}: {
  workoutPrograms: WorkoutProgram[] | undefined;
}) {
  return workoutPrograms?.map((workoutProgram) => (
    <div
      key={workoutProgram.workoutProgramId}
      className="m-8 bg-red cursor-pointer"
    >
      <div className="flex flex-col bg-red">
        <h3 className="mx-4 mt-4 p-2 text-2xl font-semibold">
          {workoutProgram.name}
        </h3>
        <p className="p-2 mx-4 text-gray-500">
          {workoutProgram.description.substring(0, 175)}...
        </p>
        <p className="p-2 mx-4 text-gray-500">{workoutProgram.description}</p>
        <WorkoutProgramDetails workoutProgram={workoutProgram} />
      </div>
    </div>
  ));
}