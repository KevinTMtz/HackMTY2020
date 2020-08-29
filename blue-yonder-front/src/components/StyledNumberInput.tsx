import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import styled from '@emotion/styled';

const StyledInp = styled(Input)`
  input {
    text-align: right;
  }
`;

interface StyledInputProps {
  title: string;
  unit: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledNumberInput: React.FC<StyledInputProps> = ({
  title,
  unit,
  value,
  onChange,
}) => (
  <FormControl>
    <StyledInp
      value={value}
      type="number"
      onChange={onChange}
      endAdornment={<InputAdornment position="end">{unit}</InputAdornment>}
    />
    <FormHelperText>{title}</FormHelperText>
  </FormControl>
);

export default StyledNumberInput;
