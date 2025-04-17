export async function POST(request: Request) {
  try {
    const { email, context = "website" } = await request.json();

    if (!email) {
      return Response.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    // Get current date in readable format
    const date = new Date().toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const sheetDBUrl = "https://sheetdb.io/api/v1/jvsavsjetzery"; // Replace with your actual endpoint

    const res = await fetch(sheetDBUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [{ email, context, date }],
      }),
    });

    if (!res.ok) throw new Error("Failed to write to Google Sheet");

    return Response.json({ success: true, message: "Thanks for subscribing!" });
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}
