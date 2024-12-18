"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";

const handleSubmit = (e: { preventDefault: () => void }) => {
  e.preventDefault();
  // Handle form submission
};

const equipmentList = [
  { value: "printer", label: "Printer" },
  { value: "switch", label: "Switch" },
  { value: "router", label: "Router" },
];

export default function AddCategory() {
  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto  space-y-8 p-4">
      <Card>
        <CardHeader>
          <CardTitle>Add new category</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-1">
          <div className="space-y-4">
            <Label htmlFor="category">Category Name</Label>
            <Input id="category" placeholder="Enter New Category" />
          </div>

          <AlertDialog>
            <AlertDialogTrigger>
              <div className="flex justify-end space-x-4">
                <Button type="submit">Submit</Button>
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Adding new Category</AlertDialogTitle>
                <AlertDialogDescription>
                  This action will add another main category to the database.
                  Are you sure about this?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Yes</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>
    </form>
  );
}
