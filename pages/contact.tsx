import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
  const [status, setStatus] = useState("");
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setStatus("sending");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
    <div className="min-h-screen bg-[#fff] text-white p-8">
      {/* <h1 className="text-5xl font-bold text-center mb-16">Contact Us</h1> */}
      <div className="max-w-7xl mx-auto pt-5 px-4 md:px-4 lg:px-10 mb-4">
        <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl font-bold" >
          Contact Details
        </h2>
        
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Details Section */}
        <div className="bg-[#fa8638] rounded-3xl p-8">
          {/* <h2 className="text-3xl font-semibold mb-8">Contact Details</h2> */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-xl mb-2">Mail Id:</h3>
              <p>aadityakolhapure28@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Phone No:</h3>
              <p>8983081348</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Address:</h3>
              <p>Satara, Maharashtra, India - 415001</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-[#fff]">
          <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <input
                {...form.register("email")}
                placeholder="Email address"
                className="w-full bg-transparent border-b-2 border-[#FAB12F] p-3 focus:outline-none focus:border-[#FA812F] text-gray-500"
              />
              {form.formState.errors.email && (
                <p className="text-[#FA4032] mt-1">{form.formState.errors.email.message}</p>
              )}
            </div>
            
            <div>
              <input
                {...form.register("name")}
                placeholder="Name"
                className="w-full bg-transparent border-b-2 border-[#FAB12F] p-3 focus:outline-none focus:border-[#FA812F] text-gray-900"
              />
              {form.formState.errors.name && (
                <p className="text-[#FA4032] mt-1">{form.formState.errors.name.message}</p>
              )}
            </div>

            <div>
              <textarea
                {...form.register("message")}
                placeholder="Message"
                className="w-full bg-transparent border-b-2 border-[#FAB12F] p-3 focus:outline-none focus:border-[#FA812F] min-h-[100px] text-gray-900"
              />
              {form.formState.errors.message && (
                <p className="text-[#FA4032] mt-1">{form.formState.errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-[#FA4032] hover:bg-[#FA812F] text-white px-8 py-3 rounded-lg transition-colors"
              disabled={status === "sending"}
            >
              Submit
            </button>

            {status === "sending" && (
              <Alert className="bg-[#FEF3E2] text-[#FA812F]">
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
              <Alert className="bg-[#FA4032]/10 text-[#FA4032]">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Failed to send message. Please try again.
                </AlertDescription>
              </Alert>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;