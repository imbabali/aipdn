"use server";

import { createClient } from "@/lib/supabase/server";

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

  try {
    const supabase = await createClient();
    const { error } = await supabase
      .from("contact_submissions")
      .insert({ name, email, subject, message } as any);

    if (error) {
      return { success: false, message: "Something went wrong. Please try again." };
    }
  } catch {
    return { success: false, message: "Something went wrong. Please try again." };
  }

  return {
    success: true,
    message: "Thank you for your message. We will get back to you soon.",
  };
}

export async function submitJoinForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const organizationName = formData.get("org-name") as string;
  const organizationType = formData.get("org-type") as string;
  const contactName = formData.get("contact-name") as string;
  const email = formData.get("email") as string;
  const country = formData.get("country") as string;
  const motivation = formData.get("motivation") as string;

  if (!organizationName || !organizationType || !contactName || !email || !country) {
    return { success: false, message: "All required fields must be filled." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase
      .from("membership_applications")
      .insert({
        organization_name: organizationName,
        organization_type: organizationType,
        contact_name: contactName,
        email,
        country,
        motivation: motivation || null,
      } as any);

    if (error) {
      return { success: false, message: "Something went wrong. Please try again." };
    }
  } catch {
    return { success: false, message: "Something went wrong. Please try again." };
  }

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
  const name = (formData.get("name") as string) || null;

  if (!email) {
    return { success: false, message: "Email is required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email, name } as any);

    if (error) {
      if (error.code === "23505") {
        return { success: true, message: "You are already subscribed. Thank you!" };
      }
      return { success: false, message: "Something went wrong. Please try again." };
    }
  } catch {
    return { success: false, message: "Something went wrong. Please try again." };
  }

  return {
    success: true,
    message: "You have been subscribed to our newsletter. Welcome!",
  };
}
