import { OrganizationSwitcher } from '@clerk/nextjs';
import React from 'react';

const OrganizationIdPage = () => {
    return (
        <div>
            <OrganizationSwitcher
                hidePersonal
            />

        </div>
    );
};

export default OrganizationIdPage;