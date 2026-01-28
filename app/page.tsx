import { TextShimmer } from '@/components/ui/text-shimmer';

function TextShimmerBasic() {
  return (
    <TextShimmer className="font-mono text-[70px] leading-[1.1]" duration={1}>
      Generating code...
    </TextShimmer>
  );
}

function TextShimmerColor() {
  return (
    <TextShimmer
      duration={1.2}
      className="text-[70px] leading-[1.1] font-medium 
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
    <div className="space-y-10">
      <h1 className="text-[70px] leading-[1.1] font-bold">Text Shimmer Examples</h1>
      <div className="space-y-3">
        <h2 className="text-[70px] leading-[1.1] font-semibold">Basic</h2>
        <TextShimmerBasic />
      </div>
      <div className="space-y-3">
        <h2 className="text-[70px] leading-[1.1] font-semibold">Colored</h2>
        <TextShimmerColor />
      </div>
    </div>
  );
}
