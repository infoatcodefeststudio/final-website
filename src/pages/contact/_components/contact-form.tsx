import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { submitLead } from "@/lib/submit-lead.ts";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name"),
  companyName: z.string().trim().min(1, "Enter your company name"),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().min(6, "Enter a valid phone number"),
  productOrService: z.string().trim().min(1, "Tell us the product or service"),
  message: z.string().trim().min(10, "Tell us a little about your requirement"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      productOrService: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      await submitLead({
        source: "contact",
        fullName: values.fullName,
        companyName: values.companyName,
        email: values.email,
        phone: values.phone,
        businessType: values.productOrService,
        message: values.message,
      });
      setIsSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center rounded-2xl border border-border bg-card p-10 text-center shadow-sm"
      >
        <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
          <CheckCircle2 className="size-7" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-foreground">
          Thank you for contacting Codefest Studio.
        </h3>
        <p className="mt-2 max-w-md text-muted-foreground">
          Our team will connect with you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid gap-5 sm:grid-cols-2"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input placeholder="Your company name" {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@company.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="productOrService"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel>Product / Service</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Product or service you're interested in"
                    {...field}
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
              <FormItem className="sm:col-span-2">
                <FormLabel>Requirement</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Briefly describe your requirements or questions"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="sm:col-span-2">
            <Button
              type="submit"
              size="lg"
              disabled={form.formState.isSubmitting}
              className="w-full sm:w-auto"
            >
              <Send className="size-4" />
              {form.formState.isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
