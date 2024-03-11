import LoadingIcon from "../../../assets/icons/loading-icon.svg";


interface WithLoadingProps {
    isLoading: boolean;
}


const withLoading = <P,>(WrappedComponent: React.ComponentType<P>) => {
    const WithLoading = (props: WithLoadingProps & P) => {
        const { isLoading, ...restProps } = props;

        return (
            isLoading ? <div style={{ width: "100%", height: "100%" }}><LoadingIcon /></div> : <WrappedComponent {...restProps as P} />
        )
    }

    return WithLoading;
}


export default withLoading;