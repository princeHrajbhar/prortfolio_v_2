import { useState } from "react";
import { Container, Heading, FormControl, FormLabel, Input, Textarea, Button, useToast } from "@chakra-ui/react";
import { sendContactEmail } from "../lib/email";

const ContactPage = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await sendContactEmail(formData);
      setFormData({ name: "", email: "", subject: "", message: "" });
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to send message.",
        status: "error",
        duration: 2000,
        position: "top",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxW="lg" mt={8}>
      <Heading>Contact Us</Heading>
      <FormControl mt={4}>
        <FormLabel>Name</FormLabel>
        <Input type="text" name="name" value={formData.name} onChange={handleChange} />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" value={formData.email} onChange={handleChange} />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Subject</FormLabel>
        <Input type="text" name="subject" value={formData.subject} onChange={handleChange} />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Message</FormLabel>
        <Textarea name="message" value={formData.message} onChange={handleChange} />
      </FormControl>
      <Button mt={4} colorScheme="blue" isLoading={loading} onClick={handleSubmit}>Send Message</Button>
    </Container>
  );
};

export default ContactPage;
