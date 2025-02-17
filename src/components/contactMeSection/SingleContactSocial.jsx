const SingleContactSocial = ({Icon, link, target, download}) => {

    const handleDownload = (e) => {
        if (download) {
            e.preventDefault()
            window.open(link, "_blank")

            const linkElement = document.createElement("a");
            linkElement.href = link;
            linkElement.download = download;
            linkElement.style.display = "none"
            document.body.appendChild(linkElement)
            linkElement.click()
            document.body.removeChild(linkElement)
        }
    }

    return (
        <div
            className="text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center ">
            <a href={link} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}
               onClick={download ? handleDownload : undefined} className="cursor-pointer">
                <Icon/>
            </a>
        </div>
    );
};

export default SingleContactSocial;