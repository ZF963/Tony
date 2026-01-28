import { TextShimmer } from '@/components/ui/text-shimmer';
import localFont from 'next/font/local';

const flexingRegular = localFont({
  src: '../fonts/flexing-regular.otf',
  variable: '--font-flexing-regular',
  display: 'swap',
});

function TextShimmerBasic() {
  return (
    <TextShimmer className={`${flexingRegular.variable} font-flexing-regular text-[70px] leading-[1.1]`} duration={1}>
      Gold Sohn
    </TextShimmer>
  );
}



// Page component: renders both examples
export default function Page() {
  return (
    <div className="space-y-10">
     
      <div className="space-y-3">
        
        <TextShimmerBasic />
      </div>
      <div className="space-y-3">
      
      </div>
    </div>
  );
}
