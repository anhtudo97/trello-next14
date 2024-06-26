import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import { Plus } from 'lucide-react';
import React from 'react';
import MobileSidebar from './mobile-sidebar';

const Navbar = () => {
    return (
        <nav className="px-4 fixed z-50 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center">
            {/* Mobile sidebar */}

            <MobileSidebar />
            
            <div className="flex items-center gap-x-4">
                <div className="hidden md:flex">
                    <Logo />
                </div>
                <Button variant={'primary'} size={"sm"} className="rounded-sm hidden md:block h-auto py-1.5 px-2">
                    Create
                </Button>
                <Button variant={'primary'} size={"sm"} className="rounded-sm block md:hidden">
                    <Plus className="size-4" />
                </Button>
            </div>
            <div className="ml-auto flex items-center gap-x-2">
                <OrganizationSwitcher
                    hidePersonal
                    afterCreateOrganizationUrl={"/organization/:id"}
                    afterSelectOrganizationUrl={"/organization/:id"}
                    afterLeaveOrganizationUrl={"/select-org"}
                    appearance={{
                        elements: {
                            rootBox: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        }
                    }}
                />
                <UserButton
                    afterSignOutUrl='/'
                    appearance={{
                        elements: {
                            avatarBox: {
                                height: 30,
                                width: 30
                            }
                        }
                    }}
                />
            </div>
        </nav>
    );
};

export default Navbar;