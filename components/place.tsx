import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UpdateStatus } from "@/function/details";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Props = {
  Data: any;
};

export default async function PlacePage({ Data }: Props) {
  return (
    <div className="flex items-center justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="flex flex-col rounded-lg p-2 h-full border-2 border-gray-100 items-center group border-transparent px-4 py-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <Image
              src="/uploads/1007508.jpg"
              width={150}
              height={0}
              alt="Picture of the author"
              className="rounded"
            />

            <h2 className={`mt-3 font-semibold text-[12px] text-dark:invert`}>
              1007508
            </h2>
            <p
              className={`max-w-[30ch] text-[10px] opacity-50 text-dark:invert`}
            >
              department
            </p>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[350px] max-h-[600px] rounded-lg sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Voting...🚀</DialogTitle>
            <DialogDescription>
              Vote for who you like. Click save when you are done!
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-between gap-y-4">
            <Image
              src="/uploads/1007508.jpg"
              width={200}
              height={0}
              alt="Picture of the author"
              className="rounded"
            />
            <div className="flex justify-center items-center gap-2">
              <Label htmlFor="name" className="text-right">
                ID
              </Label>
              <Input
                id="username"
                placeholder="รหัสพนักงาน"
                className="col-span-3"
              />
              <Button variant="secondary" type="submit">
                Search
              </Button>
            </div>

            <div className="flex flex-col items-center justify-center gap-y-4">
              <Label htmlFor="name" className="text-right">
                name
              </Label>
              <Label htmlFor="department" className="text-right">
                department
              </Label>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" variant="destructive">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
