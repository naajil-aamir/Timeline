import PropTypes from 'prop-types'
import { Chrono } from "react-chrono";



const Timeline = ({items}) => {
    return (
        <div className="Width-700 margin-Auto padding-16 shadow">
            <Chrono cardHeight={250} items={items} scrollable={{scrollbar: true}}  />
        </div>
    )
  }

Timeline.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Timeline