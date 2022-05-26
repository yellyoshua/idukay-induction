module.exports = function bestWay(way = [], [start, end]) {
    const start_index = way.indexOf(start);
    const end_index = way.lastIndexOf(end);
    
    const trace =  way.slice(
        start_index + 1,
        end_index,
    );

    const reverce_trace = [].concat(
        way.slice(0, start_index),
    ).concat(
        way.slice(end_index  + 1),
    );

    if (trace.length <= reverce_trace.length)
        return trace;
    return reverce_trace;
}