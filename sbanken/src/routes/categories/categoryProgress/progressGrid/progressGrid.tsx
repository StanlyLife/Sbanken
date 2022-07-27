export const ProgressGrid = ({
    setTransactionGridOpen,
}: {
    setTransactionGridOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <>
            <button onClick={() => setTransactionGridOpen((prev: boolean) => !prev)}>CLOSE</button>
            <h1>transaction view</h1>
        </>
    );
};
