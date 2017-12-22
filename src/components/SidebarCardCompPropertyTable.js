import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import SidebarTableTd from './SidebarTableTd';
import SidebarTableTh from './SidebarTableTh';
import {
  asCurrencyHandleNull,
  asCurrencyWithCentsHandleNull,
  asDateHandleNull,
  asFormattedFloatHandleNull,
  asFormattedNumberHandleNull,
  asPercentageHandleNull,
  asStringHandleNull,
} from '../helpers';

const SidebarCardCompPropertyTable = ({ property, sortComps, compCardSort }) => {
  const keys = {
    property_distance: {
      title: 'DISTANCE',
      format: asFormattedFloatHandleNull,
      width: 72,
    },
    property_year_built: {
      title: 'YEAR BUILT',
      format: asStringHandleNull,
      width: 55,
    },
    property_total_units: {
      title: '# UNITS',
      format: asFormattedNumberHandleNull,
      width: 55,
    },
    property_avg_unit_monthly_rent: {
      title: 'RENT/UNIT',
      format: asCurrencyWithCentsHandleNull,
      width: 75,
    },
    property_avg_unit_rent_per_sq_ft: {
      title: 'RENT/SF',
      format: asCurrencyWithCentsHandleNull,
      width: 60,
    },
    property_occupancy: {
      title: 'OCCUPANCY',
      format: asPercentageHandleNull,
      width: 70,
    },
    property_price_per_unit: {
      title: '$/UNIT',
      format: asCurrencyHandleNull,
      width: 70,
    },
    property_sales_date: {
      title: 'SALES DATE',
      format: asDateHandleNull,
      width: 80,
      sortType: 'date',
    },
    property_cap_rate: {
      title: 'CAP RATE',
      format: asPercentageHandleNull,
      width: 65,
    },
  };

  const relevantProps = Object.keys(keys).reduce((obj, key) => (
    property[key] !== undefined ?
    {
      ...obj,
      [key]: {
        ...keys[key],
        value: property[key],
      },
    } :
    obj),
  {});

  const columns = Object.keys(relevantProps).map(key => ({
    Header: () => (
      <SidebarTableTh
        id={key}
        compCardSort={compCardSort}
        handleClick={() => sortComps(key, relevantProps[key].sortType)}
        content={relevantProps[key].title}
      />
    ),
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

SidebarCardCompPropertyTable.propTypes = {
  property: PropTypes.shape({}),
  sortComps: PropTypes.func,
  compCardSort: PropTypes.object,
};

export default SidebarCardCompPropertyTable;
