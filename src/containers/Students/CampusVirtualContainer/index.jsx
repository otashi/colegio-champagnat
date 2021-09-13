import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { CampusVirtual } from '../../../pages/Students/CampusVirtual';

const CampusVirtualContainer = () => {
  const { content } = useContent('campus-virtual');

  return <CampusVirtual content={content} />;
};

export { CampusVirtualContainer };
