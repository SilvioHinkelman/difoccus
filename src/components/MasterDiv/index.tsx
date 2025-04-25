const MasterDiv = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-6 md:px-[48px] lg:px-[80px] 2xl:px-[160px] w-full flex justify-center">
      <div className="w-full max-w-[1180px] bg-gray-700">{children}</div>
    </div>
  );
};

export default MasterDiv;
