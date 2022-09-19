export const variants = {
    onLoad: {
        opacity: 0

    },

    onLoaded: {
        opacity: 1,
        transition: {
            duration: .5,
        }
    },

    onXLoad: {
        opacity: 0,
        x: "-100vw"
    },

    onXLoaded: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .5,
            delay: .5
        }
    },
    XLoad: {
        opacity: 0,
        x: "100vw"
    },

    XLoaded: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,

        }
    }
}