"use client";

export default function NewHartPage() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1>Create New Curhart</h1>
      <form>
        <fieldset>
          <legend>New Hart Form</legend>

          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows={4}
            />
          </div>

          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}
