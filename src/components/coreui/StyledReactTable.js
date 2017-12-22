import styled from 'styled-components';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { theme } from '../../ui';

const StyledReactTable = styled(ReactTable)`
  background: ${theme.color.white};
  display: block;

  &.ReactTable {
    border: none;
    div.rt-table { overflow: visible; }
    div.rt-thead {

      &.-headerGroups {
        border-bottom: none;

        .rt-tr {
          background: ${theme.color.white};
        }
      }

      &.-header {
        border-bottom: 1px solid ${theme.color.gray5};
        box-shadow: none;
        background: ${theme.color.white};
      }

      .rt-th {
        border-right: none;
        padding: 10px;
        height: 100%;
        background: ${theme.color.white};

        &.-sort-asc {
          position: relative;
          box-shadow: none;

          &::after {
            _border-color: #000000 #000000 #505759 #000000;
            _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');
            border-color: transparent transparent #505759 transparent;
            border-style: solid;
            border-width: 0 3.5px 4px 3.5px;
            content: '';
            height: 0;
            line-height: 0px;
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            width: 0;
          }
        }

        &.-sort-desc {
          position: relative;
          box-shadow: none;

          &::after {
            _border-color: #505759 #000000 #000000 #000000;
            _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');
            border-color: #505759 transparent transparent transparent;
            border-style: solid;
            border-width: 4px 3.5px 0 3.5px;
            content: '';
            height: 0;
            line-height: 0px;
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            width: 0;
          }
        }
      }
    }
  }

  div.rt-tbody,
  div.rt-tfoot {
    overflow-y: hidden;
    box-shadow: none;

    .rt-tr-group {
      border-bottom: 1px solid ${theme.color.gray5};

      &:last-child: {
        border-bottom: 1px solid ${theme.color.gray5};
      }
    }

    .rt-td {
      border-right: none;
      padding: 10px;
    }
  }

  div.rt-tfoot {
    border-top: 1px solid ${theme.color.gray5};
  }

  .rt-resizable-header-content {
    height: 100%;
  }

  &.-striped {

    div.rt-tbody {
        background: ${theme.color.white};
      div.rt-tr {

        &:hover {
          background: ${theme.color.blue8} !important;

          div,
          a {
            color: ${theme.color.white} !important;
          }
        }

        &.-odd {
          background: ${theme.color.blue9};
        }
      }
    }
  }

  &.-highlight {
    
        div.rt-tbody {
    
          div.rt-tr {
    
            &:hover {
              background: ${theme.color.blue8} !important;
    
              div,
              a {
                color: ${theme.color.white} !important;
              }
            }
          }
        }
      }
`;

export default StyledReactTable;
