"use client";

import { Accordion, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { AccordionContent, AccordionItem } from '@radix-ui/react-accordion';
import { Activity, CreditCard, Layout, Settings } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

export type Organization = {
    id: string;
    slug: string;
    imageUrl: string;
    name: string;
};

type NavItemProps = {
    isExpanded: boolean;
    isActive: boolean;
    organization: Organization;
    onExpand: (id: string) => void;
};

const NavItem = ({ isActive, isExpanded, onExpand, organization }: NavItemProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const routes = [
        {
            label: "Boards",
            icon: <Layout className="size-4 mr-2" />,
            href: `/organization/${organization.id}`
        },
        {
            label: "Activity",
            icon: <Activity className="size-4 mr-2" />,
            href: `/organization/${organization.id}/activity`
        },
        {
            label: "Settings",
            icon: <Settings className="size-4 mr-2" />,
            href: `/organization/${organization.id}/settings`
        },
        {
            label: "Billing",
            icon: <CreditCard className="size-4 mr-2" />,
            href: `/organization/${organization.id}/billing`
        },
    ];


    const onClick = useCallback((href: string) => {
        router.push(href);
    }, []);

    return (
        <AccordionItem
            value={organization.id}
            className="border-none"
        >
            <AccordionTrigger
                onClick={() => onExpand(organization.id)}
                className={
                    cn("flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
                        isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
                    )
                }
            >
                <div className="flex items-center gap-x-2">
                    <div className="size-7 relative">
                        <Image
                            fill
                            src={organization.imageUrl}
                            alt="Organization"
                            className="rounded-sm object-cover"
                        />
                    </div>
                </div>
                <span className="font-medium text-sm">
                    {organization.name}
                </span>
            </AccordionTrigger>
            <AccordionContent className="pt-1 text-neutral-700">
                {
                    routes.map(route => {
                        return <Button
                            key={route.href}
                            size={'sm'}
                            onClick={() => onClick(route.href)}
                            className={
                                cn("w-full font-normal justify-start pl-10 mb-1",
                                    pathname === route.href && "bg-sky-500/10 text-sky-700"
                                )
                            }
                            variant={'ghost'}
                        >
                            {route.icon}
                            {route.label}
                        </Button>;
                    })
                }
            </AccordionContent>
        </AccordionItem>
    );
};

export default NavItem;