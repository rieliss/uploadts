"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UpdateStatus } from "@/function/details";
import { PrismaClient } from "@prisma/client";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { error } from "console";

const prisma = new PrismaClient();

const formSchema = z.object({
  username: z.string().min(7, {
    message: "ID must be at least 2 characters.",
  }),
});

export function PlacePage() {
  const [sectionFliter, setSectionFliter] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const handleChange = (event: any) => {
    event.preventDefault();
  };

  console.log(sectionFliter);

  async function handleSubmit(data: z.infer<typeof formSchema>) {
    const search = await prisma.user.findMany({
      where: {
        username: data.username,
      },
    });

    if (search) {
      toast.success("Search Complete!");
    } else {
      toast.success("Somthing went wrong! ");
    }
  }
  return (
    <div className="flex items-center justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="flex flex-col rounded-lg p-2 h-full border-2 border-gray-100 items-center group border-transparent px-4 py-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <Image
              src="/uploads/1007555.png"
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
              src="/uploads/1007555.png"
              width={200}
              height={0}
              alt="Picture of the author"
              className="rounded"
            />
            <div className="flex justify-center items-center gap-x-4">
              <Label htmlFor="name" className="text-right">
                ID
              </Label>
              <Form {...form}>
                <form
                  // onSubmit={form.handleSubmit(handleSubmit)}

                  className="w-3/3"
                >
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <input
                            type="text"
                            placeholder="รหัสพนักงาน"
                            className="col-span-3"
                            {...field}
                            onChange={(e) => setSectionFliter(e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <DialogFooter></DialogFooter>
                </form>
                <Button variant="secondary" type="submit">
                  Search
                </Button>
              </Form>
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
