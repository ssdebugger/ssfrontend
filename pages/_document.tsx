import Document, {
    DocumentContext,
    DocumentInitialProps,
    Head,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })
            const initialProps = await Document.getInitialProps(ctx)
            initialProps.head.push(
                <>
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-ZGF85QQH10"
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZGF85QQH10"></script>
                                        <script>
                                            window.dataLayer = window.dataLayer || [];
                                            function gtag(){dataLayer.push(arguments);}
                                            gtag('js', new Date());

                                            gtag('config', 'G-ZGF85QQH10',{ page_path: window.location.pathname,});
                                        </script>`,
                        }}
                    />
                </>
            )

            return {
                ...initialProps,
                styles: (
                    <>
                        <meta
                            name="description"
                            content="Sellsage ecommerce platform for ecofriendly products like tableware,dinner bundles,spoons,plates,forks,knifes,bowls,containers."
                        ></meta>
                        {/* <Head>
                            <script
                                async
                                src="https://www.googletagmanager.com/gtag/js?id=G-ZGF85QQH10"
                            ></script>
                            <script
                                dangerouslySetInnerHTML={{
                                    __html: `
                                        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZGF85QQH10"></script>
                                        <script>
                                            window.dataLayer = window.dataLayer || [];
                                            function gtag(){dataLayer.push(arguments);}
                                            gtag('js', new Date());

                                            gtag('config', 'G-ZGF85QQH10',{ page_path: window.location.pathname,});
                                        </script>`,
                                }}
                            />
                        </Head> */}
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }
}
