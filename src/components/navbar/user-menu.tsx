'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MenuItem } from '@/components/navbar';
import { Avatar } from '../avatar';
import { useRegisterModal } from '@/hooks';

function UserMenu() {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = useCallback(() => setOpen((prev) => !prev), []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          // onClick={onRent}
          className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={null} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            {false ? (
              <>
                <MenuItem
                  label="My trips"
                  onClick={() => router.push('/trips')}
                />
                <MenuItem
                  label="My favorites"
                  onClick={() => router.push('/favorites')}
                />
                <MenuItem
                  label="My reservations"
                  onClick={() => router.push('/reservations')}
                />
                <MenuItem
                  label="My properties"
                  onClick={() => router.push('/properties')}
                />
                {/* <MenuItem label="Airbnb your home" onClick={rentModal.onOpen} /> */}
                <hr />
                {/* <MenuItem label="Logout" onClick={() => signOut()} /> */}
              </>
            ) : (
              <>
                {/* <MenuItem label="Login" onClick={loginModal.onOpen} /> */}
                <MenuItem label="Sign up" onClick={registerModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export { UserMenu };
