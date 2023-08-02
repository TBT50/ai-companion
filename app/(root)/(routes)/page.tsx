import { UserButton } from "@clerk/nextjs";

const RootPage = () => {
  return (
    <div>
      PROTECTED
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default RootPage;
