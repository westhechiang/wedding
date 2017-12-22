import StyledReactTable from './StyledReactTable';
import { theme } from '../../ui';

const StyledRentCompReactTable = StyledReactTable.extend`
  background: ${theme.color.white};
  div.rt-thead {
    flex-direction: row;
    &.-headerGroups {

      .rt-tr {

        .rt-th {
          border-right: 1px solid ${theme.color.black};

          &:last-child {
            border-right: none;
          }
        }
      }
    }

    .rt-th {

      &:nth-child(4n + 2) {
        border-right: 1px solid ${theme.color.black};
      }

      &:nth-child(-n + 5) {
        border-right: none;
      }

      &:last-child {
        border-right: none;
      }
    }
  }

  div.rt-tbody {

    .rt-tr-group {
      border-bottom: 1px solid ${theme.color.gray5};

      &:last-child: {
        border-bottom: 1px solid ${theme.color.gray5};
      }
    }

    .rt-td {

      &:nth-child(4n + 2) {
        border-right: 1px solid ${theme.color.black};
      }

      &:nth-child(-n + 5) {
        border-right: none;
      }

      &:last-child {
        border-right: none;
      }
    }
  }
`;

export default StyledRentCompReactTable;
