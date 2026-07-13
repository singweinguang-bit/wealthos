import DeleteAssetButton from "./delete-asset-button";
import EditAssetDialog from "./edit-asset-dialog";

type Asset = {
  id: string;
  name: string;
  category: string;
  currency: string;
  current_value: number;
  liquidity: string;
};

interface AssetTableProps {
  assets: Asset[];
}

export default function AssetTable({
  assets,
}: AssetTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">

      <table className="w-full text-white">

        <thead className="bg-neutral-800">

          <tr>

            <th className="px-6 py-4 text-left">Name</th>

            <th className="text-left">Category</th>

            <th className="text-left">Currency</th>

            <th className="text-left">Liquidity</th>

            <th className="px-6 text-right">Value</th>
<th className="px-6 text-center">Action</th>

          </tr>

        </thead>

        <tbody>

          {assets.map((asset) => (

            <tr
              key={asset.id}
              className="border-t border-neutral-800 hover:bg-neutral-800"
            >

              <td className="px-6 py-4">
                {asset.name}
              </td>

              <td>{asset.category}</td>

              <td>{asset.currency}</td>

              <td>{asset.liquidity}</td>

              <td className="px-6 text-right font-semibold text-emerald-400">
                RM {asset.current_value.toLocaleString()}
              </td>

              <td className="px-6 text-center">
                <div className="flex justify-center gap-2">
                  <EditAssetDialog />
                  <DeleteAssetButton id={asset.id} />
              </div>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}