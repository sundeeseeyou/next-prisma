import FormButton from "@/components/FormButton";

export default function NewHartPage() {
  async function addHart(formData: FormData) {
    "use server";
    const content = formData.get("content") as string;
    const image = formData.get("image") as string;

    console.log(content, image);
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
