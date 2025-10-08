import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

const Biodata = () => {
  const personalInfo = [
    { label: "Full Name", value: "Prajwal H M" },
    { label: "Date of Birth", value: "October 2, 2005" },
    { label: "Age", value: "19 years" },
    { label: "Gender", value: "Male" },
    { label: "Nationality", value: "Indian" },
    { label: "Marital Status", value: "Single" },
    { label: "Religion", value: "Hindu" },
    { label: "Blood Group", value: "B+" }
  ];

  const contactInfo = [
    { label: "Email", value: "phm340701@gmail.com" },
    { label: "Phone", value: "+91 98765 43210" },
    { label: "Alternate Phone", value: "+91 87654 32109" },
    { label: "Address", value: "123 MG Road, Jayanagar" },
    { label: "City", value: "Bangalore" },
    { label: "State", value: "Karnataka" },
    { label: "PIN Code", value: "560011" },
    { label: "Country", value: "India" }
  ];

  const familyInfo = [
    { label: "Father's Name", value: "Harish M" },
    { label: "Father's Occupation", value: "Business Owner" },
    { label: "Mother's Name", value: "Manjula H" },
    { label: "Mother's Occupation", value: "Homemaker" },
    { label: "Siblings", value: "1 Sister" }
  ];

  const additionalInfo = [
    { label: "Languages Known", value: "English, Hindi, Kannada" },
    { label: "Hobbies", value: "Machine Learning, Coding, Reading Tech Blogs, Gaming" },
    { label: "Emergency Contact", value: "Harish M - +91 98765 43211" },
    { label: "LinkedIn", value: "linkedin.com/in/prajwalhm" },
    { label: "GitHub", value: "github.com/prajwalhm" },
    { label: "Portfolio", value: "prajwalhm.dev" }
  ];

  const InfoSection = ({ title, data }: { title: string; data: { label: string; value: string }[] }) => (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {data.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-3 border-b border-border last:border-0">
              <dt className="font-medium text-muted-foreground">{item.label}</dt>
              <dd className="md:col-span-2 text-foreground">{item.value}</dd>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm mb-4">
            <User className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Bio-data</h1>
          <p className="text-xl text-white/90">Personal Information</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8">
          {/* Personal Information */}
          <InfoSection title="Personal Information" data={personalInfo} />

          {/* Contact Information */}
          <InfoSection title="Contact Information" data={contactInfo} />

          {/* Family Information */}
          <InfoSection title="Family Information" data={familyInfo} />

          {/* Additional Information */}
          <InfoSection title="Additional Information" data={additionalInfo} />

          {/* Declaration */}
          <Card className="card-hover border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl">Declaration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                I hereby declare that all the information provided above is true and correct to the best of my knowledge and belief.
                I understand that any false information may result in the rejection of my application or termination of employment.
              </p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-medium">Prajwal H M</p>
                <p className="text-sm text-muted-foreground">Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Prajwal H M. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Biodata;
