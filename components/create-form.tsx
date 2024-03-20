"use client";

import { saveContact } from "lib/actions";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/buttons";

const CreateForm = () => {
    const [state, formAction] = useFormState(saveContact, null);

  return (
    <div className="max-w-md mx-auto">
      <form action={formAction}>

        {/* Full Name */}
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-4">Full Name</label>
          <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Full Name..."/>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
          </div>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-4">Email</label>
          <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Email..."/>
          <div id="email-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.email}</p>
          </div>
        </div>

        {/* Phone */}
        <div className="mb-5">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-4">Phone</label>
          <input type="number" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Phone..."/>
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
          </div>

          <div id="message-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.message}</p>
          </div>
        </div>
            <SubmitButton label="save" />
      </form>
    </div>
  );
}

export default CreateForm;
