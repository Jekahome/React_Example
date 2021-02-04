// КОМПОЗИЦИЯ вместо прямого наследования
function TrackInfo(props) {
    return (
        <div>
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}


export default TrackInfo;