// ============================================================
// CONFIG — fill these in with your Supabase project details.
// Project Settings → API → Project URL / anon public key.
// The anon key is safe to expose client-side as long as RLS
// policies are enabled on every table (see the schema docs).
// ============================================================
export const SUPABASE_URL = "https://YOUR-PROJECT-REF.supabase.co";
export const SUPABASE_ANON_KEY = "YOUR-ANON-PUBLIC-KEY";

export const HOSTEL_DEFAULTS = {
  name: "Sunrise PG",
  rent: {
    student_2: 4350,
    student_3: 3850,
    employee_2: 5350,
    employee_3: 4850,
  },
  bikeCharge: 250,
  messDefault: 1800,
};
