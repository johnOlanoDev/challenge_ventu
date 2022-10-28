const dueDate = (state, value) => {
    switch (state) {
        case 'Completed':
            return <span className="completed">{value}</span>
        case 'Processing':
            return <span className="processing">{value}</span>
        case 'Missing':
            return <span className="missing tooltip-toggle" data-tooltip="Due in 2 days">{value}</span>
        case 'Delivered':
            return <span className="delivered">{value}</span>
        case 'Regular':
            return <span className="regular">{value}</span>
    }
}

export default dueDate