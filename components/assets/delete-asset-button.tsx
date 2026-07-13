"use client";

import { deleteAsset } from "@/app/(app)/assets/actions";
import { Button } from "@/components/ui/button";

interface Props {
  id: string;
}

export default function DeleteAssetButton({ id }: Props) {
  return (
    <form action={deleteAsset}>
      <input type="hidden" name="id" value={id} />

      <Button
        type="submit"
        variant="destructive"
        size="sm"
      >
        Delete
      </Button>
    </form>
  );
}