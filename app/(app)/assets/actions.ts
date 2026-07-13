"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabase";

export async function createAsset(formData: FormData) {
  console.log("Create Asset Action");
  const name = formData.get("name")?.toString() ?? "";
  const category = formData.get("category")?.toString() ?? "";
  const currency = formData.get("currency")?.toString() ?? "MYR";
  const current_value = Number(formData.get("current_value") ?? 0);
  const liquidity = formData.get("liquidity")?.toString() ?? "";

  const { error } = await supabase.from("assets").insert([
    {
      name,
      category,
      currency,
      current_value,
      liquidity,
    },
  ]);

  if (error) {
    console.error(error);
    return;
  }

  revalidatePath("/assets");
}

export async function deleteAsset(formData: FormData) {
  const id = formData.get("id")?.toString() ?? "";

  const { error } = await supabase
    .from("assets")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    return;
  }

  revalidatePath("/assets");
}

export async function updateAsset(formData: FormData) {
  const id = formData.get("id")?.toString() ?? "";

  const name = formData.get("name")?.toString() ?? "";
  const category = formData.get("category")?.toString() ?? "";
  const currency = formData.get("currency")?.toString() ?? "";
  const current_value = Number(formData.get("current_value"));
  const liquidity = formData.get("liquidity")?.toString() ?? "";

  const { error } = await supabase
    .from("assets")
    .update({
      name,
      category,
      currency,
      current_value,
      liquidity,
    })
    .eq("id", id);

  if (error) {
    console.error(error);
    return;
  }

  revalidatePath("/assets");
}