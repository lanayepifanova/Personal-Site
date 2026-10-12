import { Entry } from "@/components/Plain";

const rcPlaneIngredients = [
  { name: "Motor and Propellers", detail: "A2212 13T 1000KV brushless motor kit with 30A ESC, 1045 propellers and mount" },
  { name: "Speed Controller", detail: "Flycolor 40A ESC, 2–4S, with 5V 3A BEC" },
  { name: "Battery", detail: "OVONIC 3S 2200mAh 50C LiPo, pack of 2" },
  { name: "Servos", detail: "MG90S 9g metal gear micro servos, pack of 4" },
  { name: "Transmitter", detail: "RadioMaster Pocket, ELRS version, Mode 2" },
  { name: "Receiver", detail: "RadioMaster ER8 ELRS PWM receiver" },
  { name: "Battery Charger", detail: "6A balance charger and discharger for 1S–6S packs" },
  { name: "Foam Board", detail: "Flipside white foam board, 20 × 30 in, pack of 10" },
  {
    name: "Pushrods and Control Horns",
    detail: "1.5 × 450 mm Z-bend pushrods with linkage stoppers and nylon control horns, 10 of each",
  },
  { name: "Transmitter Batteries", detail: "RadioMaster 18650 3200mAh 3.7V Li-ion cells, pack of 2" },
];

// The engineering tab. (Engineering.tsx holds the resume tab's job list.)
export default function EngineeringProjectsSection() {
  return (
    <div className="space-y-10">
      <Entry title="Amateur RC Plane (in progress)">
        <ul className="list-disc pl-6">
          <li>goal: get a simple plane to fly, then build a quadcopter, then a VTOL plane</li>
          <li>later on, i want to attach a camera to take footage</li>
        </ul>
        <p>
          <u>ingredients</u>:
        </p>
        <ul className="list-disc pl-6">
          {rcPlaneIngredients.map((item) => (
            <li key={item.name}>
              {item.name}: {item.detail}
            </li>
          ))}
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
