export default function AboutEducation() {
  const education = [
    {
      institution: "Sri Venkateswara University",
      degree: "Master of Computer Applications (MCA)",
      grade: "8.2 CGPA",
      duration: "2021 – 2023",
      location: "Tirupati, Andhra Pradesh",
    },
    {
      institution: "The Adoni Arts and Science College",
      degree: "Bachelor of Science (B.Sc)",
      grade: "8.0 CGPA",
      duration: "2018 – 2021",
      location: "Adoni, Andhra Pradesh",
    },
    {
      institution: "Sri Sathya Sai Jr College",
      degree: "Intermediate (10+2) in MPC",
      grade: "93.1%",
      duration: "2016 – 2018",
      location: "Ananthapur, Andhra Pradesh",
    },
  ];

  return (
    <section className="space-y-6 border rounded-lg p-4">
      <h2 className="text-2xl font-bold ">Education</h2>

      {education.map((edu, idx) => (
        <div key={idx} className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Left Section: Institution & Degree */}
          <div className="mb-1 md:mb-0">
            <h3 className="font-semibold text-lg">{edu.institution}</h3>
            <p className="italic text-sm text-muted-foreground">
              {edu.degree} – {edu.grade}
            </p>
          </div>

          {/* Right Section: Duration & Location */}
          <div className="text-right md:text-right">
            <p className="font-semibold text-sm">{edu.duration}</p>
            <p className="italic text-sm text-muted-foreground">{edu.location}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
