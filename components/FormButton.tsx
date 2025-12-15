"use client";

import { useFormStatus } from "react-dom";

export default function FormButton() {
  const { pending } = useFormStatus();

  if (pending) return <button disabled>Loading...</button>;

  return (
    <>
      <button type="reset">Reset</button>
      <button type="submit">Add Curhart</button>
    </>
  );
}
