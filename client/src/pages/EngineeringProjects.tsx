import { Entry } from "@/components/Plain";

// The engineering tab. (Engineering.tsx holds the resume tab's job list.)
export default function EngineeringProjectsSection() {
  return (
    <div className="space-y-10">
      <Entry title="Amateur RC Plane (in progress)">
        <ul className="list-disc pl-6">
          <li>goal: get a simple plane to fly, then build a quadcopter, then a VTOL plane</li>
          <li>later on, i want to attach a camera to take footage</li>
        </ul>
      </Entry>
      <Entry title="Indie Game Development (in progress)">
        <ul className="list-disc pl-6">
          <li>goal: make cute games and cute characters</li>
          <li>later on, understand how a game engine works</li>
        </ul>
      </Entry>
      <Entry title="Large Scale Bubble Wand (in progress)">
        <ul className="list-disc pl-6">
          <li>goal: blow really big bubbles with my friends</li>
        </ul>
      </Entry>
    </div>
  );
}
