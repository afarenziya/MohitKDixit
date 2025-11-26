import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
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
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message is required"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="bg-primary py-16 md:py-24 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Get in touch with our team for professional assistance and queries.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you have a question about our services, pricing, or need expert advice, our team is ready to answer all your questions.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <MapPin className="h-6 w-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-1">Our Office</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        1st Floor, 568, Niti Khand-3,<br />
                        Indirapuram, Ghaziabad – 201014<br />
                        Uttar Pradesh, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <Phone className="h-6 w-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-1">Call Us</h3>
                      <a href="tel:+919871775302" className="text-muted-foreground text-sm hover:text-primary transition-colors block">
                        +91 98717 75302
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <Mail className="h-6 w-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-1">Email Us</h3>
                      <a href="mailto:mohit@mohitkdixit.com" className="text-muted-foreground text-sm hover:text-primary transition-colors block">
                        mohit@mohitkdixit.com
                      </a>
                      <a href="mailto:mohitkdixitca@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors block">
                        mohitkdixitca@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Send us a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
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
                            <Input placeholder="+91 98765 43210" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} />
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
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Service Inquiry" {...field} />
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
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your requirements..." 
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg h-12">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-slate-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.965643565068!2d77.3784!3d28.6328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzU4LjEiTiA3N8KwMjInNDIuMiJF!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          title="Office Location"
        />
      </section>

      <Footer />
    </div>
  );
}
