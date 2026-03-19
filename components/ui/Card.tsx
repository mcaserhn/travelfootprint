import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`
      bg-white
      rounded-lg
      shadow-md
      p-4
      ${className}
    `}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`
      pb-2
      border-b
      border-aden-light-grey
      mb-4
      ${className}
    `}>
      {children}
    </div>
  );
};

export const CardBody: React.FC<CardProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`
      ${className}
    `}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<CardProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`
      pt-4
      border-t
      border-aden-light-grey
      mt-4
      ${className}
    `}>
      {children}
    </div>
  );
};