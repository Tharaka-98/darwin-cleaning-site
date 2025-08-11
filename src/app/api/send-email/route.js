// app/api/send-email/route.js
import emailjs from "emailjs-com";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, phone, inquiry } = body;

    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      { name, email, phone, inquiry },
      process.env.EMAILJS_PUBLIC_KEY
    );

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("EmailJS error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
