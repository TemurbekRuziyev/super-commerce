import React, { Component } from 'react';

import { ErrorBoundaryContainer, ErrorBoundaryImage, ErrorBoundaryText } from './error-boundary.styles';

class ErrorBoundary extends Component {
    constructor() {
        super();

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorBoundaryContainer>
                    <ErrorBoundaryImage src='https://i.imgur.com/U3vTGjX.png' alt='Error image' />
                    <ErrorBoundaryText>Sorry, Something went wrong!</ErrorBoundaryText>
                </ErrorBoundaryContainer>
            )
        }

        return this.props.children;
    }
}


export default ErrorBoundary;