import { TextShimmer } from '@/components/ui/text-shimmer';

function TextShimmerBasic() {
  return (
    <TextShimmer className="font-mono text-sm" duration={1}>
      Generating code...
    </TextShimmer>
  );
}

function TextShimmerColor() {
  return (
    <TextShimmer
      duration={1.2}
      className="text-xl font-medium 
        [--base-color:theme(colors.red.600)] 
        [--base-gradient-color:theme(colors.blue.200)] 
        dark:[--base-color:theme(colors.blue.700)] 
        dark:[--base-gradient-color:theme(colors.blue.400)]"
    >
      Hi, how are you?
    </TextShimmer>
  );
}

// Page component: renders both examples
export default function Page() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Text Shimmer Examples</h1>
      <div className="space-y-2">
        <h2 className="font-semibold">Basic:</h2>
        <TextShimmerBasic />
      </div>
      <div className="space-y-2">
        <h2 className="font-semibold">Colored:</h2>
        <TextShimmerColor />
      </div>
    </div>
  );
}
