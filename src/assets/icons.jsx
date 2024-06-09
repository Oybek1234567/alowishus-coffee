export const Icons = {
    logo: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            width={126}
            height={50}
            fill='none'
            {...props}>
            <path fill='url(#a)' d='M0 0h126v50H0z' />
            <defs>
                <pattern
                    id='a'
                    width={1}
                    height={1}
                    patternContentUnits='objectBoundingBox'>
                    <use
                        xlinkHref='#b'
                        transform='matrix(.00336 0 0 .00847 -.004 0)'
                    />
                </pattern>
                <image
                    xlinkHref='data:image/png;base64,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'
                    id='b'
                    width={300}
                    height={118}
                />
            </defs>
        </svg>
    ),
    vector: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={20}
            height={20}
            fill='none'
            {...props}>
            <path
                fill='#1B1B1D'
                d='M6.132.504 2.42 7H1a1.001 1.001 0 0 0-.965 1.263l2.799 10.263A2.004 2.004 0 0 0 4.764 20h10.473c.898 0 1.692-.605 1.93-1.475l2.799-10.263A.998.998 0 0 0 19 7h-1.42L13.868.504l-1.736.992L15.277 7H4.723l3.145-5.504L6.132.504ZM12 11h2v5h-2v-5Zm-6 0h2v5H6v-5Z'
            />
        </svg>
    ),
    stars: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={36}
            height={36}
            fill='none'
            {...props}>
            <g clipPath='url(#a)'>
                <path
                    fill='#1B1B1D'
                    d='M26.385 21.39c-.12.124-.213.272-.27.435a1.23 1.23 0 0 0 0 .525L27 28.245c.079.46.027.933-.15 1.365-.18.436-.482.812-.87 1.08-.385.27-.836.431-1.305.465a2.46 2.46 0 0 1-1.335-.33l-4.785-2.655a1.05 1.05 0 0 0-.525-.135 1.11 1.11 0 0 0-.54.135l-4.755 2.655a2.67 2.67 0 0 1-1.35.315 2.505 2.505 0 0 1-2.31-2.895l.96-5.895a1.035 1.035 0 0 0 0-.525.99.99 0 0 0-.255-.435l-4.215-4.245a2.625 2.625 0 0 1-.645-1.185 2.58 2.58 0 0 1 0-1.35 2.61 2.61 0 0 1 .81-1.11 2.579 2.579 0 0 1 1.23-.57l5.535-.84c.179-.032.348-.104.495-.21.146-.111.264-.255.345-.42l2.4-5.16a2.49 2.49 0 0 1 .915-1.05 2.505 2.505 0 0 1 2.685 0c.399.256.716.62.915 1.05l2.415 5.16c.076.168.195.313.345.42.146.109.315.181.495.21l5.535.84c.454.077.878.274 1.23.57.345.303.603.69.75 1.125.12.442.12.908 0 1.35-.108.444-.33.853-.645 1.185l-3.99 4.23Z'
                />
            </g>
            <defs>
                <clipPath id='a'>
                    <path fill='#fff' d='M0 0h36v36H0z' />
                </clipPath>
            </defs>
        </svg>
    ),
    email: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={28}
            height={28}
            fill='none'
            {...props}>
            <path
                fill='#64646A'
                d='m18.143 15.162-2.345 2.353c-.951.954-2.624.975-3.596 0l-2.345-2.353-8.423 8.45c.314.145.66.232 1.027.232h23.078c.368 0 .713-.087 1.026-.232l-8.422-8.45Z'
            />
            <path
                fill='#64646A'
                d='M25.54 4.156H2.46c-.367 0-.712.087-1.026.232l9 9.03.003.001v.002l2.927 2.936c.31.31.961.31 1.272 0l2.926-2.936.002-.002.002-.001 9-9.03a2.434 2.434 0 0 0-1.027-.232ZM.262 5.535A2.43 2.43 0 0 0 0 6.617v14.766c0 .39.1.754.262 1.082L8.699 14 .262 5.535ZM27.738 5.535 19.301 14l8.437 8.465c.163-.328.262-.692.262-1.082V6.617c0-.39-.1-.754-.262-1.082Z'
            />
        </svg>
    ),
    call: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={30}
            height={30}
            fill='none'
            {...props}>
            <path
                fill='#64646A'
                d='M22.708 17.975c-.84-.18-1.504.209-2.092.55-.602.35-1.747 1.28-2.404 1.042-3.361-1.384-6.522-4.326-7.89-7.7-.242-.671.683-1.824 1.031-2.433.338-.59.72-1.26.546-2.107-.158-.76-2.193-3.35-2.912-4.058-.475-.467-.961-.725-1.46-.766-1.877-.08-3.973 2.423-4.34 3.022-.921 1.277-.916 2.977.015 5.038 2.244 5.535 10.732 13.89 16.288 16.218 1.026.48 1.963.72 2.806.72.824 0 1.558-.23 2.188-.686.476-.275 3.083-2.474 3.014-4.401-.04-.492-.297-.983-.76-1.458-.702-.727-3.275-2.823-4.03-2.981Z'
            />
        </svg>
    ),
    facebook: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={30}
            height={30}
            fill='none'
            {...props}>
            <path
                fill='#64646A'
                d='M16.746 26.246V16.001h3.457l.513-4.011h-3.97V9.435c0-1.158.323-1.95 1.984-1.95h2.105V3.909a27.922 27.922 0 0 0-3.084-.16c-3.055 0-5.152 1.866-5.152 5.29v2.943H9.165v4.012h3.441v10.252h4.14Z'
            />
        </svg>
    ),
    instagram: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={30}
            height={30}
            fill='none'
            {...props}>
            <path
                fill='#64646A'
                d='M26.184 10.381a8.16 8.16 0 0 0-.524-2.77 5.762 5.762 0 0 0-3.291-3.29 8.258 8.258 0 0 0-2.733-.526c-1.202-.054-1.584-.069-4.636-.069-3.053 0-3.444 0-4.637.07a8.257 8.257 0 0 0-2.732.524A5.759 5.759 0 0 0 4.34 7.611a8.193 8.193 0 0 0-.524 2.732c-.053 1.203-.07 1.585-.07 4.637 0 3.053 0 3.443.07 4.638.019.935.195 1.857.524 2.733a5.762 5.762 0 0 0 3.293 3.29 8.23 8.23 0 0 0 2.73.563c1.205.054 1.586.07 4.638.07 3.053 0 3.444 0 4.638-.07a8.237 8.237 0 0 0 2.732-.524 5.77 5.77 0 0 0 3.292-3.291 8.232 8.232 0 0 0 .523-2.734c.054-1.202.07-1.584.07-4.637-.002-3.053-.002-3.44-.072-4.637ZM14.992 20.753a5.778 5.778 0 0 1-5.778-5.78 5.779 5.779 0 1 1 5.779 5.779Zm6.01-10.424a1.346 1.346 0 0 1-1.348-1.348 1.346 1.346 0 1 1 2.694 0c0 .745-.603 1.348-1.347 1.348Z'
            />
            <path
                fill='#64646A'
                d='M14.992 18.727a3.754 3.754 0 1 0 0-7.507 3.754 3.754 0 0 0 0 7.507Z'
            />
        </svg>
    ),
    twitter: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={30}
            height={30}
            fill='none'
            {...props}>
            <path
                fill='#64646A'
                d='M24.541 9.996c.017.219.017.436.017.654 0 6.656-5.067 14.326-14.325 14.326-2.853 0-5.503-.826-7.733-2.261.405.046.795.062 1.216.062 2.354 0 4.52-.795 6.251-2.15a5.045 5.045 0 0 1-4.708-3.492c.311.046.623.077.951.077a5.36 5.36 0 0 0 1.326-.17A5.034 5.034 0 0 1 3.5 12.1v-.063a5.08 5.08 0 0 0 2.275.64 5.028 5.028 0 0 1-2.245-4.193c0-.935.248-1.793.685-2.54a14.32 14.32 0 0 0 10.382 5.268 5.721 5.721 0 0 1-.125-1.153 5.033 5.033 0 0 1 5.035-5.035c1.45 0 2.759.607 3.679 1.59a9.946 9.946 0 0 0 3.195-1.217 5.026 5.026 0 0 1-2.214 2.775c1.014-.11 1.997-.39 2.899-.78a10.806 10.806 0 0 1-2.524 2.604Z'
            />
        </svg>
    ),
    linkedin: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={30}
            height={30}
            fill='none'
            {...props}>
            <path
                fill='#64646A'
                d='M6.229 8.996a2.735 2.735 0 1 0 0-5.47 2.735 2.735 0 0 0 0 5.47ZM11.546 11.069v15.174h4.712v-7.504c0-1.98.372-3.898 2.827-3.898 2.421 0 2.451 2.264 2.451 4.023v7.38h4.714v-8.321c0-4.088-.88-7.23-5.657-7.23-2.294 0-3.832 1.26-4.46 2.45h-.064V11.07h-4.523Zm-7.677 0h4.718v15.174H3.87V11.069Z'
            />
        </svg>
    ),
    arrow: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={30}
            height={30}
            fill='none'
            {...props}>
            <path
                stroke='#000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2.5}
                d='M6.25 15h17.5M15 6.25 23.75 15 15 23.75'
            />
        </svg>
    ),
    food: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={150}
            height={150}
            fill='none'
            {...props}>
            <path
                fill='#64646A'
                d='M125.625 78.709a13.255 13.255 0 0 1-1.733-2.527c-.234 24.122-19.927 43.675-44.103 43.675-24.32 0-44.108-19.787-44.108-44.108 0-24.321 19.787-44.108 44.108-44.108 20.922 0 38.489 14.644 42.99 34.22l3.994-29.694.09-.668c-11.374-13.283-28.256-21.716-47.074-21.716-14.68 0-28.183 5.135-38.812 13.7v14.285c0 8.4-4.354 16.07-11.243 20.452v50.009c11.28 15.436 29.514 25.485 50.055 25.485 21.584 0 40.623-11.095 51.721-27.88V82.594a13.272 13.272 0 0 1-5.885-3.885Z'
            />
            <path
                fill='#64646A'
                d='M79.79 39.137c-20.189 0-36.613 16.424-36.613 36.612 0 20.189 16.424 36.612 36.612 36.612 20.188 0 36.612-16.423 36.612-36.612 0-20.188-16.424-36.612-36.612-36.612ZM149.833 7.234a5.776 5.776 0 0 0-11.501-.77l-8.44 62.74a5.777 5.777 0 0 0 5.725 6.546h3.389v67.295a5.497 5.497 0 1 0 10.993 0l-.166-135.811ZM33.481 8.454a3.747 3.747 0 1 0-7.496 0v20.738H20.49V8.454a3.747 3.747 0 1 0-7.496 0v20.738H7.496V8.454a3.747 3.747 0 1 0-7.496 0v33.814c0 7.305 4.706 13.529 11.244 15.81v84.967a5.497 5.497 0 0 0 10.994 0V58.077c6.538-2.28 11.243-8.504 11.243-15.81V8.455Z'
            />
        </svg>
    ),
    fastFood: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={150}
            height={150}
            fill='none'
            {...props}>
            <g fill='#64646A' clipPath='url(#a)'>
                <path d='M45.319 104.313c-3.967-2.275-6.647-6.55-6.647-11.442 0-20.193 16.428-36.621 36.621-36.621h15.091l.711-11.719H5.585l6.142 101.34A4.394 4.394 0 0 0 16.113 150h26.965a21.859 21.859 0 0 1-4.406-13.184c0-5.698 3.635-10.562 8.707-12.399a17.469 17.469 0 0 1-2.847-9.573 17.47 17.47 0 0 1 2.853-9.582c-1.433-.323-2.229-.64-2.066-.949ZM48.335 35.743H92.285a4.394 4.394 0 1 0 0-8.79H56.453L68.298 8.79h15.198a4.394 4.394 0 1 0 0-8.789H65.918c-1.486 0-2.87.75-3.68 1.994l-16.279 24.96H4.395a4.394 4.394 0 1 0 0 8.788h43.924l.016.001Z' />
                <path d='M47.46 92.871a4.394 4.394 0 0 0 4.395 4.395h93.75A4.394 4.394 0 0 0 150 92.87c0-15.346-12.486-27.832-27.832-27.832H75.293c-15.347 0-27.832 12.486-27.832 27.832ZM62.11 106.055a8.788 8.788 0 0 0-8.79 8.789 8.789 8.789 0 0 0 8.79 8.789h73.242a8.789 8.789 0 0 0 0-17.578H62.109ZM145.605 132.422h-93.75a4.394 4.394 0 0 0-4.394 4.394c0 7.27 5.914 13.184 13.184 13.184h76.171c7.27 0 13.184-5.914 13.184-13.184a4.394 4.394 0 0 0-4.395-4.394Z' />
            </g>
            <defs>
                <clipPath id='a'>
                    <path fill='#fff' d='M0 0h150v150H0z' />
                </clipPath>
            </defs>
        </svg>
    ),
    iceCream: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={98}
            height={150}
            fill='none'
            {...props}>
            <path
                fill='#64646A'
                d='M90.158 51.643c-1.67-1.07-2.543-2.99-2.221-4.892C92.043 22.389 73.233.346 49.032.004 23.834-.353 4.542 22.354 9.064 47.245c.338 1.87-.422 3.788-1.936 4.883a14.974 14.974 0 0 0-6.19 13.097c.816 13.49 17.708 19.02 26.395 8.837.122.075.247.154.369.226 1.276.773 2.036 2.092 2.036 3.532v6.465c0 2.453.973 4.742 2.74 6.447 5.632 5.433 15.178 1.537 15.178-6.603V69.476c0-3.569 4.167-5.461 6.707-2.993a3.924 3.924 0 0 1 1.2 2.837v7.508a8.96 8.96 0 0 0 9.288 8.956c6.754-.25 8.19-5.356 8.562-9.232 9.727 6.868 23.223.172 23.667-11.686a15.09 15.09 0 0 0-6.922-13.223Zm-47.82-30.752c-2.137.712-2.271 1.088-3.212 1.088-2.676 0-3.47-3.648-1.058-4.77a25.358 25.358 0 0 1 2.7-1.07 2.502 2.502 0 1 1 1.57 4.752ZM26.66 37.122a2.504 2.504 0 0 1-2.434-3.1 25.26 25.26 0 0 1 5.002-9.963 2.502 2.502 0 1 1 3.863 3.178 20.24 20.24 0 0 0-4.003 7.98 2.499 2.499 0 0 1-2.428 1.905ZM78.392 83.97a2.383 2.383 0 0 1 1.77 3.22l-22.387 56.527c-3.31 8.376-15.325 8.38-18.637 0L16.817 87.365c-.572-1.443.366-3.028 1.904-3.242 1.01-.141 2.015-.36 3.003-.657a2.39 2.39 0 0 1 3.081 2.056c.234 2.443 1.112 5.839 4.198 8.814 7.666 7.393 19.828 3.654 22.923-5.598.533-1.593 2.487-2.121 3.792-1.064 6.106 4.949 15.807 3.994 20.21-2.719.487-.743 1.405-1.184 2.464-.985Z'
            />
        </svg>
    ),
    fillStars: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={120}
            height={24}
            fill='none'
            {...props}>
            <path
                fill='#FFB700'
                d='M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065ZM45.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L32.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L36 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065ZM69.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L56.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L60 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065ZM93.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L80.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L84 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065ZM117.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001l-2.467 5.462-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057l5.445-3.63 5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065Z'
            />
        </svg>
    ),
    leftArrow: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={30}
            height={30}
            fill='none'
            {...props}>
            <path
                stroke='#000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={3}
                d='M23.75 15H6.25M15 6.25 6.25 15 15 23.75'
            />
        </svg>
    ),
    rightArrow: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={30}
            height={30}
            fill='none'
            {...props}>
            <path
                stroke='#000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={3}
                d='M6.25 15h17.5M15 6.25 23.75 15 15 23.75'
            />
        </svg>
    ),
};