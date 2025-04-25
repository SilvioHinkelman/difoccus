const MasterDiv = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`px-6 md:px-[24px] lg:px-[80px]  w-full flex justify-center ${className}`}
    >
      <div className="w-full max-w-[1180px]">{children}</div>
    </div>
  );
};

export default MasterDiv;
