import mobileOptions from '@/data/mobileOptions';

const NavBarMobile = () => {
  return (
    <div className="fixed bottom-0 left-0 flex w-full">
      <div className="flex w-full bg-darkmode-400 py-2 text-darkmode-200">
        {mobileOptions.map(({ icon, name }, index) => {
          return (
            <div key={index} className="flex grow flex-col items-center py-1">
              {icon}
              {name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavBarMobile;
