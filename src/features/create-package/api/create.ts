import { NextResponse } from "next/server";
import firebaseConnection from "@/config/firebase";
import { Email } from "@/features/create-package/types";

const db = firebaseConnection.firestore();

/**
 * Validates the provided email data.
 *
 * @param data - The email data to validate.
 * @returns An object indicating whether the data is valid, along with a status code and an error message if invalid.
 *
 * @example
 * ```typescript
 * const result = validation({ place: "New York", guestEmail: "guest@example.com" });
 * // result: { isValid: true }
 * ```
 *
 * @example
 * ```typescript
 * const result = validation({});
 * // result: { isValid: false, status: 400, errorMessage: "Place is required" }
 * ```
 */
export function validation(data: Email): {
  isValid: boolean;
  status?: number;
  errorMessage?: string;
} {
  if (!data) {
    return {
      isValid: false,
      status: 400,
      errorMessage: "Data is required",
    };
  }

  if (!data.place) {
    return {
      isValid: false,
      status: 400,
      errorMessage: "Place is required",
    };
  }

  if (!data.guestEmailList) {
    return {
      isValid: false,
      status: 400,
      errorMessage: "Guest Email is required",
    };
  }

  return { isValid: true };
}

export async function create(req: Request, data: Email): Promise<NextResponse> {
  try {
    //remove 'file' before saving
    //TODO : ensure to save the file on s3 first then save its id
    const { file, ...emailData } = data;

    const emailRef = await db.collection("emails").add(emailData);

    return NextResponse.json(
      { message: "email saved successfully", id: emailRef.id },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "failed to save email", details: error.message },
      { status: 500 }
    );
  }
}
