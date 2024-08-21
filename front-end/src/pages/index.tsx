
import { Seo } from "@/ui/components/seo/seo";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Footer } from "@/ui/components/navigation/footer";

export default function Home() {
  return (
    <>
      <Seo title="Coders Monkeys" description="Description..." />
      <Navigation/>
      <Footer/>
      
    </>
  );
}
