import StyledReactTable from './StyledReactTable';
import { theme } from '../../ui';

const StyledRentCompReactTable = StyledReactTable.extend`
  background: ${theme.color.white};

  div.rt-thead {

    &.-headerGroups {

      .rt-tr {

        .rt-th {
          border-right: 1px solid ${theme.color.black};

          &:nth-child(-n+1) {
            border-right: none;
          }

          &:last-child {
            border-right: none;
          }
        }
      }
    }

    .rt-th {

      &:nth-child(7n+1) {
        border-right: 1px solid ${theme.color.black};
      }

      &:nth-child(-n+1) {
        border-right: none;
      }

      &:last-child {
        border-right: none;
      }
    }
  }

  div.rt-tbody {

    .rt-tr-group {
      border-bottom: 1px solid ${theme.color.grayExtraLight};

      &:last-child: {
        border-bottom: 1px solid ${theme.color.grayExtraLight};
      }
    }

    .rt-td {
      &:nth-child(7n+1) {
        border-right: 1px solid ${theme.color.black};
      }

      &:nth-child(-n+1) {
        border-right: none;
      }

      :last-child {
        border-right: none;
      }
    }
  }
`;

export default StyledRentCompReactTable;
