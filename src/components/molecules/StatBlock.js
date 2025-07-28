
import CounterText from "../atoms/CounterText";

export default function StatBlock({ value, suffix, labelRight, labelBottom }) {
  return (
    <div className="flex-1 flex justify-center p-3 md:px-4 md:py-8">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-1 md:space-y-0 md:space-x-3">
     
        <div>
          <CounterText value={value} suffix={suffix} />
        </div>

      
        <div className="text-white text-center md:text-left">
          <p className="text-sm md:text-base font-semibold leading-tight">
            {labelRight}<br />
            {labelBottom}
          </p>
        </div>
      </div>
    </div>
  );
}
