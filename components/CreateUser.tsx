"use client";

// import { createUser } from "@/server/actions";
import { createUser } from "@/services/TrainerService";
import { useFormState } from "react-form-state";

import FormInput from "@/components/FormInput";
import FormSubmit from "@/components/FormSubmit";

export default function CreateClientForm() {
  let initialState = {
    message: null,
    success: null,
  };
  const [state, formAction] = useFormState(createUser, initialState);

  return (
    <>
      <form className="max-w-md mx-auto my-8" action={formAction}>
        <FormInput label="First Name" name="firstName" type="text" required />
        <FormInput label="Last Name" name="lastName" type="text" required />
        <FormInput label="Email" name="email" type="email" required />
        <FormInput label="Password" name="password" type="password" required />
        <FormSubmit state={state} />
      </form>
    </>
  );
}