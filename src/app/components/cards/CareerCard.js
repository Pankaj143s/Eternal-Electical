export default function CareerCard({ job }) {
    return (
        <div className="w-full sm:w-[48%] lg:w-[30%] bg-[#2A2A2A] p-6 rounded-md shadow hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-[#F0F0F0] mb-2">{job.title}</h3>
            <p className="text-[#BBBBBB] mb-1">
                <strong>Location:</strong> {job.location}
            </p>
            <p className="text-[#BBBBBB] mb-3">
                <strong>Experience:</strong> {job.experience}
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#CCCCCC]">
                {job.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}