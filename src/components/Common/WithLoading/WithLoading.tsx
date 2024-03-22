import LoadingIcon from "../../../assets/icons/loading-icon.svg";


interface WithLoadingProps {
    isLoading: boolean;
}


const withLoading = <P,>(WrappedComponent: React.ComponentType<P>) => {
    const WithLoading = (props: WithLoadingProps & P) => {
        const { isLoading, ...restProps } = props;

        return (
            isLoading ? <div style={{ maxHeight: "100px", maxWidth: "100px", margin: "0 auto" }}><LoadingIcon height={"100%"} width={"100%"} /></div> : <WrappedComponent {...restProps as P} />
        )
    }

    return WithLoading;
}


export default withLoading;