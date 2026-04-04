import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

Deno.serve(async () => {
  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(supabaseUrl, serviceRoleKey);

  // Delete existing user if any
  const { data: users } = await supabase.auth.admin.listUsers();
  const existing = users?.users?.find(u => u.email === "cyclicit@gmail.com");
  if (existing) {
    await supabase.auth.admin.deleteUser(existing.id);
  }

  const { data, error } = await supabase.auth.admin.createUser({
    email: "cyclicit@gmail.com",
    password: "Lal@123",
    email_confirm: true,
  });

  return new Response(JSON.stringify({ data, error }), {
    headers: { "Content-Type": "application/json" },
  });
});
