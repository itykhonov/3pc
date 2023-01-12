import React, { FC } from 'react';
import Select, { OnChangeValue } from 'react-select';

export interface IOption {
  label: string;
  value: string;
}

export interface IProps {
  setFilterValue: (filterValue: IOption) => void;
  options: IOption[];
  placeholder: string;
}

export const Filter: FC<IProps> = ({
  setFilterValue,
  options,
  placeholder
}: IProps) => {
  const onChangeFilter = (selectedOption: OnChangeValue<IOption, boolean>) => {
    setFilterValue({
      value: (selectedOption as IOption).value,
      label: (selectedOption as IOption).label
    });
  };

  return (
    <Select
      className="filter-select"
      isSearchable={false}
      isMulti={false}
      options={options}
      onChange={onChangeFilter}
      placeholder={placeholder}
    />
  );
};
