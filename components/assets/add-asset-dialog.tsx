"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AddAssetDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>+ Add Asset</Button>
      </DialogTrigger>

      <DialogContent className="bg-neutral-900 border-neutral-800 text-white">
        <DialogHeader>
          <DialogTitle>Add Asset</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">

          <Input placeholder="Asset Name" />

          <Input placeholder="Category" />

          <Input placeholder="Currency" />

          <Input placeholder="Current Value" />

          <Input placeholder="Liquidity" />

          <Button
            className="w-full"
            onClick={() => setOpen(false)}
          >
            Save
          </Button>

        </div>
      </DialogContent>
    </Dialog>
  );
}