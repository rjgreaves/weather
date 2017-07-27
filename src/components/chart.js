/**
 * Created by reube on 27/07/2017.
 */
import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.colour}/>
            </Sparklines>
        </div>
    )
}