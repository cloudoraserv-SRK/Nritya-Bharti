import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://YOUR_PROJECT.supabase.co";
const SUPABASE_KEY = "YOUR_PUBLIC_ANON_KEY";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

/* --------------------
   PUBLIC FORMS
-------------------- */

export async function submitContact(form) {
  return supabase.from("contact_enquiries").insert([{
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    interest: form.interest.value,
    message: form.message.value
  }]);
}

export async function submitDiploma(form) {
  return supabase.from("diploma_applications").insert([{
    student_name: form.student_name.value,
    email: form.email.value,
    course_name: form.course_name.value
  }]);
}

export async function submitFranchise(form) {
  return supabase.from("franchise_applications").insert([{
    institute_name: form.institute_name.value,
    contact_person: form.contact_person.value,
    email: form.email.value,
    phone: form.phone.value
  }]);
}
