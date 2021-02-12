import News from './News';
import PropTypes from 'prop-types';

const List = ({news}) => {
     return (
          <div className="row">
               {news.map( n => (
                    <News
                         key={n.url}
                         n={n}
                    />
               ))}
          </div>
     );
}

List.propTypes = {
     news: PropTypes.array.isRequired
}
 
export default List;