export const noScroll = (isShowMobileMenu) => {
    if (isShowMobileMenu) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
    return () => {
        document.body.style.overflow = "auto";
    };
}