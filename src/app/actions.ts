"use server";

export type FormState = {
  success: boolean;
  message: string;
} | null;

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !subject || !message) {
    return { success: false, message: "All fields are required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  // TODO: Insert into Supabase contact_submissions table
  // const supabase = await createClient();
  // await supabase.from("contact_submissions").insert({ name, email, subject, message });

  return {
    success: true,
    message: "Thank you for your message. We will get back to you soon.",
  };
}

export async function submitJoinForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const orgName = formData.get("org-name") as string;
  const orgType = formData.get("org-type") as string;
  const contactName = formData.get("contact-name") as string;
  const email = formData.get("email") as string;
  const country = formData.get("country") as string;

  if (!orgName || !orgType || !contactName || !email || !country) {
    return { success: false, message: "All required fields must be filled." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  // TODO: Insert into Supabase membership_applications table

  return {
    success: true,
    message:
      "Thank you for your interest in joining AIPDN. We will review your application and respond shortly.",
  };
}

export async function submitNewsletter(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const email = formData.get("email") as string;

  if (!email) {
    return { success: false, message: "Email is required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  // TODO: Insert into Supabase newsletter_subscribers table

  return {
    success: true,
    message: "You have been subscribed to our newsletter. Welcome!",
  };
}
