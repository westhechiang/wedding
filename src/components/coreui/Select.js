import Select from 'react-select';
import styled from 'styled-components';
import 'react-select/dist/react-select.css';
import { theme } from '../../ui';

const themes = {
  blueLine: `
    background: transparent;
    border: none;
    border-bottom: 1px solid ${theme.color.cyan4};
    color: ${theme.color.white};

    &::placeholder {
      color: ${theme.color.cyan4};
    }

    &.is-open {

      .Select-control {
        color: ${theme.color.white};

        .Select-arrow-zone {

          .Select-arrow {
            border-color: transparent transparent ${theme.color.cyan4};
          }
        }
      }
    }

    &.has-value.Select--single {
      .Select-control {

        .Select-value {

          .Select-value-label {
            color: ${theme.color.white};
          }
        }
      }

      &.is-focused {
        .Select-control {
          height: 30px;

          .Select-value {
            height: 30px;

            .Select-value-label {
              color: ${theme.color.white};
            }
          }
        }
      }
    }

    .Select-control {

      .Select-input {

        input {
          color: ${theme.color.white};
        }
      }

      .Select-placeholder {
        color: ${theme.color.cyan4};
        font-size: ${theme.font.large};
      }

      .Select-arrow-zone {

        .Select-arrow {
          border-color: ${theme.color.cyan4} transparent transparent;
        }
      }
    }
  `,
  sidebar: `
    background: transparent;
    border: none;
    border-radius: ${theme.borderRadius};
    color: ${theme.color.white};
    font-size: ${theme.font.size.xxsmall};
    font-weight: ${theme.font.weight.semiBold};
    height: 25px;

    .Select-menu-outer {
      max-height: 100px;
      overflow-y: auto;

      .Select-option {
        font-weight: ${theme.font.weight.normal};
        font-size: ${theme.font.size.xxsmall};
      }
    }

    .Select-control {

      .Select-input {

        input {
          color: ${theme.color.white};
          font-size: ${theme.font.size.xxsmall};
          font-weight: ${theme.font.weight.semiBold};
        }
      }

      .Select-placeholder {
        color: ${theme.color.white};
        font-size: ${theme.font.size.xxsmall};
        font-weight: ${theme.font.weight.semiBold};
      }

      .Select-clear-zone {
        box-sizing: border-box;
        height: 30px;
      }

      .Select-arrow-zone {

        .Select-arrow {
          border-color: ${theme.color.gray3} transparent transparent;
        }
      }
    }

    &.is-open {

      .Select-control {

        .Select-arrow-zone {

          .Select-arrow {
            border-color: transparent transparent ${theme.color.gray3};
          }
        }
      }
    }

    &.has-value.Select--single {
      .Select-control {

        .Select-value {

          .Select-value-label {
            color: ${theme.color.white};
            font-size: ${theme.font.size.xxsmall};
            font-weight: ${theme.font.weight.semiBold};
          }
        }
      }

      &.is-focused {
        .Select-control {
          height: 30px;

          .Select-value {
            height: 30px;

            .Select-value-label {
              color: ${theme.color.white};
              font-size: ${theme.font.size.xxsmall};
              font-weight: ${theme.font.weight.semiBold};
            }
          }
        }
      }
    }
  `,
  default: `
    background: ${theme.color.grayExtraExtraExtraLight};
    border: 1px solid ${theme.color.grayExtraLight};
    border-radius: ${theme.borderRadius};
    color: ${theme.color.grayExtraExtraDark};

    &::placeholder {
      color: ${theme.color.grayExtraExtraDark};
    }

    &.is-open {

      .Select-control {
        color: ${theme.color.grayExtraExtraDark};

        .Select-arrow-zone {

          .Select-arrow {
            border-color: transparent transparent ${theme.color.grayLight};
          }
        }
      }
    }

    &.has-value.Select--single {
      .Select-control {

        .Select-value {

          .Select-value-label {
            color: ${theme.color.grayExtraExtraDark};
          }
        }
      }

      &.is-focused {
        .Select-control {
          height: 30px;

          .Select-value {
            height: 30px;

            .Select-value-label {
              color: ${theme.color.grayExtraExtraDark};
            }
          }
        }
      }
    }

    .Select-control {

      .Select-input {

        input {
          color: ${theme.color.grayExtraExtraDark};
        }
      }

      .Select-placeholder {
        color: ${theme.color.grayExtraExtraDark};
      }

      .Select-clear-zone {
        box-sizing: border-box;
        height: 30px;
      }

      .Select-arrow-zone {

        .Select-arrow {
          border-color: ${theme.color.grayLight} transparent transparent;
        }
      }
    }
  `,
};

const StyledSelect = styled(Select)`
  width: ${props => props.width || '100%'};
  height: 30px;

  &.is-open {

    .Select-control {
      background-color: transparent;
    }
  }

  &.has-value.Select--single {
    .Select-control {
      height: 28px;

      .Select-value {
        height: 28px;
        line-height: 28px;

        .Select-value-label {
          font-weight: ${theme.font.weight.light};
          font-family: ${theme.font.family};
          font-size: ${theme.font.small};
        }
      }
    }

    &.is-focused {
      .Select-control {
        height: 30px;

        .Select-value {
          height: 30px;

          .Select-value-label {
            font-weight: ${theme.font.weight.light};
            font-family: ${theme.font.family};
            font-size: ${theme.font.small};
          }
        }
      }
    }
  }

  .Select-menu-outer {
    background-color: ${theme.color.white};

    .Select-option {
      font-weight: ${theme.font.weight.light};
      font-family: ${theme.font.family};
      font-size: ${theme.font.small};
    }
  }

  .Select-control {
    height: 28px;
    background-color: transparent;
    border: none;

    &:hover {
      box-shadow: none;
    }

    .Select-input {
      height: 28px;

      input {
        font-weight: ${theme.font.weight.light};
        font-family: ${theme.font.family};
        font-size: ${theme.font.small};
      }
    }

    .Select-placeholder {
      line-height: 28px;
      background-color: transparent;
      font-weight: ${theme.font.weight.light};
      font-family: ${theme.font.family};
      font-size: ${theme.font.small};
    }
  }

  &::placeholder {
    font-weight: ${theme.font.weight.light};
    font-family: ${theme.font.family};
    font-size: ${theme.font.small};
  }

  &:focus {
    outline: none;
  }

  ${props => themes[props.theme] || themes.default}

`;

export default StyledSelect;

