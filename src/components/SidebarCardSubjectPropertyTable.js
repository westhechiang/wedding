/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import format from '../helpers';
import 'react-table/react-table.css';
import FlexContainer from './coreui/FlexContainer';
import SidebarTableTd from './SidebarTableTd';
import SidebarTableTh from './SidebarTableTh';

const SidebarCardSubjectPropertyTable = ({ property, sortComps, compCardSort }) => {
  const keys = [
    'property_distance',
    'property_year_built',
    'property_total_units',
    'property_avg_unit_monthly_rent',
    'property_avg_unit_rent_per_sq_ft',
    'property_occupancy',
    'property_price_per_unit',
    'property_sales_date',
    'property_cap_rate',
  ];

  const relevantProps = keys.reduce((obj, key) => (property[key] ?
    {
      ...obj,
      [key]: property[key],
    } :
    obj), {});

  const columns = Object.keys(relevantProps).map(key => ({
    Header: () => {
      return (
        <SidebarTableTh
          id={key}
          compCardSort={compCardSort}
          handleClick={() => sortComps(key, relevantProps[key].sortType)}
          content={relevantProps[key].title}
        />
      );
    },
    headerClassName: '',
    accessor: `${key}.value`,
    width: relevantProps[key].width,
    // eslint-disable-next-line
    Cell: ({ value }) => (
      <SidebarTableTd content={relevantProps[key].format(value)} />
    ),
  }));

  return (
    <ReactTable
      style={{ border: 'none', marginTop: '10px' }}
      getTheadProps={() => ({ style: { boxShadow: 'none' } })}
      getTheadThProps={() => ({ style: { padding: '3px 0' } })}
      getTrProps={() => ({ style: { padding: 0 } })}
      getThProps={() => ({
        style: {
          padding: 0,
          minWidth: 'none',
          textAlign: 'right',
        },
      })}
      getTdProps={() => ({
        style: {
          padding: 0,
          minWidth: 'none',
          textAlign: 'right',
        },
      })}
      columns={columns}
      defaultPageSize={1}
      data={[relevantProps]}
      showPagination={false}
      resizable={false}
      sortable={false}
    />
  );
};

SidebarCardSubjectPropertyTable.propTypes = {
  property: PropTypes.shape({}),
  sortComps: PropTypes.func,
  compCardSort: PropTypes.object,
};

export default SidebarCardSubjectPropertyTable;
