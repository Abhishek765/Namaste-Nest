'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';
import React, { useCallback } from 'react';
import { IconType } from 'react-icons';

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox = ({ icon: Icon, label, selected }: CategoryBoxProps) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString()); // add all query parameters
    }

    // adding our category label query
    const updatedQuery: any = {
      ...currentQuery,
      category: label
    };

    // if current category is already selected and if we click it then remove it
    if (params?.get('category') === label) {
      delete updatedQuery.category;
    }

    const finalRedirectUrl = qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery
      },
      { skipNull: true }
    );

    router.push(finalRedirectUrl);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        border-b-2
        hover:text-blue-800
        transition
        cursor-pointer
        ${selected ? 'border-b-blue-800' : 'border-transparent'}
        ${selected ? 'text-blue-800' : 'text-neutral-500'}
      `}>
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
