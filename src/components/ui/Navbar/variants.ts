export const navListVariants = {
    closed: {
        opacity: 0,
        x: "100%",
        transition: {
            duration: .5,
            ease: "easeInOut",
            staggerChildren: 0.05,
        }
    },
    open: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .5,
            ease: "easeInOut",
            staggerChildren: 0.25
        }
    },
}
export const navItemVariants = {
    closed: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 1,
            ease: "easeInOut",
        }
    },
    open: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeInOut",
        }
    },
}
export const buttonVariants = {
    closed: {
      opacity: [0,1],
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      }
    },
    open: {
      opacity: [0,1],
      rotate: 360,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      }
    },
}