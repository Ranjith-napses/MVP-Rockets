import CounterText from "../atoms/CounterText";

export default function StatBlock({ value, labelRight,suffix, labelBottom }) {
  return (
    <div className="flex-1 p-3 px-3 py-2 md:py-8 flex  justify-center">
      <div>
     <CounterText value={value} suffix={suffix} />
        <p className="text-white text-sm md:text-base font-semibold leading-tight mt-1">
          {labelRight}<br />{labelBottom}
        </p>
      </div>
    </div>
  );
}