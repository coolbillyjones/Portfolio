interface MarqueeProps {
  text: string;
}

const Marquee = ({ text }: MarqueeProps) => {
  return (
    <div className="marquee bg-black text-[var(--retro-yellow)]">
      <span className="font-['VT323'] text-sm">{text}</span>
    </div>
  );
};

export default Marquee;
