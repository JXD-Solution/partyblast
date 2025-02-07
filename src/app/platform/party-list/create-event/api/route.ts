import { create, validation } from "@/features/create-package/api/create";
import { NextResponse } from "next/server";
import { Email } from "@/features/create-package/types";

/**
 * Handles the POST request to create a new event.
 *
 * @param {Request} req - The incoming request object.
 * @returns {Promise<Response>} - The response object indicating the result of the operation.
 *
 * The function performs the following steps:
 * 1. Parses the request body to extract the email data.
 * 2. Validates the extracted data.
 * 3. If the data is valid, it calls the `create` function to create the event.
 * 4. If the data is invalid, it returns a JSON response with an error message and a 400 status code.
 */
export async function POST(req: Request) {
  const data: any = await req.json();
  const emailData: Email = data.formData;

  const isValid = validation(emailData);

  if (isValid.isValid) {
    return await create(req, emailData);
  } else {
    return NextResponse.json(
      { error: "Validation Failed", reason: isValid.errorMessage },
      { status: 400 }
    );
  }
}
