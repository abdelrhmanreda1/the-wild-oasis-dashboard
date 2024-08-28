// this is before add Edit button to Project

import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins couldn't be loaded");
  }
  return data;
}

export async function createCabin(newcabin) {
  const imageName = `${Math.random()}-${newcabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // https://lormzoucpycjysrtsbvx.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  //1. Create Cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newcabin, image: imagePath }]);
  if (error) {
    console.error(error);
    throw new Error("Cabins couldn't be created");
  }
  // 2. Upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newcabin.image);
  // 3. Deleting the cabin if there was an error uploading images
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);

    console.error(storageError);
    throw new Error(
      "Cabins image could not be uploaded and the cabin was be created"
    );
  }

  return data;
}

export async function deleteCabins(id) {
  const { error, data } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins couldn't be deleted");
  }
  return data;
}
