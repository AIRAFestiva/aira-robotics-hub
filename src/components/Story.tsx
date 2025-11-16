import { Sparkles } from "lucide-react";

const Story = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="prose prose-lg max-w-none animate-fade-in">
            <div className="bg-background/80 backdrop-blur rounded-2xl p-8 md:p-12 shadow-xl border border-border space-y-6 leading-relaxed text-muted-foreground">
              <p className="text-lg first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                AIRA was born from a simple yet powerful observation: while technology rapidly advances, 
                the education system often struggles to keep pace. We saw countless young minds filled 
                with curiosity about robots, coding, and automation, but lacking the resources and 
                guidance to explore these passions.
              </p>

              <p className="text-lg">
                Our founders—Rohith S V, Hari Prasad, and Gagan Ramesh—each came from different 
                backgrounds in engineering and education, but shared a common vision: to democratize 
                robotics education and make it accessible to every school, regardless of their resources 
                or location.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 italic text-foreground bg-primary/5 p-6 rounded-r-lg my-8">
                "We believe that every child deserves the opportunity to be a creator, not just a 
                consumer of technology. The future belongs to those who can imagine, design, and 
                build—and that's exactly what we teach at AIRA."
              </blockquote>

              <p className="text-lg">
                Starting with just one school in Karnataka, we've grown to impact over 5,000 students 
                across multiple institutions. Each partnership reinforces our belief that when given 
                the right tools, mentorship, and environment, young minds can achieve extraordinary things.
              </p>

              <p className="text-lg">
                What sets AIRA apart is our commitment to hands-on learning. We don't just teach theory—
                we guide students through the entire journey of conceiving an idea, designing a solution, 
                building a prototype, and troubleshooting problems. This process mirrors real-world 
                engineering and instills problem-solving skills that extend far beyond robotics.
              </p>

              <p className="text-lg">
                Our approach has transformed classrooms into innovation labs where mistakes are learning 
                opportunities, where collaboration trumps competition, and where every student—regardless 
                of their background—can discover their potential as an engineer, programmer, or innovator.
              </p>

              <p className="text-lg">
                Today, AIRA stands as more than just a robotics education program. We're a movement 
                dedicated to reshaping how students engage with STEM subjects. We're building a 
                generation of confident problem-solvers who aren't intimidated by complexity but 
                energized by challenges.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mt-8">
                <p className="text-lg font-semibold text-foreground mb-3">
                  Our Promise to Schools and Students:
                </p>
                <ul className="space-y-2 text-base">
                  <li>✓ Comprehensive curriculum aligned with educational standards</li>
                  <li>✓ Expert trainers who inspire and guide</li>
                  <li>✓ Complete lab setup and ongoing support</li>
                  <li>✓ Real-world projects that build practical skills</li>
                  <li>✓ A learning environment that celebrates creativity and innovation</li>
                </ul>
              </div>

              <p className="text-lg font-semibold text-foreground pt-6">
                Join us in this journey to transform education, one robot at a time. Together, we're 
                not just preparing students for the future—we're empowering them to create it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
