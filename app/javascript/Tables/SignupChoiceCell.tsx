import { CellProps } from 'react-table';

function SignupChoiceCell<RowType extends { counted?: boolean | null }, ValueType>({
  value,
  row: { original },
}: CellProps<RowType, ValueType>) {
  if (original.counted) {
    return <>{value}</>;
  }

  return <>N/C</>;
}

export default SignupChoiceCell;
