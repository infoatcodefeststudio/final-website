import { Link } from "react-router-dom";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import PageHero from "@/components/site/page-hero.tsx";

export default function CustomTechHero() {
  return (
    <PageHero
      eyebrow="Custom Technology"
      title="Need Something Custom?"
      description="Every business runs differently. When a ready-to-deploy product isn't the right fit, our team designs and builds custom technology around your exact workflows."
    >
      <Button asChild size="lg">
        <Link to="/contact">
          <MessageSquare className="size-4" />
          Discuss Your Requirement
        </Link>
      </Button>
      <Button asChild size="lg" variant="secondary">
        <Link to="/solutions">
          Explore Solutions
          <ArrowUpRight className="size-4" />
        </Link>
      </Button>
    </PageHero>
  );
}
