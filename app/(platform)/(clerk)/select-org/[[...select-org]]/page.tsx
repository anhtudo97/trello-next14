import { OrganizationList } from '@clerk/nextjs';
import React from 'react'

const CreateOrganizationPage = () => {
  return (
    <div>
        <OrganizationList
            hidePersonal
            afterCreateOrganizationUrl="/organization/:id"
            afterSelectOrganizationUrl="/organization/:id"
        />
    </div>
  )
}

export default CreateOrganizationPage