import { Container } from '@/components/container';
import { Logo, Search, UserMenu } from '@/components/navbar';

export const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b">
        <Container>
          <div
            className="
              flex 
              flex-row 
              items-center 
              justify-between
              gap-3
              md:gap-0
          "
          >
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};
