import Projects from "@/components/Projects";

export const metadata = {
  title: "Projects | Your Name",
  description: "View all my projects and case studies",
};

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <Projects />
    </div>
  );
}
