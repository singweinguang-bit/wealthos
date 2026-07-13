import AssetTable from "@/components/assets/asset-table";
import AddAssetDialog from "@/components/assets/add-asset-dialog";
import SearchBar from "@/components/assets/search-bar";
import { supabase } from "@/lib/supabase";

export default async function AssetsPage() {

  const { data: assets } = await supabase
    .from("assets")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  return (
    <main className="p-8">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold text-white">
            Assets
          </h1>

          <p className="text-neutral-400">
            Manage your assets
          </p>

        </div>

        <div className="flex items-center gap-4">
          <SearchBar />
          <AddAssetDialog />
        </div>

      </div>

      <AssetTable assets={assets ?? []} />

    </main>
  );
}