const Slideinright = ({ children }) => {
    return (
        <div id="addresspanel" className="cd-panel cd-panel--from-right ">
            <div className="cd-panel__container">
                <div className="cd-panel__content">{children}</div>
            </div>
            <style jsx>{`
                .cd-panel {
                    /*...*/
                    visibility: hidden;
                    background-color: red;
                    transition: visibility 0s 0.6s;
                }

                .cd-panel.cd-panel--is-visible {
                    visibility: visible;
                    transition: visibility 1s 1s;
                }

                .cd-panel__header {
                    /*...*/
                    position: fixed;
                    top: 0;
                    width: 90%;
                    height: 50px;
                    transition: transform 0.3s 0s;
                    transform: translateY(-50px);
                }

                .cd-panel--from-right .cd-panel__header {
                    right: 0;
                }

                .cd-panel--is-visible .cd-panel__header {
                    transition: transform 0.3s 0.3s;
                    transform: translateY(0px);
                }

                .cd-panel__container {
                    /*...*/
                    position: fixed;
                    width: 70%;
                    height: 100%;

                    top: 0;
                    transition: transform 0.3s 0.3s;
                }

                @media only screen and (max-width: 600px) {
                    .cd-panel__container {
                        width: 100%;
                    }
                }

                .cd-panel--from-right .cd-panel__container {
                    right: 0;
                    transform: translate3d(100%, 0, 0);
                }

                .cd-panel--is-visible .cd-panel__container {
                    transform: translate3d(0, 0, 0);
                    transition-delay: 0s;
                }
            `}</style>
        </div>
    )
}
export default Slideinright
