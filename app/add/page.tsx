import FormButton from "@/components/FormButton";
import { prisma } from "@/lib/prisma"; // 1️⃣ Import the Prisma client
import { redirect } from "next/navigation"; // 2️⃣ For redirecting after save

export default function NewHartPage() {
  /**
   * 🎯 Server Action - This runs on the SERVER, not the browser!
   *
   * When the form is submitted:
   * 1. This function receives the FormData
   * 2. Extracts the values
   * 3. Saves to database via Prisma
   * 4. Redirects the user
   */
  async function addHart(formData: FormData) {
    "use server"; // 🔒 This marks this function as a Server Action

    // 3️⃣ Extract data from the form
    const content = formData.get("content") as string;
    const image = formData.get("image") as string;

    // 4️⃣ Save to database using Prisma!
    // prisma.hart.create() = INSERT INTO "Hart" (content, image) VALUES (...)
    await prisma.hart.create({
      data: {
        content: content, // The text from textarea
        image: image || null, // The image (null if empty)
      },
    });

    // 5️⃣ Redirect back to home page after saving
    redirect("/");
  }

  return (
    <div className="flex flex-col items-center justify-start p-16 min-w-screen min-h-screen bg-black">
      <h1 className="text-4xl font-bold">Create New Curhart</h1>
      <form action={addHart}>
        <fieldset>
          <legend>New Hart Form</legend>
          <textarea
            id="content"
            name="content"
            placeholder="Share your Curhart ♡ here ..."
            rows={4}
          />
          <div>
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              id="image"
              name="image"
              placeholder="Upload your image ... "
            />
          </div>

          <FormButton />
        </fieldset>
      </form>
    </div>
  );
}
