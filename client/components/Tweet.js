import React from 'react';
import Sample from './Sample';
import Comments from './Test';

// const Single = React.createClass({
  export default (props) => {

    return(
      <div className="tweet">
        <h1>{ this.props.tweet }</h1>
        {console.log(this.props.tweet)}
      </div>
    );
 }


// export default Single;
//
// import _ from 'lodash';
// import React from 'react';
//
// function average(data){
//   return _.round(_.sum(data)/data.length);
// }
// export default (props) => {
//   return (
//     <div>
//       <Sparklines height={120} width={180} data={props.data}>
//         <SparklinesLine color={props.color} />
//         <SparklinesReferenceLine type='avg' />
//       </Sparklines>
//       <div>{average(props.data)} {props.units}</div>
//     </div>
//   )
// }
