import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { Download, ExternalLink } from "lucide-react";

const AboutCTASection = () => (
  <div className="text-center space-y-4">
    <h2 className="text-2xl font-bold">Let's Work Together</h2>
    <p className="text-muted-foreground">
      I'm always interested in new opportunities and exciting projects.
    </p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Button>
        <Link to="/contact">Get In Touch</Link>
      </Button>
      <Button variant="outline">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <Download className="h-4 w-4 mr-2" />
          Download Resume
        </a>
      </Button>
      <Button variant="outline">
        <Link to="/projects" className="flex items-center">
          <ExternalLink className="h-4 w-4 mr-2" />
          View Projects
        </Link>
      </Button>
    </div>
  </div>
);

export default AboutCTASection;
