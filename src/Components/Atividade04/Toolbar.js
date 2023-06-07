function Button ({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function PlayButton ({movieName}){
    function handlePlayClick(){
        alert(`Playing ${movieName}!`);
    }

    return (
        <Button onClick={handlePlayClick}>
            Play {"movie"}
        </Button>
    );
}

function UploadButton(){
    return(
        <Button onClick={() => alert('Uploading')}>
            Upload Image
        </Button>
    );
}


export default function Toolbar(){
    return (
        <div className="limite">
        <div>
            <PlayButton movieName={"Kiki's Delivery Service"}/>
            <UploadButton />
        </div>
        </div>
    );
}
