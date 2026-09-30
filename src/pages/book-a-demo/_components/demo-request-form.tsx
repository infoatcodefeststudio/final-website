import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CalendarCheck, CheckCircle2, Mail } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { submitLead } from "@/lib/submit-lead.ts";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import { products } from "@/lib/products.ts";
import { SITE_EMAIL } from "@/lib/site.ts";

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name"),
  companyName: z.string().trim().min(1, "Enter your company name"),
  email: z.string().trim().email("Enter a valid business email"),
  phone: z.string().trim().min(6, "Enter a valid phone number"),
  designation: z.string().trim().min(1, "Enter your designation"),
  productSlug: z.string().min(1, "Select a product"),
  businessType: z.string().trim().min(1, "Enter your business type"),
  numberOfLocations: z.string().trim().min(1, "Enter number of locations"),
  message: z.string().trim().min(10, "Tell us a little about your requirement"),
});

type FormValues = z.infer<typeof formSchema>;

export default function DemoRequestForm() {
  const [searchParams] = useSearchParams();
  const preselectedProduct = searchParams.get("product") ?? "";
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      designation: "",
      productSlug: products.some((product) => product.slug === preselectedProduct)
        ? preselectedProduct
        : "",
      businessType: "",
      numberOfLocations: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      await submitLead({
        source: "demo",
        fullName: values.fullName,
        companyName: values.companyName,
        email: values.email,
        phone: values.phone,
        designation: values.designation,
        productSlug: values.productSlug,
        businessType: values.businessType,
        numberOfLocations: values.numberOfLocations,
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
                <FormLabel>Full Name</FormLabel>
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
                <FormLabel>Company Name</FormLabel>
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
                <FormLabel>Business Email</FormLabel>
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
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="designation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Designation</FormLabel>
                <FormControl>
                  <Input placeholder="Your role or job title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="productSlug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Product</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose a product" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {products.map((product) => (
                      <SelectItem key={product.slug} value={product.slug}>
                        {product.shortName}
                      </SelectItem>
                    ))}
                    <SelectItem value="custom">
                      Custom Technology Solution
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="businessType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Type</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. logistics, retail, manufacturing" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="numberOfLocations"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Locations</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. number of sites or branches" {...field} />
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
                <FormLabel>Message / Requirement</FormLabel>
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

          <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <Button
              type="submit"
              size="lg"
              disabled={form.formState.isSubmitting}
              className="sm:w-auto"
            >
              <CalendarCheck className="size-4" />
              {form.formState.isSubmitting ? "Submitting..." : "Request Demo"}
            </Button>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-4" />
              Or email us directly at {SITE_EMAIL}
            </a>
          </div>
        </form>
      </Form>
    </div>
  );
}
