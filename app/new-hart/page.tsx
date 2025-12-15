"use client";

export default function NewHartPage() {
  function addHart(formData: FormData) {
    const content = formData.get("content") as string;
    const image = formData.get("image") as string;

    console.log(content, image);
  }
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1>Create New Curhart</h1>
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
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              id="image"
              name="image"
              placeholder="Upload your image ... "
            />
          </div>

          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}
