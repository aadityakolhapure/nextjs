"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "@/app/globals.css";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(4, {
    message: "Subject must be at least 4 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [status, setStatus] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setStatus("sending");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div 
      className="min-h-screen flex justify-center items-center p-4"
      style={{ background: "#FEF3E2" }}
    >
      <Card className="w-full max-w-lg border-none shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle 
            className="text-3xl font-bold text-center"
            style={{ color: "#FA812F" }}
          >
            Contact Me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel style={{ color: "#FA812F" }}>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border-2 focus:ring-2"
                        style={{ 
                          borderColor: "#FAB12F",
                          backgroundColor: "white"
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel style={{ color: "#FA812F" }}>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        className="border-2 focus:ring-2"
                        style={{ 
                          borderColor: "#FAB12F",
                          backgroundColor: "white"
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel style={{ color: "#FA812F" }}>Subject</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border-2 focus:ring-2"
                        style={{ 
                          borderColor: "#FAB12F",
                          backgroundColor: "white"
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel style={{ color: "#FA812F" }}>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="min-h-[120px] border-2 focus:ring-2"
                        style={{ 
                          borderColor: "#FAB12F",
                          backgroundColor: "white"
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full text-white transition-colors"
                style={{ 
                  backgroundColor: "#FA4032",
                  hover: { backgroundColor: "#FA812F" }
                }}
                disabled={status === "sending"}
              >
                Send Message
              </Button>

              {status === "sending" && (
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>Sending message...</AlertDescription>
                </Alert>
              )}
              
              {status === "success" && (
                <Alert className="bg-green-50">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-600">
                    Message sent successfully!
                  </AlertDescription>
                </Alert>
              )}
              
              {status === "error" && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Failed to send message. Please try again.
                  </AlertDescription>
                </Alert>
              )}
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;