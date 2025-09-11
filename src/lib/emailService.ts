import emailjs from "@emailjs/browser";

// EmailJS configuration from environment variables
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

// Other service configuration
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";
const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "";
const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "moulendu25@gmail.com";

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    console.log("EmailJS Configuration Check:");
    console.log("Service ID:", EMAILJS_SERVICE_ID ? "Set" : "Missing");
    console.log("Template ID:", EMAILJS_TEMPLATE_ID ? "Set" : "Missing");
    console.log("Public Key:", EMAILJS_PUBLIC_KEY ? "Set" : "Missing");

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      const missingVars = [];
      if (!EMAILJS_SERVICE_ID)
        missingVars.push("NEXT_PUBLIC_EMAILJS_SERVICE_ID");
      if (!EMAILJS_TEMPLATE_ID)
        missingVars.push("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID");
      if (!EMAILJS_PUBLIC_KEY)
        missingVars.push("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");

      throw new Error(
        `EmailJS configuration is incomplete. Missing: ${missingVars.join(
          ", "
        )}`
      );
    }

    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_PUBLIC_KEY);

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_email: CONTACT_EMAIL,
    };

    console.log("Sending email with params:", templateParams);

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log("EmailJS result:", result);

    if (result.status !== 200) {
      throw new Error(
        `EmailJS returned status ${result.status}: ${result.text}`
      );
    }

    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Email sending failed:", error);

    // Enhanced error logging
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    } else {
      console.error("Unknown error type:", typeof error);
    }

    throw error;
  }
};

// Alternative method: Using Formspree (simpler setup)
export const sendEmailFormspree = async (data: EmailData): Promise<void> => {
  try {
    if (!FORMSPREE_FORM_ID) {
      throw new Error(
        "Formspree form ID is not configured. Please check your environment variables."
      );
    }

    const response = await fetch(
      `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return await response.json();
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
};

// Fallback method: Using Web3Forms (easiest setup)
export const sendEmailWeb3Forms = async (data: EmailData): Promise<void> => {
  try {
    if (!WEB3FORMS_ACCESS_KEY) {
      throw new Error(
        "Web3Forms access key is not configured. Please check your environment variables."
      );
    }

    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("subject", data.subject);
    formData.append("message", data.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return await response.json();
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
};
