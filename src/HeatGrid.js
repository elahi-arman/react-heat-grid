import React from 'react';
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'

import './HeatGrid.css';

/**
  * A HeatGrid component that can render individual tooltips for elements.
  *
  * @version 0.0.1
  * @author [Arman Elahi](https://github.com/elahi-arman)
  *
  */

export const HeatGrid = (props) => (
  <div className={`HeatGrid ${props.containerClassName}`}>
    {
      props.data.map((square, index) => (
        <div
          key={index}
          className={`square ${props.squareClassName}`}
          style={{background: props.colorMappings[square.color], opacity: square.opacity}}
          data-tip
          data-for={index}>
        </div>
      ))
    }
    {
      props.data.map((square, index) =>
        !!(square.tooltip) &&
         <ReactTooltip
            key={index}
            class={`tooltip ${props.tooltipProps.className}`}
            {...props.tooltipProps}
            id={index.toString()}>
              {square.tooltip}
          </ReactTooltip>
      )
    }
  </div>
)

HeatGrid.propTypes = {
  /** The dataset to render. If there's no tooltip property, none will be created
  The color property should match something from the colorMappings object you pass */
  data: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    opacity: PropTypes.number,
    tooltip: PropTypes.string
  })).isRequired,
  /** Mappings for color names, should be uppercase a la constants */
  colorMappings: PropTypes.object.isRequired,
  /** Props to pass in for each tooltip: https://github.com/wwayne/react-tooltip */
  tooltipProps: PropTypes.object,
  /** Custom css class for styling the squares in general */
  squareClassName: PropTypes.string,
  /** Custom css class for styling the container, should give a height and width */
  containerClassName: PropTypes.string
}

HeatGrid.defaultProps = {
  data: [],
  colorMappings: {
    RED: '#eb3b5a',
    GREEN: '#20bf6b',
    BLUE: '#3867d6',
    YELLOW: '#f7b731',
    ORANGE: '#fa8231',
    TEAL: '#0fb9b1',
    PURPLE: '#a55eea',
    GRAY: '#d1d8e0'
  },
  tooltipProps: {
    className: '',
    effect: 'solid',
    place: 'right'
  },
  squareClassName: '',
  containerClassName: ''
}

export default HeatGrid;
