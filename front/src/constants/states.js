const stateSpan = (value) => {
    switch (value) {
        case 'Completed':
            return <span className="completed">Completed</span>
        case 'Processing':
            return <span className="processing">Processing</span>
        case 'Missing':
            return <span className="missing">Missing</span>
        case 'Delivered':
            return <span className="delivered">Delivered</span>
    }
}

export default stateSpan