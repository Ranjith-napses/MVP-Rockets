import PuzzleHex from "../atoms/PuzzleHex"

const tiles = [
  { icon: "/icons/idea.svg", title: "Ideation", description: "Brainstorming and concept development." },
  { icon: "/icons/product.svg", title: "Product Management", description: "Defining product goals and roadmap." },
  { icon: "/icons/qa.svg", title: "Quality Assurance", description: "Testing and calibrating the product." },
  { icon: "/icons/design.svg", title: "Design", description: "User-friendly interfaces and visuals." },
  { icon: "/icons/project.svg", title: "Project Management", description: "Planning, organizing, and executing the project." },
  { icon: "/icons/security.svg", title: "Infrastructure & Security", description: "Maintaining the technical foundation." },
  { icon: "/icons/dev.svg", title: "Development", description: "Building the product’s features and functionality." },
  { icon: "/icons/check.svg", title: "Compliance", description: "Testing and calibrating the product." }
]

export default function PuzzleHexGrid() {
  return (
    <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 max-w-[1200px] mx-auto px-4">
      {tiles.map((tile, index) => (
        <div
          key={index}
          className={`relative ${index % 2 === 1 ? 'mt-8 md:mt-10' : ''}`}
        >
          <PuzzleHex {...tile} index={index} />
        </div>
      ))}
    </div>
  )
}
