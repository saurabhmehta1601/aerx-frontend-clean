import TeamMember from "./TeamMember";

export default function TeamSection() {
  return (
    <section className="pt-[227px] pb-[269px] px-20" id="aboutUs">
      <h2 className="font-bold text-[40px] leading-[57px] tracking-[0.2] text-center">
        Meet the Team
      </h2>
      <p className="text-sm font-medium leading-5 tracking-[0.2] text-center mb-[67px]">
        Meet the awesome team behind Aerx
      </p>
      <div className="grid grid-cols-3 gap-4">
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
      </div>
    </section>
  );
}
