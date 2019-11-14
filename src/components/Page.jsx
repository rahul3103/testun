import { connect } from 'react-redux';
import Clock from './Clock';
import AddCount from './AddCount';
import Links from './Links';

const Page = ({ title, linkTo, lastUpdate, light }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <AddCount />
      <Links linkTo={linkTo} />
    </div>
  );
};

const mapStateToProps = ({ clock }) => ({
  lastUpdate: clock.lastUpdate,
  count: clock.count
});
export default connect(mapStateToProps)(Page);
